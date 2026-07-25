import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { THEME_STORAGE_KEY, THEMES } from '../constants/site.js';

export const ThemeContext = createContext(null);

const getSystemTheme = () => {
  if (typeof window === 'undefined') {
    return THEMES.light;
  }

  try {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? THEMES.dark
      : THEMES.light;
  } catch {
    return THEMES.light;
  }
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return THEMES.light;
  }

  try {
    const savedTheme = window.localStorage?.getItem(THEME_STORAGE_KEY);
    return savedTheme === THEMES.dark || savedTheme === THEMES.light
      ? savedTheme
      : getSystemTheme();
  } catch {
    return getSystemTheme();
  }
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    try {
      window.localStorage?.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Theme still updates even when browser storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');

    if (!mediaQuery?.addEventListener) {
      return undefined;
    }

    const handleSystemThemeChange = (event) => {
      let savedTheme = null;

      try {
        savedTheme = window.localStorage?.getItem(THEME_STORAGE_KEY);
      } catch {
        savedTheme = null;
      }

      if (!savedTheme) {
        setTheme(event.matches ? THEMES.dark : THEMES.light);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === THEMES.dark ? THEMES.light : THEMES.dark,
    );
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === THEMES.dark,
      setTheme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
