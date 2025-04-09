import { useState } from "react";
import Header from "./component/header";
import Footer from "../user/component/footer";
import imageBook from "../../assets/images/image_book.jpg"; // Đảm bảo đường dẫn đúng
import { FaUsers, FaMapMarkerAlt, FaThLarge, FaRegSmile } from "react-icons/fa";

// Interface và dữ liệu mẫu (Không đổi)
interface Room {
  id: number;
  name: string;
  facility: string;
  details: string; // Ví dụ: "H6-123, CS2"
  type: string;
  capacity: number;
  available: boolean;
}
const initialRooms: Room[] = [
  {
    id: 1,
    name: "Phòng tự học 1",
    facility: "CS2",
    details: "H6-123, CS2",
    type: "Phòng tự học",
    capacity: 4,
    available: false,
  },
  {
    id: 2,
    name: "Phòng họp nhóm 1",
    facility: "CS2",
    details: "H6-124, CS2",
    type: "Phòng họp nhóm",
    capacity: 4,
    available: true,
  },
  {
    id: 3,
    name: "Phòng thuyết trình 1",
    facility: "CS1",
    details: "B1-101, CS1",
    type: "Phòng thuyết trình",
    capacity: 10,
    available: false,
  }, // Ví dụ CS1
  {
    id: 4,
    name: "Phòng mentor 1-1",
    facility: "CS2",
    details: "H6-126, CS2",
    type: "Phòng mentor 1-1",
    capacity: 2,
    available: true,
  },
  {
    id: 5,
    name: "Phòng tự học 2",
    facility: "CS1",
    details: "B4-205, CS1",
    type: "Phòng tự học",
    capacity: 6,
    available: true,
  }, // Ví dụ CS1
];

// --- Style Objects --- (Tách ra để dễ quản lý)

// Styles cho bộ lọc
const filterLabelStyle: React.CSSProperties = {
  fontSize: "18px",
  color: "#fff",
  fontWeight: "bold",
  textAlign: "center",
};
const filterControlBaseStyle: React.CSSProperties = {
  // Style cơ bản cho select/input
  padding: "10px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  minWidth: "100px",
  height: "40px",
  boxSizing: "border-box", // Thêm height và box-sizing
};
const filterDateInputStyle: React.CSSProperties = {
  // Style riêng cho input date nếu cần
  ...filterControlBaseStyle,
  padding: "8px 10px", // Điều chỉnh padding cho date input
  minWidth: "150px",
};
const searchButtonStyle: React.CSSProperties = {
  padding: "0 20px", // Điều chỉnh padding để căn giữa icon tốt hơn với height cố định
  backgroundColor: "#17243E",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "40px", // Giữ height
};

// Styles cho card phòng (Không đổi so với code trước của bạn)
const detailItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  margin: 0,
  fontSize: "16px",
  color: "#555",
};
const iconStyle: React.CSSProperties = {
  marginRight: "12px",
  color: "#6c757d",
  flexShrink: 0,
};
const baseButtonStyle: React.CSSProperties = {
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition:
    "background-color 0.2s ease, opacity 0.2s ease, transform 0.1s ease",
}; // Thêm transition cho opacity/transform
const availableButtonStyle: React.CSSProperties = {
  ...baseButtonStyle,
  backgroundColor: "#e7f7ec",
  color: "#28a745",
  border: "1px solid #b8e0c2",
};
const unavailableButtonStyle: React.CSSProperties = {
  ...baseButtonStyle,
  backgroundColor: "#f8d7da",
  color: "#721c24",
  border: "1px solid #f1b0b7",
  cursor: "not-allowed",
  opacity: 0.7,
};
const bookButtonStyle: React.CSSProperties = {
  ...baseButtonStyle,
  backgroundColor: "#0d6efd",
  color: "#fff",
}; // Xóa :hover, :active

// Component Book
function Book() {
  const [selectedFacility, setSelectedFacility] = useState("Tất cả");
  // Cập nhật buildings ban đầu dựa trên cơ sở mặc định (Tất cả)
  const [buildings, setBuildings] = useState(["Tất cả"]);
  const [selectedBuilding, setSelectedBuilding] = useState("Tất cả");
  const [selectedRoomType, setSelectedRoomType] = useState("Tất cả");
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(initialRooms);

  // Hàm cập nhật danh sách tòa nhà dựa trên cơ sở
  const updateBuildingList = (facility: string) => {
    if (facility === "CS1") {
      setBuildings(["Tất cả", "B1", "B4", "B9", "B10"]); // Ví dụ tòa CS1
    } else if (facility === "CS2") {
      setBuildings(["Tất cả", "H1", "H2", "H3", "H6"]); // Ví dụ tòa CS2
    } else {
      setBuildings(["Tất cả"]); // Nếu chọn "Tất cả" cơ sở
    }
  };

  // Xử lý khi thay đổi cơ sở
  const handleFacilityChange = (facility: string) => {
    setSelectedFacility(facility);
    setSelectedBuilding("Tất cả"); // Reset tòa khi đổi cơ sở
    updateBuildingList(facility); // Cập nhật danh sách tòa tương ứng
    // Không lọc ngay ở đây, đợi người dùng bấm nút tìm kiếm
  };

  // Xử lý khi thay đổi tòa nhà
  const handleBuildingChange = (building: string) => {
    setSelectedBuilding(building);
    // Không lọc ngay ở đây
  };

  // Xử lý khi thay đổi loại phòng
  const handleRoomTypeChange = (roomType: string) => {
    setSelectedRoomType(roomType);
    // Không lọc ngay ở đây
  };

  // Xử lý khi bấm nút tìm kiếm
  const handleSearch = () => {
    console.log(
      "Searching with:",
      selectedFacility,
      selectedBuilding,
      selectedRoomType
    ); // Để debug
    const filtered = initialRooms.filter((room) => {
      const facilityMatch =
        selectedFacility === "Tất cả" || room.facility === selectedFacility;

      // *** SỬA LOGIC LỌC TÒA ***
      // Kiểm tra xem chi tiết phòng có BẮT ĐẦU bằng mã tòa đã chọn không
      // Ví dụ: details "H6-123, CS2" sẽ khớp với selectedBuilding "H6"
      const buildingMatch =
        selectedBuilding === "Tất cả" ||
        room.details.startsWith(selectedBuilding + "-"); // Thêm dấu "-" để khớp chính xác hơn (H6- thay vì chỉ H) hoặc chỉ startsWith(selectedBuilding) nếu mã tòa là duy nhất

      const roomTypeMatch =
        selectedRoomType === "Tất cả" || room.type === selectedRoomType;

      return facilityMatch && buildingMatch && roomTypeMatch;
    });
    console.log("Filtered results:", filtered); // Để debug
    setFilteredRooms(filtered);
  };

  return (
    <>
      <Header />
      <div
        style={{
          padding: "1.5cm 4cm 2cm 4cm", // Gộp padding
          fontFamily: "Arial, sans-serif", // Nên đặt font chung
        }}
      >
        {/* Tiêu đề */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "35px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Giảm độ đậm shadow
            color: "#333", // Màu chữ tiêu đề
          }}
        >
          Đặt phòng
        </h1>
        {/* Khung bộ lọc */}
        <div
          style={{
            background: "linear-gradient(90deg, #395799, #5F91FF)",
            padding: "18px",
            borderRadius: "10px",
            marginBottom: "30px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Thêm shadow nhẹ
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, auto)",
              gap: "15px",
              alignItems: "center",
            }}
          >
            {/* Tiêu đề cột */}
            <div style={filterLabelStyle}>Cơ sở</div>
            <div style={filterLabelStyle}>Tòa</div>
            <div style={filterLabelStyle}>Loại phòng</div>
            <div style={filterLabelStyle}>Bắt đầu</div>
            <div style={filterLabelStyle}>Kết thúc</div>
            <div style={filterLabelStyle}>Ngày</div>
            <div></div> {/* Placeholder */}
            {/* Bộ lọc Controls */}
            <select
              style={filterControlBaseStyle}
              value={selectedFacility}
              onChange={(e) => handleFacilityChange(e.target.value)}
            >
              <option value="Tất cả">Tất cả</option>
              <option value="CS1">Cơ sở 1</option>
              <option value="CS2">Cơ sở 2</option>
            </select>
            <select
              style={filterControlBaseStyle}
              value={selectedBuilding}
              onChange={(e) => handleBuildingChange(e.target.value)}
            >
              {buildings.map((building, index) => (
                <option key={index} value={building}>
                  {building}
                </option>
              ))}
            </select>
            <select
              style={{ ...filterControlBaseStyle, minWidth: "150px" }}
              value={selectedRoomType}
              onChange={(e) => handleRoomTypeChange(e.target.value)}
            >
              <option value="Tất cả">Tất cả</option>
              <option value="Phòng tự học">Phòng tự học</option>
              <option value="Phòng thuyết trình">Phòng thuyết trình</option>
              <option value="Phòng họp nhóm">Phòng họp nhóm</option>
              <option value="Phòng mentor 1-1">Phòng mentor 1-1</option>
            </select>
            <select style={filterControlBaseStyle}>
              {" "}
              <option>11:00</option>{" "}
            </select>
            <select style={filterControlBaseStyle}>
              {" "}
              <option>12:00</option>{" "}
            </select>
            <input type="date" style={filterDateInputStyle} />
            <button
              style={searchButtonStyle}
              onClick={handleSearch}
              title="Tìm kiếm phòng"
            >
              {" "}
              {/* Thêm title cho button */}
              <span
                role="img"
                aria-label="Tìm kiếm"
                style={{ fontSize: "20px" }}
              >
                {" "}
                🔍{" "}
              </span>
            </button>
          </div>
        </div>

        {/* Danh sách phòng */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
            gap: "2cm",
          }}
        >
          {filteredRooms.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                gridColumn: "1 / -1",
                color: "#6c757d",
                fontSize: "18px",
              }}
            >
              Không tìm thấy phòng phù hợp.
            </p>
          ) : (
            filteredRooms.map((room) => (
              // --- Card phòng (Giữ nguyên cấu trúc JSX, chỉ dùng style object) ---
              <div
                key={room.id}
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "15px",
                  padding: "20px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <h2
                  style={{
                    color: "#343942",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  {room.name}
                </h2>
                <div
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <img
                    src={imageBook}
                    alt={room.name}
                    style={{
                      width: "180px",
                      height: "180px",
                      borderRadius: "20px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      flexGrow: 1,
                    }}
                  >
                    <p style={detailItemStyle}>
                      {" "}
                      <FaUsers size={22} style={iconStyle} /> {room.type}{" "}
                    </p>
                    <p style={detailItemStyle}>
                      {" "}
                      <FaThLarge size={20} style={iconStyle} /> {room.capacity}{" "}
                      người{" "}
                    </p>
                    <p style={detailItemStyle}>
                      {" "}
                      <FaMapMarkerAlt size={20} style={iconStyle} />{" "}
                      {room.details}{" "}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "15px",
                  }}
                >
                  {room.available ? (
                    <button style={availableButtonStyle}>
                      {" "}
                      <FaRegSmile
                        size={18}
                        style={{ marginRight: "5px" }}
                      />{" "}
                      Còn phòng{" "}
                    </button>
                  ) : (
                    <button style={unavailableButtonStyle} disabled>
                      {" "}
                      Hết phòng{" "}
                    </button>
                  )}
                  <button
                    style={bookButtonStyle}
                    onClick={() => alert(`Chức năng đặt phòng: ${room.name}`)}
                  >
                    {" "}
                    Đặt phòng{" "}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Book;
