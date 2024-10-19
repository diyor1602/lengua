import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [icon, setIcon] = useState("menu");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChangeIcon = () => {
    if (icon === "menu") {
      setIcon("menuClose");
      setMenuOpen(true);
    } else {
      setIcon("menu");
      setMenuOpen(false);
    }
  };

  // Close the menu if the window is resized to a width greater than 660px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 660) {
        setMenuOpen(false);
        setIcon("menu"); // Reset the icon to "menu"
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setMenuOpen(false);
    setIcon("menu");
  };

  return (
    <>
      {/* Black overlay */}
      {menuOpen && <div className="overlay" onClick={handleChangeIcon}></div>}

      <nav className="navbar">
        <div className={`menuList ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={handleMenuItemClick}>
            Главная
          </a>
          <a href="#about" onClick={handleMenuItemClick}>
            О приложении
          </a>
          <a href="#download" onClick={handleMenuItemClick}>
            Скачать приложение
          </a>
        </div>
        <div
          className={`${icon === "menu" ? "menu" : "menuClose"}`}
          onClick={handleChangeIcon}
        >
          {icon === "menu" ? <Menu size={24} /> : <X size={24} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
