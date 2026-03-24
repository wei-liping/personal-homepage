# 个人主页 · 韦莉萍

产品经理作品集网站，展示 AI 驱动消费级产品的 Case Study。

## 技术栈

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- React Router 7
- Lucide Icons
- GitHub Pages

## 本地开发

```bash
npm install
npm run dev
```

## 构建部署

```bash
npm run build
```

构建产物在 `dist/` 目录。推送到 `main` 分支后，GitHub Actions 会自动部署到 GitHub Pages。

## 配置

- `vite.config.ts` 中的 `base` 需要与 GitHub 仓库名一致
- 简历 PDF 放置在 `public/resume.pdf` 即可启用下载功能
- 邮箱地址在 `src/components/Footer.tsx` 中修改
