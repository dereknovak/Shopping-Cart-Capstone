import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

const CurrencySelector = () => {
  const { setCurrencyType } = useContext(ThemeContext);

  const handleCurrencyChange = (e) => {
    setCurrencyType(e.target.value);
  };

  return (
    <select onChange={handleCurrencyChange}>
      <option value="usd">USD</option>
      <option value="eur">Euro</option>
    </select>
  );
};

export default CurrencySelector;
