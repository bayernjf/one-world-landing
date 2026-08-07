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
