import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const brightness = isDarkMode ? 'Light' : 'Dark';

  return <button onClick={toggleDarkMode}>{brightness} Mode</button>;
};

export default DarkModeButton;
