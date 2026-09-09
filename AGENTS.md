# AGENTS.md — one-world-landing（One World 官网）

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
One World 官网：基于 Phaser 的开源 2D 俯视角生活游戏化引擎的中英双语营销落地页
（把现实中的习惯、任务与目标映射为游戏里的技能、任务与成就，浏览器即开即玩）。

## 技术栈
> 以 `package.json` 为准：Astro 7（`^7.2.0`）+ Tailwind CSS 4（`@tailwindcss/vite`）。
> README 里写的 Astro 4 / Tailwind 3 已过时。

| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（SSG） |
| 样式 | Tailwind CSS 4 |
| SEO / GEO | `@astrojs/sitemap`、`public/robots.txt`、`public/llms.txt` / `llms-full.txt` |
| i18n | Astro i18n + 自研字典 `src/i18n/ui.ts`、`src/i18n/utils.ts` |
| 共享包 | `@bay/landing-ui` |
| 包管理 | npm |

## 常用命令
```bash
npm install
npm run dev
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## 约定
- `astro.config.mjs` 的 `site` 目前是**占位域名** `https://one-world.bayjf.com`，正式上线需替换为实际域名，
  并同步 `robots.txt` 与 `llms*.txt`。
- `public/_headers` 承载安全头与缓存策略，`public/_redirects` 当前为空（预留），改动要谨慎。
- 文案走 `src/i18n/ui.ts`，新增必须补中英两版。
- 部署细节见 `docs/DEPLOYMENT.md`。

## 不要做的事
- 不要把占位域名当成正式站点 URL 写进对外文案。
- 不要只改一个语言的文案。
- 不要提交构建产物与 `.env`。
- 不要跳过 `git pull --rebase` 直接 push。
