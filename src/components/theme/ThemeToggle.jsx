import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme.js';
import IconButton from '../ui/IconButton.jsx';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <IconButton className="theme-toggle" label={label} onClick={toggleTheme}>
      {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </IconButton>
  );
}

export default ThemeToggle;
