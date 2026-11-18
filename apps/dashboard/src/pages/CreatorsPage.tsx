
import { useCallback, useEffect, useState, type FormEvent } from "react";
import {
  Search,
  Plus,
  RefreshCw,
  Users,
  ShieldCheck,
  ExternalLink,
  Pencil,
  Eye,
  Power,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  AlertCircle,
  Video,
  Activity,
  BarChart3,
} from "lucide-react";

import api from "../lib/api";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

interface Platform {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string | null;
  isActive?: boolean;
  _count?: {
    creators: number;
  };
}

interface Creator {
  id: string;
  platformId: string;
  externalId: string;
  username: string | null;
  displayName: string | null;
  profileUrl: string | null;
  avatarUrl: string | null;
  bio: string | null;
  isVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  platform?: {
    id: string;
    name: string;
    slug: string;
    logoUrl?: string | null;
    baseUrl?: string | null;
  };
  _count?: {
    posts: number;
    metricSnapshots: number;
    engagementStats: number;
    anomalyEvents: number;
  };
  posts?: Array<{
    id: string;
    content: string;
    type: string;
    publishedAt: string;
    postUrl?: string | null;
  }>;
}

interface CreatorForm {
  platformId: string;
  externalId: string;
  username: string;
  displayName: string;
  profileUrl: string;
  avatarUrl: string;
  bio: string;
  isVerified: boolean;
  isActive: boolean;
}

const emptyForm: CreatorForm = {
  platformId: "",
  externalId: "",
  username: "",
  displayName: "",
  profileUrl: "",
  avatarUrl: "",
  bio: "",
  isVerified: false,
  isActive: true,
};

const inputClasses =
  "w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10";

function formatNumber(value: number | undefined): string {
  return new Intl.NumberFormat("en-US").format(value ?? 0);
}

function formatDate(value?: string): string {
  if (!value) return "Not available";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Not available";

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function getInitials(name?: string | null): string {
  if (!name) return "CR";

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
}

function CreatorModal({
  creator,
  platforms,
  saving,
  onClose,
  onSubmit,
}: {
  creator: Creator | null;
  platforms: Platform[];
  saving: boolean;
  onClose: () => void;
  onSubmit: (form: CreatorForm) => Promise<void>;
}) {
  const [form, setForm] = useState<CreatorForm>(() => {
    if (!creator) return emptyForm;

    return {
      platformId: creator.platformId,
      externalId: creator.externalId,
      username: creator.username ?? "",
      displayName: creator.displayName ?? "",
      profileUrl: creator.profileUrl ?? "",
      avatarUrl: creator.avatarUrl ?? "",
      bio: creator.bio ?? "",
      isVerified: creator.isVerified,
      isActive: creator.isActive,
    };
  });

  const [formError, setFormError] = useState("");

  function updateField<K extends keyof CreatorForm>(
    field: K,
    value: CreatorForm[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    if (!form.platformId) {
      setFormError("Select a platform.");
      return;
    }

    if (!form.externalId.trim()) {
      setFormError("The external platform ID is required.");
      return;
    }

    try {
      await onSubmit(form);
    } catch (error) {
      setFormError(getErrorMessage(error));
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">
      <div className="my-auto w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold text-white">
              {creator ? "Edit creator" : "Register creator"}
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              {creator
                ? "Update the creator's profile information."
                : "Add a creator to your analytics workspace."}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
            aria-label="Close form"
          >
            <X size={19} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          {formError && (
            <div className="flex items-start gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">
              <AlertCircle size={17} className="mt-0.5 shrink-0" />
              {formError}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-400">
                Platform <span className="text-red-400">*</span>
              </span>
              <select
                required
                value={form.platformId}
                onChange={(event) =>
                  updateField("platformId", event.target.value)
                }
                className={inputClasses}
              >
                <option value="">Select platform</option>
                {platforms
                  .filter((platform) => platform.isActive !== false)
                  .map((platform) => (
                    <option key={platform.id} value={platform.id}>
                      {platform.name}
                    </option>
                  ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-400">
                External platform ID <span className="text-red-400">*</span>
              </span>
              <input
                required
                maxLength={191}
                value={form.externalId}
                onChange={(event) =>
                  updateField("externalId", event.target.value)
                }
                placeholder="Platform-specific creator ID"
                className={inputClasses}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-400">
                Display name
              </span>
              <input
                maxLength={150}
                value={form.displayName}
                onChange={(event) =>
                  updateField("displayName", event.target.value)
                }
                placeholder="Creator display name"
                className={inputClasses}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-medium text-slate-400">
                Username
              </span>
              <input
                maxLength={100}
                value={form.username}
                onChange={(event) =>
                  updateField("username", event.target.value)
                }
                placeholder="creator_username"
                className={inputClasses}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-xs font-medium text-slate-400">
                Profile URL
              </span>
              <input
                type="url"
                maxLength={500}
                value={form.profileUrl}
                onChange={(event) =>
                  updateField("profileUrl", event.target.value)
                }
                placeholder="https://..."
                className={inputClasses}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-xs font-medium text-slate-400">
                Avatar URL
              </span>
              <input
                type="url"
                maxLength={500}
                value={form.avatarUrl}
                onChange={(event) =>
                  updateField("avatarUrl", event.target.value)
                }
                placeholder="https://..."
                className={inputClasses}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-xs font-medium text-slate-400">
                Bio
              </span>
              <textarea
                rows={4}
                maxLength={10000}
                value={form.bio}
                onChange={(event) =>
                  updateField("bio", event.target.value)
                }
                placeholder="Tell us about this creator..."
                className={inputClasses}
              />
              <span className="mt-1 block text-right text-[11px] text-slate-600">
                {form.bio.length}/10000
              </span>
            </label>
          </div>

          <div className="flex flex-wrap gap-5 border-t border-slate-800 pt-4">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={form.isVerified}
                onChange={(event) =>
                  updateField("isVerified", event.target.checked)
                }
                className="h-4 w-4 accent-indigo-500"
              />
              Verified creator
            </label>

            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(event) =>
                  updateField("isActive", event.target.checked)
                }
                className="h-4 w-4 accent-indigo-500"
              />
              Active creator
            </label>
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-800 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-700 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-400 disabled:opacity-50"
            >
              {saving && <Loader2 size={15} className="animate-spin" />}
              {saving
                ? "Saving..."
                : creator
                  ? "Save changes"
                  : "Register creator"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CreatorDetails({
  creator,
  loading,
  onClose,
}: {
  creator: Creator | null;
  loading: boolean;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">
      <div className="my-auto w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Creator profile
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Profile information and recent content
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
            aria-label="Close details"
          >
            <X size={19} />
          </button>
        </div>

        <div className="p-6">
          {loading || !creator ? (
            <div className="flex min-h-48 items-center justify-center">
              <Loader2 size={25} className="animate-spin text-indigo-400" />
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center gap-4">
                {creator.avatarUrl ? (
                  <img
                    src={creator.avatarUrl}
                    alt=""
                    className="h-16 w-16 rounded-2xl border border-slate-700 object-cover"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/15 text-xl font-semibold text-indigo-300">
                    {getInitials(creator.displayName || creator.username)}
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-white">
                      {creator.displayName || creator.username || "Unnamed creator"}
                    </h3>
                    {creator.isVerified && (
                      <ShieldCheck size={17} className="text-sky-400" />
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    {creator.username ? `@${creator.username}` : "No username"}
                    {" · "}
                    {creator.platform?.name ?? "Unknown platform"}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    creator.isActive
                      ? "bg-emerald-500/10 text-emerald-300"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {creator.isActive ? "Active" : "Inactive"}
                </span>
              </div>

              {creator.bio && (
                <p className="mt-5 whitespace-pre-wrap text-sm leading-6 text-slate-400">
                  {creator.bio}
                </p>
              )}

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  {
                    label: "Posts",
                    value: creator._count?.posts,
                    icon: Video,
                  },
                  {
                    label: "Snapshots",
                    value: creator._count?.metricSnapshots,
                    icon: Activity,
                  },
                  {
                    label: "Analytics",
                    value: creator._count?.engagementStats,
                    icon: BarChart3,
                  },
                  {
                    label: "Anomalies",
                    value: creator._count?.anomalyEvents,
                    icon: AlertCircle,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                    >
                      <Icon size={16} className="text-slate-500" />
                      <p className="mt-3 text-xl font-semibold text-white">
                        {formatNumber(item.value)}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 space-y-2 border-t border-slate-800 pt-5">
                <h4 className="text-sm font-semibold text-white">
                  Profile information
                </h4>
                <div className="grid gap-3 text-sm sm:grid-cols-2">
                  <p className="text-slate-500">
                    External ID:{" "}
                    <span className="break-all text-slate-300">
                      {creator.externalId}
                    </span>
                  </p>
                  <p className="text-slate-500">
                    Added:{" "}
                    <span className="text-slate-300">
                      {formatDate(creator.createdAt)}
                    </span>
                  </p>
                  {creator.profileUrl && (
                    <a
                      href={creator.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300"
                    >
                      Open profile <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-800 pt-5">
                <h4 className="text-sm font-semibold text-white">
                  Recent posts
                </h4>
                {creator.posts && creator.posts.length > 0 ? (
                  <div className="mt-3 divide-y divide-slate-800">
                    {creator.posts.map((post) => (
                      <div
                        key={post.id}
                        className="flex items-start justify-between gap-3 py-3"
                      >
                        <div className="min-w-0">
                          <p className="line-clamp-2 text-sm text-slate-300">
                            {post.content || "No post description"}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {formatDate(post.publishedAt)}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-md bg-slate-800 px-2 py-1 text-[10px] text-slate-400">
                          {post.type}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-slate-500">
                    No recent posts available.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CreatorsPage() {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [platformId, setPlatformId] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [verifiedFilter, setVerifiedFilter] = useState("");

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingCreator, setEditingCreator] = useState<Creator | null>(null);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  const loadPlatforms = useCallback(async () => {
    const response = await api.get<ApiResponse<Platform[]>>("/platforms");
    setPlatforms(response.data.data ?? []);
  }, []);

  const loadCreators = useCallback(async (manual = false) => {
    if (manual) setRefreshing(true);
    else setLoading(true);

    setError("");

    try {
      const params: Record<string, string | number> = {
        page,
        limit,
      };

      if (search) params.search = search;
      if (platformId) params.platformId = platformId;
      if (activeFilter) params.isActive = activeFilter;
      if (verifiedFilter) params.isVerified = verifiedFilter;

      const response = await api.get<ApiResponse<Creator[]>>("/creators", {
        params,
      });

      setCreators(response.data.data ?? []);
      setTotal(response.data.pagination?.total ?? 0);
      setTotalPages(response.data.pagination?.totalPages ?? 1);
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [page, limit, search, platformId, activeFilter, verifiedFilter]);

  useEffect(() => {
    void loadPlatforms().catch((requestError) => {
      setError(getErrorMessage(requestError));
    });
  }, [loadPlatforms]);

  useEffect(() => {
    void loadCreators();
  }, [loadCreators]);

  function applySearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPage(1);
    setSearch(searchInput.trim());
  }

  function openCreateModal() {
    setEditingCreator(null);
    setModalOpen(true);
    setNotice("");
  }

  function openEditModal(creator: Creator) {
    setEditingCreator(creator);
    setModalOpen(true);
    setNotice("");
  }

  async function saveCreator(form: CreatorForm) {
    setSaving(true);

    const payload = {
      platformId: form.platformId,
      externalId: form.externalId.trim(),
      username: form.username.trim() || null,
      displayName: form.displayName.trim() || null,
      profileUrl: form.profileUrl.trim() || null,
      avatarUrl: form.avatarUrl.trim() || null,
      bio: form.bio.trim() || null,
      isVerified: form.isVerified,
      isActive: form.isActive,
    };

    try {
      if (editingCreator) {
        await api.patch(`/creators/${editingCreator.id}`, payload);
        setNotice("Creator profile updated successfully.");
      } else {
        await api.post("/creators", payload);
        setNotice("Creator registered successfully.");
      }

      setModalOpen(false);
      setEditingCreator(null);
      await loadCreators(true);
    } catch (requestError) {
      throw new Error(getErrorMessage(requestError));
    } finally {
      setSaving(false);
    }
  }

  async function openDetails(creator: Creator) {
    setDetailsOpen(true);
    setSelectedCreator(null);
    setDetailsLoading(true);

    try {
      const response = await api.get<ApiResponse<Creator>>(
        `/creators/${creator.id}`,
      );
      setSelectedCreator(response.data.data ?? creator);
    } catch (requestError) {
      setSelectedCreator(creator);
      setError(getErrorMessage(requestError));
    } finally {
      setDetailsLoading(false);
    }
  }

  async function toggleActive(creator: Creator) {
    const action = creator.isActive ? "deactivate" : "activate";

    if (
      !window.confirm(
        `Are you sure you want to ${action} ${creator.displayName || creator.username || "this creator"}?`,
      )
    ) {
      return;
    }

    setError("");
    setNotice("");

    try {
      if (creator.isActive) {
        await api.delete(`/creators/${creator.id}`);
        setNotice("Creator deactivated. Their analytics history is preserved.");
      } else {
        await api.patch(`/creators/${creator.id}`, { isActive: true });
        setNotice("Creator activated successfully.");
      }

      await loadCreators(true);
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    }
  }

  const activeCount = creators.filter((creator) => creator.isActive).length;
  const verifiedCount = creators.filter((creator) => creator.isVerified).length;

  return (
    <section className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-indigo-400">
            Creator workspace
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Creator management
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Manage creator profiles, platforms, verification and account status.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void loadCreators(true)}
            disabled={refreshing}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 disabled:opacity-50"
          >
            <RefreshCw
              size={15}
              className={refreshing ? "animate-spin" : ""}
            />
            Refresh
          </button>
          <button
            type="button"
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-400"
          >
            <Plus size={16} />
            Add creator
          </button>
        </div>
      </div>

      {notice && (
        <div className="flex items-center justify-between gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
          <span>{notice}</span>
          <button
            type="button"
            onClick={() => setNotice("")}
            aria-label="Dismiss notification"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {error && (
        <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
          <AlertCircle size={17} className="mt-0.5 shrink-0" />
          <span className="flex-1">{error}</span>
          <button
            type="button"
            onClick={() => setError("")}
            aria-label="Dismiss error"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Total creators</p>
            <Users size={19} className="text-indigo-400" />
          </div>
          <p className="mt-3 text-3xl font-semibold text-white">
            {formatNumber(total)}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Across all registered platforms
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Active on this page</p>
            <Activity size={19} className="text-emerald-400" />
          </div>
          <p className="mt-3 text-3xl font-semibold text-white">
            {formatNumber(activeCount)}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Currently active creators shown
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Verified on this page</p>
            <ShieldCheck size={19} className="text-sky-400" />
          </div>
          <p className="mt-3 text-3xl font-semibold text-white">
            {formatNumber(verifiedCount)}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Verified creator profiles shown
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <form
          onSubmit={applySearch}
          className="grid gap-3 lg:grid-cols-[minmax(220px,1fr)_180px_150px_150px_auto]"
        >
          <div className="relative">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Search name or username..."
              className={`${inputClasses} pl-10`}
            />
          </div>

          <select
            value={platformId}
            onChange={(event) => {
              setPlatformId(event.target.value);
              setPage(1);
            }}
            className={inputClasses}
          >
            <option value="">All platforms</option>
            {platforms.map((platform) => (
              <option key={platform.id} value={platform.id}>
                {platform.name}
              </option>
            ))}
          </select>

          <select
            value={activeFilter}
            onChange={(event) => {
              setActiveFilter(event.target.value);
              setPage(1);
            }}
            className={inputClasses}
          >
            <option value="">All statuses</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          <select
            value={verifiedFilter}
            onChange={(event) => {
              setVerifiedFilter(event.target.value);
              setPage(1);
            }}
            className={inputClasses}
          >
            <option value="">All verification</option>
            <option value="true">Verified</option>
            <option value="false">Unverified</option>
          </select>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-4 py-2.5 text-sm font-medium text-indigo-300 hover:bg-indigo-500/20"
          >
            <Search size={15} />
            Search
          </button>
        </form>

        {(search || platformId || activeFilter || verifiedFilter) && (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-slate-500">
              Filters are active. Showing matching creators.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchInput("");
                setSearch("");
                setPlatformId("");
                setActiveFilter("");
                setVerifiedFilter("");
                setPage(1);
              }}
              className="text-xs font-medium text-indigo-400 hover:text-indigo-300"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-5 py-4">
          <div>
            <h3 className="font-semibold text-white">Creator directory</h3>
            <p className="mt-1 text-xs text-slate-500">
              {formatNumber(total)} creator records
            </p>
          </div>
          <span className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-400">
            Page {page} of {totalPages}
          </span>
        </div>

        {loading ? (
          <div className="flex min-h-64 items-center justify-center">
            <Loader2 size={26} className="animate-spin text-indigo-400" />
          </div>
        ) : creators.length === 0 ? (
          <div className="flex min-h-64 flex-col items-center justify-center px-5 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-400">
              <Users size={21} />
            </div>
            <h3 className="mt-4 font-medium text-white">
              No creators found
            </h3>
            <p className="mt-1 max-w-sm text-sm text-slate-500">
              Try changing your filters or register a new creator.
            </p>
            <button
              type="button"
              onClick={openCreateModal}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              <Plus size={15} />
              Add your first creator
            </button>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left">
                <thead>
                  <tr className="border-b border-slate-800 text-xs text-slate-500">
                    <th className="px-5 py-3 font-medium">Creator</th>
                    <th className="px-4 py-3 font-medium">Platform</th>
                    <th className="px-4 py-3 font-medium">Posts</th>
                    <th className="px-4 py-3 font-medium">Snapshots</th>
                    <th className="px-4 py-3 font-medium">Verification</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-5 py-3 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {creators.map((creator) => (
                    <tr
                      key={creator.id}
                      className="transition hover:bg-slate-800/30"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          {creator.avatarUrl ? (
                            <img
                              src={creator.avatarUrl}
                              alt=""
                              className="h-10 w-10 rounded-xl border border-slate-700 object-cover"
                            />
                          ) : (
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-sm font-semibold text-indigo-300">
                              {getInitials(
                                creator.displayName || creator.username,
                              )}
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="max-w-[220px] truncate text-sm font-medium text-white">
                              {creator.displayName || "Unnamed creator"}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {creator.username
                                ? `@${creator.username}`
                                : "No username"}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <span className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300">
                          {creator.platform?.name ?? "Unknown"}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-sm text-slate-300">
                        {formatNumber(creator._count?.posts)}
                      </td>

                      <td className="px-4 py-4 text-sm text-slate-300">
                        {formatNumber(creator._count?.metricSnapshots)}
                      </td>

                      <td className="px-4 py-4">
                        {creator.isVerified ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-300">
                            <ShieldCheck size={15} />
                            Verified
                          </span>
                        ) : (
                          <span className="text-xs text-slate-500">
                            Unverified
                          </span>
                        )}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs ${
                            creator.isActive
                              ? "text-emerald-300"
                              : "text-slate-500"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              creator.isActive
                                ? "bg-emerald-400"
                                : "bg-slate-500"
                            }`}
                          />
                          {creator.isActive ? "Active" : "Inactive"}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            type="button"
                            title="View profile"
                            onClick={() => void openDetails(creator)}
                            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            type="button"
                            title="Edit creator"
                            onClick={() => openEditModal(creator)}
                            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-indigo-300"
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            type="button"
                            title={creator.isActive ? "Deactivate creator" : "Activate creator"}
                            onClick={() => void toggleActive(creator)}
                            className={`rounded-lg p-2 hover:bg-slate-800 ${
                              creator.isActive
                                ? "text-slate-400 hover:text-amber-300"
                                : "text-emerald-400 hover:text-emerald-300"
                            }`}
                          >
                            <Power size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 px-5 py-4">
              <p className="text-xs text-slate-500">
                Showing {(page - 1) * limit + 1}–
                {Math.min(page * limit, total)} of {formatNumber(total)} creators
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={page <= 1 || loading}
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft size={15} />
                  Previous
                </button>
                <button
                  type="button"
                  disabled={page >= totalPages || loading}
                  onClick={() =>
                    setPage((current) => Math.min(totalPages, current + 1))
                  }
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {modalOpen && (
        <CreatorModal
          creator={editingCreator}
          platforms={platforms}
          saving={saving}
          onClose={() => {
            if (!saving) setModalOpen(false);
          }}
          onSubmit={saveCreator}
        />
      )}

      {detailsOpen && (
        <CreatorDetails
          creator={selectedCreator}
          loading={detailsLoading}
          onClose={() => {
            setDetailsOpen(false);
            setSelectedCreator(null);
          }}
        />
      )}
    </section>
  );
}
