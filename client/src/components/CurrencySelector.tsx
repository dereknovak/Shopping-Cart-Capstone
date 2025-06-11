import { useContext, type ChangeEvent } from 'react';
import type { Currency } from '../types';
import { CurrencyContext } from '../providers/CurrencyProvider';

const CurrencySelector = () => {
  const { currency, handleSelectRegion } = useContext(CurrencyContext);

  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleSelectRegion(e.target.value as Currency);
  };

  return (
    <select value={currency} onChange={handleCurrencyChange}>
      <option value="USD">United States</option>
      <option value="EUR">Europe</option>
      <option value="CAD">Canada</option>
      <option value="JPY">Japan</option>
    </select>
  );
};

export default CurrencySelector;
