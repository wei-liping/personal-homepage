import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "首页" },
  { to: "/about", label: "关于" },
  { to: "/resume", label: "简历" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/75 border-b border-gray-100 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="interactive-link font-mono text-base font-semibold text-blue-600 hover:text-slate-900 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
        >
          韦莉萍.ai agent engineer
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`interactive-link flex flex-col items-center gap-1.5 text-base font-semibold min-h-11 justify-end pb-0.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 ${
                  active
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{l.label}</span>
                <span
                  className={`h-1 w-1 rounded-full transition-opacity duration-200 ${
                    active ? "bg-blue-600 opacity-100" : "opacity-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="interactive-icon md:hidden min-h-11 min-w-11 flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="打开菜单"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`interactive-link flex items-center gap-3 text-base font-semibold min-h-11 px-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 ${
                    active
                      ? "text-blue-600 bg-blue-50/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-gray-50"
                  }`}
                >
                  {active && (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0"
                      aria-hidden
                    />
                  )}
                  <span className={active ? "" : "pl-3.5"}>{l.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
