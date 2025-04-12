import AdminUserMenu from "../../admin/components/menu_admin"; // Import component mới
import { BellIcon,Bars3Icon} from "@heroicons/react/24/outline";

function Header_admin({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <div className="flex bg-white h-20 items-center justify-between px-4">
      <button
        onClick={onToggleSidebar}
        className="text-gray-600 focus:outline-none "
      >
        <Bars3Icon className="h-8 w-8" />
      </button>
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