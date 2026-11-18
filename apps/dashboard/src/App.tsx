import {
  Activity,
  AlertTriangle,
  BarChart3,
  ChevronDown,
  CircleHelp,
  LayoutDashboard,
  Menu,
  Radio,
  Settings,
  Users,
  Video,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const navigation = [
  {
    label: "Overview",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Creators",
    path: "/creators",
    icon: Users,
  },
  {
    label: "Posts",
    path: "/posts",
    icon: Video,
  },
  {
    label: "Engagement",
    path: "/engagement",
    icon: Activity,
  },
  {
    label: "Anomalies",
    path: "/anomalies",
    icon: AlertTriangle,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: BarChart3,
  },
];

const pageDescriptions: Record<string, string> = {
  "/": "Your creator performance at a glance.",
  "/creators": "Manage and understand creator performance.",
  "/posts": "Explore content performance across platforms.",
  "/engagement": "Understand audience engagement over time.",
  "/anomalies": "Monitor unusual changes in creator metrics.",
  "/reports": "Explore and prepare analytics reports.",
};

function OverviewPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm text-slate-400">
          Welcome to your analytics workspace.
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
          Performance overview
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Your dashboard foundation is ready. The next implementation step
          will connect creator, post, engagement, and anomaly data to live API
          endpoints.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Creators",
            description: "Creator portfolio",
            icon: Users,
          },
          {
            title: "Content",
            description: "Published posts",
            icon: Video,
          },
          {
            title: "Engagement",
            description: "Performance analytics",
            icon: Activity,
          },
          {
            title: "Anomalies",
            description: "Metric monitoring",
            icon: AlertTriangle,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300">
                <Icon size={19} />
              </div>
              <h3 className="mt-5 font-medium text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {item.description}
              </p>
              <p className="mt-4 text-xs text-slate-500">
                Awaiting live data integration
              </p>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
            <Radio size={19} />
          </div>
          <div>
            <h3 className="font-medium text-white">
              Analytics workspace initialized
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Frontend foundation created. Live analytics integration is next.
            </p>
          </div>
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

  const currentPage =
    navigation.find((item) => item.path === location.pathname);

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
              element={<PlaceholderPage title="Creator management" />}
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