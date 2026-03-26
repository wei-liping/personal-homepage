import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} 韦莉萍
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/wei-liping"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-icon rounded-full p-1.5 text-slate-500 hover:text-accent hover:bg-white/[0.04]"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:weilipng@zju.edu.cn"
            className="interactive-icon rounded-full p-1.5 text-slate-500 hover:text-accent hover:bg-white/[0.04]"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
