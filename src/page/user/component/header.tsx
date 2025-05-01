import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import StudySpaceLogo from "../../../assets/images/StudySpace_logo.png";
import { useAuth } from "../../../AuthContext";
import UserMenu from "./userMenu";
import "animate.css";
import { Menu, X } from "lucide-react";

function Header() {
  const { user } = useAuth();
  const [isSticky, setIsSticky] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenSubmenu, setMenuOpenSubmenu] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  const location = useLocation();
  const isCalendar = location.pathname.startsWith("/history");
  const isCheckinout = location.pathname.startsWith("/checkinout");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsSticky(currentScroll < lastScroll);
      setLastScroll(currentScroll);
    };

    const handleClickOutside = (e: any) => {
      if (!e.target.closest(".submenu-wrapper")) {
        setMenuOpenSubmenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [lastScroll]);

  const activeStyle = {
    fontSize: "19px",
    color: "#000000",
    fontWeight: "bold",
    marginRight: "60px",
  };

  const unactiveStyle = {
    fontSize: "19px",
    color: "#969DA6",
    fontWeight: "bold",
    marginRight: "60px",
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setMenuOpenSubmenu(false);
    setMobileSubmenuOpen(false);
  };

  return (
    <nav
      className={`z-50 bg-white transition-all duration-300 ease-in-out ${
        isSticky
          ? "sticky top-0 animate__animated animate__fadeInDown animate__fast"
          : ""
      } border-b border-gray-300`}
    >
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="../" className="flex-shrink-0 mr-3">
            <img
              src={StudySpaceLogo}
              alt="StudySpace Logo"
              className="h-[60px] w-[60px]"
            />
          </Link>
          <div>
            <div className="text-gray-800 font-bold text-base">STUDYSPACE</div>
            <div className="text-gray-500 italic text-xs font-medium leading-none">
              “Học tập hoàn hảo”
            </div>
          </div>
        </div>

        {/* Hamburger icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex flex-wrap items-center justify-center lg:gap-x-10 gap-x-2 gap-y-2 w-[70%] mx-auto">
          <NavLink
            to=".."
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-blue-600 font-bold transition-colors duration-200 ${
                isActive ? "text-black" : "text-gray-400"
              } text-sm md:text-base xl:text-xl`
            }
          >
            Trang chủ
          </NavLink>

          <NavLink
            to={user ? "../book" : "../login"}
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-blue-600 font-bold transition-colors duration-200 ${
                isActive ? "text-black" : "text-gray-400"
              } text-sm md:text-base xl:text-xl`
            }
          >
            Đặt phòng
          </NavLink>

          {/* Submenu (desktop) */}
          {user ? (
            <div className="relative submenu-wrapper">
              <button
                onClick={() => setMenuOpenSubmenu((prev) => !prev)}
                className={`hover:text-blue-600 transition-colors duration-200 ${
                  (isCalendar||isCheckinout) ? "text-black " : "text-gray-400"
                } font-bold text-sm md:text-base xl:text-xl`}
              >
                Lịch sử đặt phòng
              </button>
              {menuOpenSubmenu && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md border px-4 py-2 z-50 w-max">
                  <NavLink
                    to="/history"
                    onClick={closeMenu}
                    className="block px-3 py-2 hover:text-blue-600 text-gray-700 whitespace-nowrap"
                  >
                    Lịch
                  </NavLink>
                  <NavLink
                    to="/checkin"
                    onClick={closeMenu}
                    className="block px-3 py-2 hover:text-blue-600 text-gray-700 whitespace-nowrap"
                  >
                    Checkin/Checkout
                  </NavLink>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="../login"
              onClick={closeMenu}
              className="hover:text-blue-600 font-bold transition-colors duration-200 text-gray-400 text-sm md:text-base xl:text-xl"
            >
              Lịch sử đặt phòng
            </NavLink>
          )}

          <NavLink
            to={user ? "../status" : "../login"}
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-blue-600 font-bold transition-colors duration-200 ${
                isActive ? "text-black" : "text-gray-400"
              } text-sm md:text-base xl:text-xl`
            }
          >
            Trạng thái phòng
          </NavLink>

          <NavLink
            to={user ? "../report" : "../login"}
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-blue-600 font-bold transition-colors duration-200 ${
                isActive ? "text-black" : "text-gray-400"
              } text-sm md:text-base xl:text-xl`
            }
          >
            Báo cáo sự cố
          </NavLink>
        </div>

        {/* User button */}
        <div className="hidden lg:block">
          {user ? (
            <UserMenu />
          ) : (
            <Link to="/login">
              <button className="button4 text-sm xl:text-base">
                Đăng Nhập
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-3 items-center">
          <NavLink
            to=".."
            onClick={closeMenu}
            className="hover:text-blue-600 text-sm font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            Trang chủ
          </NavLink>
          <NavLink
            to={user ? "../book" : "../login"}
            onClick={closeMenu}
            className="hover:text-blue-600 text-sm font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            Đặt phòng
          </NavLink>

          {/* Mobile submenu toggle */}
          {user ? (
            <>
              <button
                onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                className="text-[19px] font-bold text-gray-400 hover:text-blue-600 mr-[60px]"
              >
                Lịch sử đặt phòng
              </button>

              {mobileSubmenuOpen && (
                <>
                  <NavLink
                    to="/history"
                    onClick={closeMenu}
                    className="text-[15px] font-bold text-gray-400 hover:text-blue-600 mr-[60px]"
                  >
                    └ Lịch
                  </NavLink>
                  <NavLink
                    to="/checkin"
                    onClick={closeMenu}
                    className="text-[15px] font-bold text-gray-400 hover:text-blue-600 mr-[60px]"
                  >
                    └ Checkin/Checkout
                  </NavLink>
                </>
              )}
            </>
          ) : (
            <NavLink
              to="../login"
              onClick={closeMenu}
              className="text-sm font-bold text-gray-400 hover:text-blue-600"
            >
              Lịch sử đặt phòng
            </NavLink>
          )}

          <NavLink
            to={user ? "../status" : "../login"}
            onClick={closeMenu}
            className="hover:text-blue-600 text-sm font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            Trạng thái phòng
          </NavLink>
          <NavLink
            to={user ? "../report" : "../login"}
            onClick={closeMenu}
            className="hover:text-blue-600 text-sm font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            Báo cáo sự cố
          </NavLink>
          <NavLink
            to={user ? "../checkin" : "../login"}
            onClick={closeMenu}
            className="hover:text-blue-600 text-sm font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            Checkin
          </NavLink>

          <div className="mt-2">
            {user ? (
              <UserMenu />
            ) : (
              <Link to="/login" onClick={closeMenu}>
                <button className="button4">Đăng Nhập</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
