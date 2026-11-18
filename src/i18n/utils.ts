import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, , possibleLang] = url.pathname.split('/');
  // If base path is /comnet, pathname is /comnet/en/... or /comnet/...
  if (url.pathname.includes('/en/') || url.pathname.endsWith('/en')) {
    return 'en';
  }
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getSwitchLocaleUrl(currentUrl: URL, targetLang: Lang): string {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pathname = currentUrl.pathname;
  
  // Strip base url from pathname to work with local path
  let relativePath = pathname;
  if (baseUrl && relativePath.startsWith(baseUrl)) {
    relativePath = relativePath.slice(baseUrl.length);
  }
  if (!relativePath.startsWith('/')) {
    relativePath = '/' + relativePath;
  }

  const isCurrentEn = relativePath.startsWith('/en/') || relativePath === '/en';

  if (targetLang === 'en') {
    if (isCurrentEn) return currentUrl.pathname; // already EN
    return `${baseUrl}/en${relativePath === '/' ? '/' : relativePath}`;
  } else {
    // Target is PT
    if (!isCurrentEn) return currentUrl.pathname; // already PT
    const stripped = relativePath.replace(/^\/en(\/|$)/, '/');
    return `${baseUrl}${stripped}`;
  }
}

