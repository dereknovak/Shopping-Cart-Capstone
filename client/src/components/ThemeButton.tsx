import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const oppositeTheme = theme === 'dark' ? 'Light' : 'Dark';

  return <button onClick={toggleTheme}>{oppositeTheme} Mode</button>;
};

export default ThemeButton;
