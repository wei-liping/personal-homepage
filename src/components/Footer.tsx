import { Github, Mail } from "lucide-react";

const XIAOHONGSHU_URL =
  "https://www.xiaohongshu.com/user/profile/5d34f3250000000016014251";

export default function Footer() {
  const xhsIconSrc = `${import.meta.env.BASE_URL}xiaohongshu.svg`;

  return (
    <footer className="border-t border-gray-100 bg-gray-50/50 py-12 mt-auto shadow-[0_-1px_0_rgba(15,23,42,0.04)]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} 韦莉萍
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/wei-liping"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-icon rounded-full p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={XIAOHONGSHU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-icon rounded-full p-1 hover:bg-red-50"
            aria-label="小红书主页"
          >
            <img
              src={xhsIconSrc}
              alt=""
              width={20}
              height={20}
              className="block w-5 h-5"
              decoding="async"
            />
          </a>
          <a
            href="mailto:weilipng@zju.edu.cn"
            className="interactive-icon rounded-full p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
