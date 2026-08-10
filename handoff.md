# Handoff — one-world-landing

更新时间：2026-08-08

## 项目概况
OneWorld 产品落地页。Astro 7 + Tailwind CSS v4 静态站点，中英双语，
部署于 Cloudflare Pages（站点：https://one-world-landing.pages.dev）。
通过页头/页脚链接回 hub 站 bayjf.com，不与其他落地页直接互链。

## 已完成（本地未推送，分支 dev）
- `142a04e` build: upgrade to Astro 7 and Tailwind CSS v4
- `a4875a6` feat(legal): add privacy, terms and 404 pages
- `db73210` docs: add README with project overview

## 注意点
- ⚠️ OG 图目前是 SVG（public/og-image.svg），社交平台（Twitter/Facebook/微信等）不支持 SVG 格式的 og:image，分享时不会显示预览图。
- robots.txt、sitemap 已就位；构建已验证通过；所有提交仅在本地，尚未 push。

## 下一步
1. 生成 1200×630 PNG 版 OG 图（中英两版）替换 SVG，并更新布局文件中的 og:image 引用。
2. `git push`（dev 分支，推送前可先 `git pull --rebase`）。
3. 部署后验证 og:image、robots.txt、sitemap 可访问。

## 落地页预览图自动化方案（2026-08-10）
- hub 站 bayjf 的产品卡片引用本站的 `https://one-world-landing.pages.dev/preview.png` 作为封面。
- 本站现状：当前**尚无** `public/preview.png`，bayjf 对应卡片为死链；需按方案 A 首次构建后自动产出。
- 14 个落地页均走 **Cloudflare Pages 平台自动部署**（push 即发，无部署 Action），故预览图需在
  **构建命令内**用 Playwright 截图自动产出（方案 A），而非额外 GitHub Action。
- 完整方案见 bayjf 仓库 `docs/PREVIEW_IMAGE_PIPELINE.md`。bayjf 自身零改动（URL 不变）。
- 下一步：在 build 脚本追加 `node scripts/shot.mjs`（astro build 之后截图写 public/preview.png），
  先以 soft-desk-landing 试点验证后再推广。

## taste-skill 设计审计（2026-08-08，本地未提交）
按 taste-skill 反 AI-slop 方法论清理设计 Tell，仅动样式与文案，
未改动内容 IA、URL、路由和功能逻辑。
- 英文文案 em-dash 清扫：SEO 标题 `X — Brand` 统一为 `X | Brand`、404 标题改用冒号、
  正文按语义改冒号/分号/逗号；中文“——”为规范破折号，保留未动。
- `npm run build` 验证通过（7 页）。

后续：审阅上述改动后按原子规则分批提交推送（英文 Conventional Commits）。
