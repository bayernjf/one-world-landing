# One World 官网（one-world-landing）

One World 是一个基于 Phaser 的开源 2D 俯视角生活游戏化引擎：把现实中的习惯、任务与目标映射为游戏里的技能、任务与成就，浏览器即开即玩。本仓库是它的中英双语营销落地页。

## 技术栈

| 类别 | 方案 |
|------|------|
| 框架 | Astro 4（`astro` ^4.16.0，SSG 静态输出） |
| 样式 | Tailwind CSS 3（^3.4.0，通过 `@astrojs/tailwind` 集成，`applyBaseStyles: false`） |
| SEO | `@astrojs/sitemap`（3.2.1）、`public/robots.txt`、`public/llms.txt`（GEO） |
| i18n | Astro 内置 i18n 配置 + 自研字典：`src/i18n/ui.ts`（中英文案）、`src/i18n/utils.ts`（取词/路径本地化工具） |
| 包管理器 | npm（见 `package-lock.json`） |

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器
npm run build      # 构建生产产物
npm run preview    # 预览构建产物
```

## 项目结构

```text
one-world-landing/
├── astro.config.mjs          # Astro 配置：site、tailwind、sitemap、i18n
├── tailwind.config.mjs       # Tailwind 内容扫描范围配置
├── public/
│   ├── favicon.svg
│   ├── og-image.svg          # OG 分享图
│   ├── robots.txt
│   ├── llms.txt / llms-full.txt   # AI 引擎抓取入口（GEO）
│   ├── _headers              # 安全头与缓存策略（Cloudflare Pages / Netlify 风格）
│   └── _redirects            # 重定向规则（当前为空，预留扩展）
├── src/
│   ├── components/           # 落地页区块：Nav、Hero、Features、How、CTA、Footer、SEO
│   ├── i18n/
│   │   ├── ui.ts             # 中英双语文案字典与语言配置
│   │   └── utils.ts          # getLangFromUrl / useTranslations / localizedPath 等工具
│   ├── layouts/
│   │   └── Layout.astro      # 页面基础布局
│   ├── pages/
│   │   ├── index.astro       # 英文首页（根路径）
│   │   ├── privacy.astro     # 英文隐私政策
│   │   ├── terms.astro       # 英文服务条款
│   │   ├── 404.astro
│   │   └── zh/               # 中文页面：index / privacy / terms
│   ├── styles/
│   │   └── global.css        # Tailwind 全局样式入口
│   └── env.d.ts
└── tsconfig.json
```

## 路由与 i18n

- 默认语言为英文，`prefixDefaultLocale: false`：英文页面在根路径（`/`、`/privacy`、`/terms`），中文页面带 `/zh` 前缀（`/zh/`、`/zh/privacy`、`/zh/terms`）。
- 语言由 URL 推断（路径以 `/zh` 开头视为中文，否则英文），文案通过 `useTranslations(lang)` 获取。
- 语言切换按钮通过 `switchLangPath` 在 `/zh` 前缀上加减实现对端路径。

| 路径 | 页面 |
|------|------|
| `/` | 英文首页 |
| `/privacy`、`/terms` | 英文隐私政策 / 服务条款 |
| `/zh/` | 中文首页 |
| `/zh/privacy`、`/zh/terms` | 中文隐私政策 / 服务条款 |
| `/404` | 404 页面 |

## 部署

- `astro.config.mjs` 中的 `site` 当前为占位域名 `https://one-world.bayjf.com`（Cloudflare Pages 风格），上线时需替换为实际域名。
- `public/_headers` 已配置安全响应头、`/_astro/*` 长期缓存以及 `robots.txt` / sitemap / `llms*.txt` 不缓存策略；`public/_redirects` 当前为空，预留自定义域名跳转或旧路径迁移。
- 部署前运行 `npm run build`，产物目录为 `dist`。

## 共享设计包

本仓库使用共享设计包 `@bay/landing-ui`（`github:bayernjf/landing-ui#v1.1.0`）：
- 图标统一走 `@bay/landing-ui/components/Icon.astro`（内联 Lucide SVG，无运行时依赖，替换了原先的几何字符占位图标）
- Hero 渐变文字已改为纯色排版
- 包版本以 git tag 管理；升级时改 `package.json` 中的 tag 后重新 `npm install`
