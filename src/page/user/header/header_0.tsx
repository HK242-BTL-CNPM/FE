import { Link, NavLink } from "react-router-dom";
import StudySpaceLogo from "../../../assets/images/StudySpace_logo.png"; // Đảm bảo đường dẫn đúng

// Đổi tên component thành FooterNav hoặc tên gì đó mô tả hơn (tùy chọn)
function Header() {
  const activeStyle = {
    fontSize: "17px",
    color: "#000000",
    fontWeight: "bold",
  };
  const unactiveStyle = {
    fontSize: "17px",
    color: "#969DA6",
    fontWeight: "bold",
  };
  return (
    <nav style={{ borderBottom: "1px solid #969DA6" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <div
          style={{
            flexShrink: 0,
            marginRight: "15px",
          }}
        >
          <Link to="../home" className="flex-shrink-0">
            <img
              src={StudySpaceLogo}
              alt="StudySpace Logo"
              style={{ height: "60px", width: "60px" }}
            />
          </Link>
        </div>
        <div
          style={{
            marginBottom: "11px",
            marginLeft: "-15px",
            marginRight: "60px",
          }}
        >
          <div
            className="text-gray-800" // Bỏ tạm leading và text size class
            style={{ fontSize: "16px", lineHeight: "1.5", fontWeight: "bold" }} // Ví dụ text-sm, leading-none
          >
            STUDYSPACE
          </div>
          <div
            className="text-gray-500" // Bỏ tạm leading và text size class
            style={{
              fontSize: "10px",
              lineHeight: "1",
              fontStyle: "italic",
              fontWeight: "500",
            }} // Ví dụ text-xs, leading-none
          >
            “Học tập hoàn hảo”
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7rem",
          }}
        >
          <NavLink
            to="../"
            className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="../book"
            className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            style={({ isActive }) =>
              isActive ? activeStyle : { color: "#969DA6" }
            }
          >
            Đặt phòng
          </NavLink>
          <NavLink
            to="../history"
            className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            Lịch sử đặt phòng
          </NavLink>

          <NavLink
            to="../status"
            className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            Trạng thái phòng
          </NavLink>

          <NavLink
            to="../report"
            className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            Báo cáo sự cố
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
