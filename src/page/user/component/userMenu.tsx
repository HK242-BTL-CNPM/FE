import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../../AuthContext";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";

function UserMenu() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  if (!user) return null;
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mx-auto" ref={menuRef}>
      <div
        className="cursor-pointer flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
         <div className="flex flex-col justify-center items-end">
                <div className="text-base font-medium">
                    {user}
                </div>
                <div>
                    User
                </div>
         </div>
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
          {user.charAt(0)}
        </div>
       
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50">
          {/* Avatar + name */}
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
              {user.charAt(0)}
            </div>
            <div className="ml-3 text-lg font-semibold">{user}</div>
          </div>

          <hr className="mb-3" />

          {/* Menu Items */}
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
              <div className="flex items-center gap-2">
              <CiUser />
              Hồ sơ cá nhân
              </div>
              <span>›</span>
            </li>
            <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
              <div className="flex items-center gap-2">
              <IoSettingsOutline /> Cài đặt
              </div>
              <span>›</span>
            </li>
            <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
              <div className="flex items-center gap-2">
              <CiCircleQuestion /> Hỗ trợ
              </div>
              <span>›</span>
            </li>
          </ul>

          {/* Logout */}
          <button
            onClick={logout}
            className="mt-4 w-full text-center text-blue-500 bg-blue-50 py-2 rounded hover:bg-blue-100 font-semibold"
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
