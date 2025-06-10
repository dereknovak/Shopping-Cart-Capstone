import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currencyType, setCurrencyType] = useState('usd');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const convertCurrency = (price) => {
    switch (currencyType) {
      case 'usd': {
        return price;
      }
      case 'eur': {
        return price * 1.22;
      }
    }
  };

  return (
    <ThemeContext
      value={{ isDarkMode, toggleDarkMode, convertCurrency, setCurrencyType }}
    >
      {children}
    </ThemeContext>
  );
};

export default ThemeProvider;
