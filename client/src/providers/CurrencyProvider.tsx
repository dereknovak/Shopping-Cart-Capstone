import { createContext, useEffect, useState } from 'react';
import { getCurrentCurrencyRates } from '../services/products';
import { getCurrencySymbol } from '../utilities/utilities';
import type { Currency, CurrencyRates } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';

interface CurrencyContextType {
  currency: Currency;
  convertCurrency: (price: number) => string;
  handleSelectRegion: (currency: Currency) => void;
}

interface CurrencyProviderProps {
  children: any;
}

const defaultCurrencyContext: CurrencyContextType = {
  currency: 'USD',
  convertCurrency: () => {
    throw new Error('convertCurrency not implemented');
  },
  handleSelectRegion: () => {
    throw new Error('handleSelectRegion not implemented');
  },
};

export const CurrencyContext = createContext<CurrencyContextType>(
  defaultCurrencyContext
);

const CurrencyProvider = ({ children }: CurrencyProviderProps) => {
  const [currency, setCurrency] = useLocalStorage('currency', 'USD');
  const [currencyRates, setCurrencyRates] = useState<CurrencyRates>({});

  useEffect(() => {
    (async () => {
      const rates = await getCurrentCurrencyRates();
      setCurrencyRates(rates);
    })();
  }, []);

  const handleSelectRegion = (option: Currency) => {
    setCurrency(option);
  };

  const convertCurrency = (price: number) => {
    return (
      getCurrencySymbol(currency) + (price * currencyRates[currency]).toFixed(2)
    );
  };

  return (
    <CurrencyContext
      value={{
        currency,
        convertCurrency,
        handleSelectRegion,
      }}
    >
      {children}
    </CurrencyContext>
  );
};

export default CurrencyProvider;
