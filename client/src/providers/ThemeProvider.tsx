import { createContext } from 'react';
import type { Theme } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: any;
}

const defaultThemeContext: ThemeContextType = {
  theme: 'dark',
  toggleTheme: () => {
    throw new Error('toggleTheme not implemented');
  },
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const initialTheme = (localStorage.getItem('theme') ?? 'dark') as Theme;
  const [theme, setTheme] = useLocalStorage('theme', initialTheme);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext>
  );
};

export default ThemeProvider;
