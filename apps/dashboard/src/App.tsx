import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  LayoutDashboard,
  Menu,
  RefreshCw,
  Settings,
  ShieldCheck,
  Users,
  Video,
  X,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  Server,
  Wifi,
  WifiOff,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { useCallback, useEffect, useState } from "react";

import {
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import api from "./lib/api";
import CreatorsPage from "./pages/CreatorsPage";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  status?: string;
  services?: {
    api: string;
    database: string;
  };
  message?: string;
}

interface Platform {
  id: string;
  name: string;
  slug: string;
  isActive: boolean;
  _count?: {
    creators: number;
  };
}

interface Creator {
  id: string;
  username: string;
  displayName: string;
  profileUrl?: string | null;
  avatarUrl?: string | null;
  isVerified: boolean;
  isActive: boolean;
  platform?: {
    id: string;
    name: string;
    slug: string;
  };
  _count?: {
    posts: number;
    metricSnapshots: number;
    engagementStats: number;
    anomalyEvents: number;
  };
}

interface Post {
  id: string;
  creatorId: string;
  externalId: string;
  type: string;
  content: string;
  postUrl?: string | null;
  thumbnailUrl?: string | null;
  publishedAt: string;
  creator?: {
    username: string;
    displayName: string;
    platform?: {
      name: string;
      slug: string;
    };
  };
}

interface EngagementRecord {
  id: string;
  creatorId: string;
  periodType: string;
  periodStart: string;
  periodEnd: string;
  totalPosts: number;
  totalLikes: string | number;
  totalComments: string | number;
  totalViews: string | number;
  totalShares: string | number;
  averageLikes: string | number;
  averageComments: string | number;
  averageViews: string | number;
  averageEngagementRate: string | number | null;
  calculatedAt: string;
  creator?: {
    username: string;
    displayName: string;
    platform?: {
      name: string;
      slug: string;
    };
  };
}

interface Anomaly {
  id: string;
  creatorId: string;
  eventType: string;
  severity: string;
  status: string;
  metricName: string;
  expectedValue: string | number | null;
  observedValue: string | number | null;
  changePercent: string | number | null;
  description: string | null;
  detectedAt: string;
  creator?: {
    username: string;
    displayName: string;
  };
}

interface DashboardState {
  health: ApiResponse<never> | null;
  platforms: Platform[];
  creators: Creator[];
  posts: Post[];
  engagements: EngagementRecord[];
  anomalies: Anomaly[];
  totals: {
    platforms: number;
    creators: number;
    posts: number;
    engagements: number;
    anomalies: number;
  };
}

const navigation = [
  { label: "Overview", path: "/", icon: LayoutDashboard },
  { label: "Creators", path: "/creators", icon: Users },
  { label: "Posts", path: "/posts", icon: Video },
  { label: "Engagement", path: "/engagement", icon: Activity },
  { label: "Anomalies", path: "/anomalies", icon: AlertTriangle },
  { label: "Reports", path: "/reports", icon: BarChart3 },
];

const pageDescriptions: Record<string, string> = {
  "/": "Your creator performance at a glance.",
  "/creators": "Manage and understand creator performance.",
  "/posts": "Explore content performance across platforms.",
  "/engagement": "Understand audience engagement over time.",
  "/anomalies": "Monitor unusual changes in creator metrics.",
  "/reports": "Explore and prepare analytics reports.",
};

const initialDashboard: DashboardState = {
  health: null,
  platforms: [],
  creators: [],
  posts: [],
  engagements: [],
  anomalies: [],
  totals: {
    platforms: 0,
    creators: 0,
    posts: 0,
    engagements: 0,
    anomalies: 0,
  },
};

const chartColors = [
  "#818cf8",
  "#34d399",
  "#38bdf8",
  "#fbbf24",
  "#f472b6",
];

function formatNumber(value: number | string | null | undefined): string {
  const parsed = Number(value ?? 0);

  if (!Number.isFinite(parsed)) {
    return "0";
  }

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(parsed);
}

function compactNumber(value: number): string {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

function formatDate(value: string | null | undefined): string {
  if (!value) return "Not available";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Not available";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatDateTime(value: string | null | undefined): string {
  if (!value) return "Not available";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Not available";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function readableMetric(value: string): string {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (character) => character.toUpperCase());
}

function getSeverityClasses(severity: string): string {
  switch (severity.toUpperCase()) {
    case "CRITICAL":
      return "border-red-500/20 bg-red-500/10 text-red-300";
    case "HIGH":
      return "border-orange-500/20 bg-orange-500/10 text-orange-300";
    case "MEDIUM":
      return "border-amber-500/20 bg-amber-500/10 text-amber-300";
    default:
      return "border-slate-700 bg-slate-800 text-slate-300";
  }
}

function getStatusClasses(status: string): string {
  switch (status.toUpperCase()) {
    case "RESOLVED":
      return "text-emerald-400";
    case "ACKNOWLEDGED":
      return "text-sky-400";
    case "IGNORED":
      return "text-slate-500";
    default:
      return "text-amber-400";
  }
}

function getPlatformInitial(name: string): string {
  return name.slice(0, 1).toUpperCase();
}

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
  href: string;
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor,
  iconBackground,
  href,
}: StatCardProps) {
  return (
    <NavLink
      to={href}
      className="group rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-slate-700 hover:bg-slate-900"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {value}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBackground} ${iconColor}`}
        >
          <Icon size={21} />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-slate-500">{description}</p>
        <ExternalLink
          size={14}
          className="text-slate-600 transition group-hover:text-indigo-400"
        />
      </div>
    </NavLink>
  );
}

function SectionHeading({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        {description && (
          <p className="mt-1 text-xs text-slate-500">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

function LoadingPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-36 animate-pulse rounded-xl border border-slate-800 bg-slate-900/70"
          />
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <div className="h-80 animate-pulse rounded-xl border border-slate-800 bg-slate-900/70 xl:col-span-2" />
        <div className="h-80 animate-pulse rounded-xl border border-slate-800 bg-slate-900/70" />
      </div>
    </div>
  );
}

function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center px-5 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-slate-400">
        <BarChart3 size={20} />
      </div>
      <p className="mt-3 text-sm font-medium text-slate-300">{title}</p>
      <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function OverviewPage() {
  const [dashboard, setDashboard] =
    useState<DashboardState>(initialDashboard);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const loadDashboard = useCallback(async (manual = false) => {
    if (manual) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    const endpointErrors: string[] = [];

    const requests = await Promise.all([
      api.get<ApiResponse<never>>("/health")
        .catch(() => {
          endpointErrors.push("Health check");
          return null;
        }),

      api.get<ApiResponse<Platform[]>>("/platforms")
        .catch(() => {
          endpointErrors.push("Platforms");
          return null;
        }),

      api.get<ApiResponse<Creator[]>>("/creators")
        .catch(() => {
          endpointErrors.push("Creators");
          return null;
        }),

      api.get<ApiResponse<Post[]>>("/posts")
        .catch(() => {
          endpointErrors.push("Posts");
          return null;
        }),

      api.get<ApiResponse<EngagementRecord[]>>("/engagement")
        .catch(() => {
          endpointErrors.push("Engagement");
          return null;
        }),

      api.get<ApiResponse<Anomaly[]>>("/anomalies")
        .catch(() => {
          endpointErrors.push("Anomalies");
          return null;
        }),
    ]);

    const [
      healthResponse,
      platformResponse,
      creatorResponse,
      postResponse,
      engagementResponse,
      anomalyResponse,
    ] = requests;

    const platforms = platformResponse?.data?.data ?? [];
    const creators = creatorResponse?.data?.data ?? [];
    const posts = postResponse?.data?.data ?? [];
    const engagements = engagementResponse?.data?.data ?? [];
    const anomalies = anomalyResponse?.data?.data ?? [];

    setDashboard({
      health: healthResponse?.data ?? null,
      platforms,
      creators,
      posts,
      engagements,
      anomalies,
      totals: {
        platforms:
          platforms.length,
        creators:
          creatorResponse?.data?.pagination?.total ?? creators.length,
        posts:
          postResponse?.data?.pagination?.total ?? posts.length,
        engagements:
          engagementResponse?.data?.pagination?.total ?? engagements.length,
        anomalies:
          anomalyResponse?.data?.pagination?.total ?? anomalies.length,
      },
    });

    setErrors(endpointErrors);
    setLastUpdated(new Date().toISOString());
    setLoading(false);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    void loadDashboard();
  }, [loadDashboard]);

  const openAnomalies = dashboard.anomalies.filter(
    (anomaly) => anomaly.status === "OPEN",
  );

  const resolvedAnomalies = dashboard.anomalies.filter(
    (anomaly) => anomaly.status === "RESOLVED",
  );

  const latestEngagement = [...dashboard.engagements].sort(
    (a, b) =>
      new Date(b.calculatedAt).getTime() -
      new Date(a.calculatedAt).getTime(),
  )[0];

  const latestCreator = dashboard.creators[0];

  const engagementRate = latestEngagement
    ? Number(latestEngagement.averageEngagementRate ?? 0)
    : null;

  const engagementChartData = latestEngagement
    ? [
        {
          metric: "Likes",
          value: Number(latestEngagement.totalLikes),
        },
        {
          metric: "Comments",
          value: Number(latestEngagement.totalComments),
        },
        {
          metric: "Views",
          value: Number(latestEngagement.totalViews),
        },
        {
          metric: "Shares",
          value: Number(latestEngagement.totalShares),
        },
      ]
    : [];

  const platformChartData = dashboard.platforms.map((platform) => ({
    name: platform.name,
    creators: platform._count?.creators ?? 0,
  }));

  const hasPlatformCreators = platformChartData.some(
    (platform) => platform.creators > 0,
  );

  const recentAnomalies = [...dashboard.anomalies]
    .sort(
      (a, b) =>
        new Date(b.detectedAt).getTime() -
        new Date(a.detectedAt).getTime(),
    )
    .slice(0, 5);

  const recentPosts = [...dashboard.posts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    )
    .slice(0, 4);

  const databaseHealthy =
    dashboard.health?.services?.database === "connected";

  const apiHealthy =
    dashboard.health?.services?.api === "operational";

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-slate-400">
            Welcome to your analytics workspace.
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
            Performance overview
          </h2>
        </div>
        <LoadingPanel />
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
              Live analytics workspace
            </p>
          </div>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Performance overview
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Monitor your creators, content performance, engagement metrics,
            and unusual activity from one place.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="text-xs text-slate-500">
            {lastUpdated
              ? `Updated ${formatDateTime(lastUpdated)}`
              : "Waiting for data"}
          </div>

          <button
            type="button"
            onClick={() => void loadDashboard(true)}
            disabled={refreshing}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-indigo-500/50 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCw
              size={15}
              className={refreshing ? "animate-spin" : ""}
            />
            {refreshing ? "Refreshing..." : "Refresh data"}
          </button>
        </div>
      </div>

      {errors.length > 0 && (
        <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <AlertTriangle
            size={18}
            className="mt-0.5 shrink-0 text-amber-400"
          />
          <div>
            <p className="text-sm font-medium text-amber-300">
              Some dashboard data could not be loaded.
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Failed endpoints: {errors.join(", ")}. Other available sections
              are still displayed.
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Tracked creators"
          value={formatNumber(dashboard.totals.creators)}
          description={`${dashboard.platforms.length} platforms registered`}
          icon={Users}
          iconColor="text-indigo-300"
          iconBackground="bg-indigo-500/10"
          href="/creators"
        />

        <StatCard
          title="Published posts"
          value={formatNumber(dashboard.totals.posts)}
          description="Content in your workspace"
          icon={Video}
          iconColor="text-sky-300"
          iconBackground="bg-sky-500/10"
          href="/posts"
        />

        <StatCard
          title="Engagement rate"
          value={
            engagementRate === null
              ? "—"
              : `${formatNumber(engagementRate)}%`
          }
          description={
            latestEngagement
              ? `${latestEngagement.periodType.toLowerCase()} analytics`
              : "No analytics calculated yet"
          }
          icon={TrendingUp}
          iconColor="text-emerald-300"
          iconBackground="bg-emerald-500/10"
          href="/engagement"
        />

        <StatCard
          title="Open anomalies"
          value={formatNumber(openAnomalies.length)}
          description={`${resolvedAnomalies.length} resolved events`}
          icon={AlertTriangle}
          iconColor="text-amber-300"
          iconBackground="bg-amber-500/10"
          href="/anomalies"
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 xl:col-span-2">
          <SectionHeading
            title="Engagement performance"
            description={
              latestEngagement
                ? `${latestEngagement.periodType} period · ${formatDate(latestEngagement.periodStart)} – ${formatDate(latestEngagement.periodEnd)}`
                : "Engagement metrics will appear after analytics are calculated."
            }
            action={
              latestEngagement && (
                <span className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300">
                  {latestEngagement.periodType}
                </span>
              )
            }
          />

          {engagementChartData.length > 0 ? (
            <>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  {
                    label: "Total views",
                    value: latestEngagement?.totalViews,
                    icon: Eye,
                  },
                  {
                    label: "Total likes",
                    value: latestEngagement?.totalLikes,
                    icon: Heart,
                  },
                  {
                    label: "Comments",
                    value: latestEngagement?.totalComments,
                    icon: MessageCircle,
                  },
                  {
                    label: "Shares",
                    value: latestEngagement?.totalShares,
                    icon: Share2,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-lg border border-slate-800 bg-slate-950/60 p-3"
                    >
                      <div className="flex items-center gap-2 text-slate-500">
                        <Icon size={14} />
                        <span className="text-xs">{item.label}</span>
                      </div>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {compactNumber(Number(item.value ?? 0))}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={engagementChartData}
                    margin={{ top: 10, right: 5, left: -15, bottom: 0 }}
                  >
                    <CartesianGrid
                      stroke="#1e293b"
                      strokeDasharray="3 3"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="metric"
                      tick={{ fill: "#94a3b8", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tickFormatter={(value) => compactNumber(Number(value))}
                      tick={{ fill: "#64748b", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      cursor={{ fill: "#1e293b", opacity: 0.35 }}
                      contentStyle={{
                        backgroundColor: "#0f172a",
                        border: "1px solid #334155",
                        borderRadius: "10px",
                        color: "#f8fafc",
                      }}
                      formatter={(value) => formatNumber(Number(value))}
                    />
                    <Bar
                      dataKey="value"
                      name="Total"
                      fill="#818cf8"
                      radius={[5, 5, 0, 0]}
                      maxBarSize={54}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Values represent the latest calculated engagement period,
                not a historical time series.
              </p>
            </>
          ) : (
            <EmptyState
              title="No engagement analytics yet"
              description="Calculate engagement analytics for a creator and period to populate this chart."
            />
          )}
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <SectionHeading
            title="Platform distribution"
            description="Creators registered by platform"
          />

          {hasPlatformCreators ? (
            <>
              <div className="relative mt-5 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={platformChartData.filter(
                        (item) => item.creators > 0,
                      )}
                      dataKey="creators"
                      nameKey="name"
                      innerRadius={62}
                      outerRadius={88}
                      paddingAngle={4}
                      stroke="none"
                    >
                      {platformChartData
                        .filter((item) => item.creators > 0)
                        .map((item, index) => (
                          <Cell
                            key={item.name}
                            fill={chartColors[index % chartColors.length]}
                          />
                        ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0f172a",
                        border: "1px solid #334155",
                        borderRadius: "10px",
                        color: "#f8fafc",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-3xl font-semibold text-white">
                    {dashboard.totals.creators}
                  </p>
                  <p className="text-xs text-slate-500">Creators</p>
                </div>
              </div>

              <div className="mt-3 space-y-3">
                {platformChartData.map((platform, index) => (
                  <div
                    key={platform.name}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            chartColors[index % chartColors.length],
                        }}
                      />
                      <span className="text-sm text-slate-300">
                        {platform.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-white">
                      {platform.creators}
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <EmptyState
                title="No platform activity"
                description="Add creators to your registered platforms to see their distribution here."
              />
              <div className="mt-2 border-t border-slate-800 pt-3">
                {platformChartData.map((platform) => (
                  <div
                    key={platform.name}
                    className="flex justify-between py-2 text-xs text-slate-400"
                  >
                    <span>{platform.name}</span>
                    <span>{platform.creators} creators</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <SectionHeading
            title="Creator performance"
            description="Your currently tracked creator portfolio"
            action={
              <NavLink
                to="/creators"
                className="text-xs font-medium text-indigo-400 hover:text-indigo-300"
              >
                View creators
              </NavLink>
            }
          />

          {latestCreator ? (
            <div className="mt-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-lg font-semibold text-indigo-300">
                  {getPlatformInitial(latestCreator.displayName)}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate font-medium text-white">
                      {latestCreator.displayName}
                    </p>
                    {latestCreator.isVerified && (
                      <ShieldCheck
                        size={15}
                        className="text-sky-400"
                      />
                    )}
                  </div>
                  <p className="text-sm text-slate-500">
                    @{latestCreator.username}
                  </p>
                </div>

                <span className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300">
                  {latestCreator.platform?.name ?? "Unknown platform"}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-slate-950/60 p-3">
                  <p className="text-xs text-slate-500">Posts</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {formatNumber(latestCreator._count?.posts ?? 0)}
                  </p>
                </div>
                <div className="rounded-lg bg-slate-950/60 p-3">
                  <p className="text-xs text-slate-500">Snapshots</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {formatNumber(
                      latestCreator._count?.metricSnapshots ?? 0,
                    )}
                  </p>
                </div>
                <div className="rounded-lg bg-slate-950/60 p-3">
                  <p className="text-xs text-slate-500">Anomalies</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {formatNumber(
                      latestCreator._count?.anomalyEvents ?? 0,
                    )}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      latestCreator.isActive
                        ? "bg-emerald-400"
                        : "bg-slate-500"
                    }`}
                  />
                  <span className="text-xs text-slate-400">
                    {latestCreator.isActive ? "Active creator" : "Inactive"}
                  </span>
                </div>

                <NavLink
                  to="/creators"
                  className="text-xs font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Creator details
                </NavLink>
              </div>
            </div>
          ) : (
            <EmptyState
              title="No creators registered"
              description="Once you add a creator, their performance summary will appear here."
            />
          )}
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <SectionHeading
            title="Anomaly activity"
            description={`${openAnomalies.length} open · ${resolvedAnomalies.length} resolved`}
            action={
              <NavLink
                to="/anomalies"
                className="text-xs font-medium text-indigo-400 hover:text-indigo-300"
              >
                View all
              </NavLink>
            }
          />

          {recentAnomalies.length > 0 ? (
            <div className="mt-4 divide-y divide-slate-800">
              {recentAnomalies.map((anomaly) => (
                <div key={anomaly.id} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-200">
                        {readableMetric(anomaly.metricName)}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {anomaly.creator?.displayName ??
                          anomaly.creator?.username ??
                          "Unknown creator"}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 rounded-md border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${getSeverityClasses(anomaly.severity)}`}
                    >
                      {anomaly.severity}
                    </span>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs text-slate-500">
                      {formatDateTime(anomaly.detectedAt)}
                    </span>
                    <span
                      className={`text-xs font-medium ${getStatusClasses(anomaly.status)}`}
                    >
                      {anomaly.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No anomalies detected"
              description="Detected metric changes will appear here."
            />
          )}
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <SectionHeading
          title="Recent content"
          description="Latest published posts across your creator portfolio"
          action={
            <NavLink
              to="/posts"
              className="text-xs font-medium text-indigo-400 hover:text-indigo-300"
            >
              View posts
            </NavLink>
          }
        />

        {recentPosts.length > 0 ? (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-slate-800 text-xs text-slate-500">
                  <th className="pb-3 font-medium">Content</th>
                  <th className="pb-3 font-medium">Creator</th>
                  <th className="pb-3 font-medium">Platform</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Published</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {recentPosts.map((post) => (
                  <tr key={post.id}>
                    <td className="max-w-[280px] py-4 pr-4">
                      <p className="truncate text-sm text-slate-200">
                        {post.content || post.externalId}
                      </p>
                    </td>
                    <td className="py-4 pr-4 text-sm text-slate-400">
                      {post.creator?.displayName ??
                        post.creator?.username ??
                        "Unknown"}
                    </td>
                    <td className="py-4 pr-4 text-sm text-slate-400">
                      {post.creator?.platform?.name ?? "—"}
                    </td>
                    <td className="py-4 pr-4">
                      <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                        {post.type}
                      </span>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-slate-500">
                      {formatDate(post.publishedAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            title="No published posts"
            description="Published creator content will appear here."
          />
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${
              apiHealthy
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {apiHealthy ? <Wifi size={19} /> : <WifiOff size={19} />}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-white">API service</p>
            <p className="mt-1 text-xs text-slate-500">
              {apiHealthy ? "Operational" : "Unavailable or unverified"}
            </p>
          </div>
          {apiHealthy && (
            <CheckCircle2 size={17} className="text-emerald-400" />
          )}
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${
              databaseHealthy
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            <Server size={19} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-white">Database connection</p>
            <p className="mt-1 text-xs text-slate-500">
              {databaseHealthy ? "Connected" : "Unavailable or unverified"}
            </p>
          </div>
          {databaseHealthy && (
            <CheckCircle2 size={17} className="text-emerald-400" />
          )}
        </div>
      </div>
    </section>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-8">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-sm text-slate-400">
        This section will be implemented and connected to the existing API
        in its dedicated development phase.
      </p>
    </div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const currentPage = navigation.find(
    (item) => item.path === location.pathname,
  );

  const pageTitle = currentPage?.label || "Overview";
  const pageDescription =
    pageDescriptions[location.pathname] || "Analytics workspace.";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-800 bg-slate-950 transition-transform lg:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white">
              <BarChart3 size={22} />
            </div>
            <div>
              <p className="font-semibold tracking-tight text-white">
                Creator<span className="text-indigo-400">Pulse</span>
              </p>
              <p className="text-xs text-slate-500">
                Analytics platform
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close navigation"
            className="text-slate-400 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-6">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                      isActive
                        ? "bg-indigo-500/15 font-medium text-indigo-300"
                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto border-t border-slate-800 p-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-indigo-300">
              CA
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">
                Analytics Workspace
              </p>
              <p className="text-xs text-slate-500">Development</p>
            </div>
            <Settings size={17} className="text-slate-500" />
          </div>
        </div>
      </aside>

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="min-h-screen lg:pl-64">
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950/90 px-5 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open navigation"
              className="text-slate-400 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
            <div>
              <h1 className="text-lg font-semibold text-white">
                {pageTitle}
              </h1>
              <p className="hidden text-xs text-slate-500 sm:block">
                {pageDescription}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Help"
              className="hidden rounded-lg p-2 text-slate-400 hover:bg-slate-900 sm:block"
            >
              <CircleHelp size={19} />
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-800 px-3 py-2 text-sm text-slate-300 hover:bg-slate-900"
            >
              <span className="hidden sm:inline">Workspace</span>
              <ChevronDown size={15} />
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] p-5 sm:p-8">
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route
              path="/creators"
              element={<CreatorsPage />}
            />
            <Route
              path="/posts"
              element={<PlaceholderPage title="Post performance" />}
            />
            <Route
              path="/engagement"
              element={<PlaceholderPage title="Engagement analytics" />}
            />
            <Route
              path="/anomalies"
              element={<PlaceholderPage title="Anomaly monitoring" />}
            />
            <Route
              path="/reports"
              element={<PlaceholderPage title="Analytics reports" />}
            />
            <Route
              path="*"
              element={<PlaceholderPage title="Page not found" />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;