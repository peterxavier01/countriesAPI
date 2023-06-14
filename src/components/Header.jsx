import { BsMoon, BsMoonFill } from "react-icons/bs";
import "../styles/Header.scss";
import { useThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useThemeContext();

  const handleThemeSelect = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <header>
      <h1>Where in the world?</h1>
      <div onClick={handleThemeSelect}>
        {theme === "light" ? <BsMoon /> : <BsMoonFill />}
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
