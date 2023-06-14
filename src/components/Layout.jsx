import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../styles/Layout.scss";
import { useThemeContext } from "../context/ThemeContext";

const Layout = () => {
  const { theme } = useThemeContext();

  return (
    <main className={`layout ${theme}`}>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
