import AdminUserMenu from "../../admin/components/menu_admin"; // Import component mới
import { BellIcon } from "@heroicons/react/24/outline";

function Header_admin() {
  return (
    <div className="flex bg-white h-20 items-center justify-end px-4">
      <div className="flex items-center pr-4">
        <button className="text-gray-600 focus:outline-none">
          <BellIcon className="h-8 w-8" />
        </button>
      </div>
      <AdminUserMenu />
    </div>
  );
}

export default Header_admin;