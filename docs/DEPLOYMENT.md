# 部署 — one-world-landing（One World 官网）

更新时间：2026-09-09

## 站点信息
- 技术栈：**以 `package.json` 为准** —— Astro 7（`^7.2.0`）+ Tailwind CSS 4（`@tailwindcss/vite`）+ `@astrojs/sitemap`
  （README 里写的 Astro 4 / Tailwind 3 是旧版本遗留，已过时）
- 共享包：`@bay/landing-ui`
- `astro.config.mjs` 的 `site`：占位域名 `https://one-world.bayjf.com`，**上线时需替换为实际域名**
- 包管理器：npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```
产物目录：`dist`（纯静态）。

## Cloudflare Pages
| 配置项 | 值 |
|---|---|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |

## 静态托管相关文件
- `public/_headers`：安全响应头、`/_astro/*` 长期缓存、`robots.txt` / sitemap / `llms*.txt` 不缓存。
- `public/_redirects`：当前为空，预留自定义域名跳转或旧路径迁移。
- `public/llms.txt`、`public/llms-full.txt`：AI 引擎抓取入口（GEO）。

## 发布后验证
1. 中英双语首页与语言切换正常。
2. `robots.txt`、`sitemap.xml`、`llms.txt` 可访问。
3. `_headers` 生效（检查响应头与 `/_astro/*` 缓存）。

## 注意点
- 站点 URL 是**占位值**，正式绑定域名后必须同步替换：
  `astro.config.mjs` 的 `site`、`public/robots.txt` 的 Sitemap 行、`llms*.txt` 里的链接。
