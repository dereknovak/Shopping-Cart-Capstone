import { createContext, useEffect, useState } from 'react';
import { getCurrentCurrencyRates } from '../services/products';
import { getCurrencySymbol } from '../utilities/utilities';
import type { Currency, CurrencyRates } from '../types';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  convertCurrency: (price: number) => string;
  handleSelectRegion: (currency: Currency) => void;
}

interface ThemeProviderProps {
  children: any;
}

const defaultThemeContext: ThemeContextType = {
  isDarkMode: true,
  toggleDarkMode: () => {
    throw new Error('toggleDarkMode not implemented');
  },
  convertCurrency: () => {
    throw new Error('convertCurrency not implemented');
  },
  handleSelectRegion: () => {
    throw new Error('handleSelectRegion not implemented');
  },
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currencyType, setCurrencyType] = useState({
    name: 'USD',
    symbol: '$',
  });
  const [currencyRates, setCurrencyRates] = useState<CurrencyRates>({});

  useEffect(() => {
    (async () => {
      const rates = await getCurrentCurrencyRates();
      setCurrencyRates(rates);
    })();
  }, []);

  const handleSelectRegion = (currency: Currency) => {
    setCurrencyType({
      name: currency,
      symbol: getCurrencySymbol(currency),
    });
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const convertCurrency = (price: number) => {
    return (
      currencyType.symbol +
      (price * currencyRates[currencyType.name]).toFixed(2)
    );
  };

  return (
    <ThemeContext
      value={{
        isDarkMode,
        toggleDarkMode,
        convertCurrency,
        handleSelectRegion,
      }}
    >
      {children}
    </ThemeContext>
  );
};

export default ThemeProvider;
