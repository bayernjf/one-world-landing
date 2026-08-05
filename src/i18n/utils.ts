import { ui, defaultLang, type Lang, type TranslationKey } from './ui';

/**
 * 从 URL 推断语言：路径以 /zh 开头视为中文，否则英文（默认）。
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'zh') return 'zh';
  return defaultLang;
}

/**
 * 翻译函数工厂：返回 t(key) 使用指定语言。
 */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (ui[lang] as Record<TranslationKey, string>)[key];
  };
}

/**
 * 生成对应语言的路径：英文无前缀，中文带 /zh。
 */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean}`;
}

/**
 * 获取对侧语言路径（用于语言切换按钮）。
 */
export function switchLangPath(currentPath: string, from: Lang): string {
  const other: Lang = from === 'en' ? 'zh' : 'en';
  if (from === defaultLang) {
    // 当前英文 → 中文：加 /zh 前缀
    return `/zh${currentPath === '/' ? '' : currentPath}`;
  }
  // 当前中文 → 英文：去掉 /zh 前缀
  return currentPath.replace(/^\/zh/, '') || '/';
}
