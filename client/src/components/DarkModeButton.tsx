import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

const DarkModeButton = () => {
  const { toggleDarkMode } = useContext(ThemeContext);
  return <button onClick={toggleDarkMode}>Dark Mode</button>;
};

export default DarkModeButton;
