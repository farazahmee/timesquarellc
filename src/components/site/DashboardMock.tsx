import {
  Activity,
  BarChart3,
  Bot,
  LayoutDashboard,
  Settings2,
  Workflow,
} from "lucide-react";
import type { BuildTab } from "@/content/site";

const navItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: Workflow, label: "Workflows" },
  { icon: Bot, label: "Agents" },
  { icon: BarChart3, label: "Reports" },
];

export default function DashboardMock({ tab }: { tab: BuildTab }) {
  const values = [38, 52, 44, 67, 58, 72, 64, 80, 71, 88, 76, 94];
  const width = 320;
  const height = 86;
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - 10 - (value / 100) * (height - 18);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const linePath = `M${points.join(" L")}`;
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

  return (
    <div className="dash-shell">
      <div className="dash-topbar">
        <div className="flex items-center gap-2.5">
          <span className="dash-dot" />
          <span className="dash-dot" />
          <span className="dash-dot" />
          <span className="ml-2 font-mono text-[9px] tracking-[0.08em] text-white/30">
            timesquare / ops-console
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">
            Live
          </span>
        </div>
      </div>

      <div className="grid sm:grid-cols-[126px_1fr]">
        <aside className="hidden border-r border-white/[0.07] p-3 sm:block">
          <div className="mb-4 rounded-lg border border-white/[0.07] bg-white/[0.025] p-2.5">
            <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-white/30">
              Workspace
            </p>
            <p className="mt-1 text-[11px] font-medium text-white/70">
              Operations
            </p>
          </div>
          <nav className="space-y-0.5">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className={
                  index === 0
                    ? "flex items-center gap-2 rounded-md bg-white/[0.055] px-2 py-1.5 text-[10px] text-white/75"
                    : "flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] text-white/35"
                }
              >
                <item.icon size={12} strokeWidth={1.7} />
                {item.label}
              </div>
            ))}
          </nav>
          <div className="mt-auto flex items-center gap-2 px-2 pt-10 text-[10px] text-white/25">
            <Settings2 size={12} strokeWidth={1.7} />
            Settings
          </div>
        </aside>

        <div className="p-3.5 sm:p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[13px] font-medium tracking-[-0.01em] text-white/85">
                {tab.dashboard.title}
              </h3>
              <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.11em] text-white/30">
                {tab.dashboard.subtitle}
              </p>
            </div>
            <span className="hidden items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-white/45 sm:inline-flex">
              <Activity size={9} />
              Realtime
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {tab.dashboard.metrics.map((metric) => (
              <div key={metric.label} className="dash-kpi">
                <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-white/30">
                  {metric.label}
                </p>
                <div className="mt-1 flex items-baseline justify-between gap-2">
                  <span className="text-[15px] font-medium tracking-[-0.03em] text-white/88">
                    {metric.value}
                  </span>
                  <span className="font-mono text-[7.5px] text-emerald-300/65">
                    {metric.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-lg border border-white/[0.07] bg-white/[0.018] p-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-white/30">
                {tab.dashboard.chartLabel}
              </p>
              <p className="font-mono text-[8px] text-white/25">30 days</p>
            </div>
            <svg
              viewBox={`0 0 ${width} ${height}`}
              preserveAspectRatio="none"
              className="mt-2 h-[82px] w-full overflow-visible"
              role="img"
              aria-label={`${tab.dashboard.chartLabel} trend over 30 days`}
            >
              <defs>
                <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#acceef" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#acceef" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="dashStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6f8db0" />
                  <stop offset="100%" stopColor="#d6e8fa" />
                </linearGradient>
              </defs>
              {[20, 44, 68].map((y) => (
                <line
                  key={y}
                  x1="0"
                  x2={width}
                  y1={y}
                  y2={y}
                  stroke="rgba(255,255,255,0.055)"
                  strokeDasharray="2 4"
                />
              ))}
              <path d={areaPath} fill="url(#dashFill)" />
              <path
                d={linePath}
                fill="none"
                stroke="url(#dashStroke)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              <circle
                cx={width}
                cy={height - 10 - (values[values.length - 1] / 100) * (height - 18)}
                r="2.4"
                fill="#d6e8fa"
              />
            </svg>
          </div>

          <div className="mt-3 rounded-lg border border-white/[0.07] bg-white/[0.018] p-3">
            <div className="mb-1 flex items-center justify-between">
              <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-white/30">
                Recent runs
              </p>
              <p className="font-mono text-[8px] text-white/25">View all</p>
            </div>
            {tab.dashboard.rows.map((row) => (
              <div key={row.name} className="dash-row">
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-medium text-white/70">
                    {row.name}
                  </p>
                  <p className="mt-0.5 truncate font-mono text-[8px] text-white/28">
                    {row.detail}
                  </p>
                </div>
                <span
                  className={
                    row.status === "ok"
                      ? "status-pill status-ok justify-self-start"
                      : "status-pill status-warn justify-self-start"
                  }
                >
                  <span className="h-1 w-1 rounded-full bg-current" />
                  {row.status === "ok" ? "OK" : "Flag"}
                </span>
                <span className="justify-self-end font-mono text-[8px] text-white/30">
                  {row.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
