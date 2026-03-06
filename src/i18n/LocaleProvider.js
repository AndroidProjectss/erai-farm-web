'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const LocaleContext = createContext(null);

export function LocaleProvider({ children, initialLocale = 'ru' }) {
  const [locale, setLocale] = useState(initialLocale === 'kg' || initialLocale === 'ru' ? initialLocale : 'ru');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('locale', locale);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
      document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
    }
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === 'ru' ? 'kg' : 'ru')),
      t: translations[locale] || translations.ru,
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used inside LocaleProvider');
  }
  return context;
}
