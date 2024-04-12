import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faBucket,
  faLocationDot,
  faMagnifyingGlass,
  faUser,
  faHeart,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleItemClick = (item) => {
    setActiveMenu(item);
  };

  useEffect(() => {
    // Redirect to the home route after reload
    navigate("/");
  }, []); // Empty dependency array ensures the effect runs only once after component mount

  return (
    <>
      <div className="first-block">
        <div className="container f-after">
          <div>
            <span className="header_text">
              <FontAwesomeIcon icon={faCircleInfo} />
              <p>Help & Contact</p>
            </span>
            <span className="header_text">
              <FontAwesomeIcon icon={faBucket} />
              <p>Deals of the day</p>
            </span>
            <span className="header_text">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Store Location</p>
            </span>
          </div>
          <div className="del-time">
            <span>Home delivery available</span>
            <p>10:00am - 8:30pm</p>
          </div>
        </div>
      </div>
      <header className="main-header">
        <div className="container header-b">
          <div className="logo-block">
            <img src={Logo} className="logo" alt="logo" />
          </div>
          <nav className={`header-menu ${isMobileMenuOpen ? "act" : ""}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={activeMenu === "home" ? "active" : ""}
                  onClick={() => handleItemClick("home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/snacks"
                  className={activeMenu === "snacks" ? "active" : ""}
                  onClick={() => handleItemClick("snacks")}
                >
                  Snacks
                </Link>
              </li>
              <li>
                <Link
                  to="/fruits"
                  className={activeMenu === "fruits" ? "active" : ""}
                  onClick={() => handleItemClick("fruits")}
                >
                  Fruits
                </Link>
              </li>
              <li>
                <Link
                  to="/meat"
                  className={activeMenu === "meat" ? "active" : ""}
                  onClick={() => handleItemClick("meat")}
                >
                  Meat & Egg
                </Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="header-right">
            <span className="icon-right search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <span className="icon-right user">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="icon-right">
              <FontAwesomeIcon icon={faHeart} />
              <span>0</span>
            </span>
            <span className="icon-right">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>0</span>
            </span>
            <span className="icon-right hamburger" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
