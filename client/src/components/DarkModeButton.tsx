import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import { capitalize } from '../utilities/utilities';

const DarkModeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>{capitalize(theme)} Mode</button>;
};

export default DarkModeButton;
