import { useContext, type ChangeEvent } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import type { Currency } from '../types';

const CurrencySelector = () => {
  const { handleSelectRegion } = useContext(ThemeContext);

  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleSelectRegion(e.target.value as Currency);
  };

  return (
    <select onChange={handleCurrencyChange}>
      <option value="USD">United States</option>
      <option value="EUR">Europe</option>
      <option value="CAD">Canada</option>
      <option value="JPY">Japan</option>
    </select>
  );
};

export default CurrencySelector;
