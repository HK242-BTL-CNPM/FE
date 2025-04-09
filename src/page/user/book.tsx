import { useState } from "react";
import Header from "./component/header"; // Đã sửa import
import Footer from "../user/component/footer"; // Giữ nguyên import Footer
import imageBook from "../../assets/images/image_book.jpg"; // Đảm bảo đường dẫn đúng
import {
  FaUsers,
  FaMapMarkerAlt,
  FaThLarge,
  FaRegSmile,
  FaRegFrown,
} from "react-icons/fa";

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
  },
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
  },
  {
    id: 6,
    name: "Phòng họp nhóm 2",
    facility: "CS2",
    details: "H3-101, CS2",
    type: "Phòng họp nhóm",
    capacity: 8,
    available: true,
  },
  {
    id: 7,
    name: "Phòng tự học 3",
    facility: "CS2",
    details: "H6-125, CS2",
    type: "Phòng tự học",
    capacity: 4,
    available: false,
  },
  {
    id: 8,
    name: "Phòng họp nhóm 3",
    facility: "CS1",
    details: "B9-303, CS1",
    type: "Phòng họp nhóm",
    capacity: 6,
    available: true,
  },
  {
    id: 9,
    name: "Phòng mentor 1-1 (2)",
    facility: "CS2",
    details: "H6-127, CS2",
    type: "Phòng mentor 1-1",
    capacity: 2,
    available: false,
  },
];
const ROOMS_PER_PAGE = 4;
// --- Style Objects ---

// Styles bộ lọc (Giữ nguyên từ code của bạn)
const filterLabelStyle: React.CSSProperties = {
  fontSize: "18px",
  color: "#fff",
  fontWeight: "bold",
  textAlign: "center",
};
const filterControlBaseStyle: React.CSSProperties = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  minWidth: "100px",
  height: "40px",
  boxSizing: "border-box",
};
const filterDateInputStyle: React.CSSProperties = {
  ...filterControlBaseStyle,
  padding: "8px 10px",
  minWidth: "150px",
};
const searchButtonStyle: React.CSSProperties = {
  padding: "0 20px",
  backgroundColor: "#17243E",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "40px",
};

// --- Styles cho Card Phòng (ĐÃ CẬP NHẬT THEO YÊU CẦU) ---
const cardStyle: React.CSSProperties = {
  width: "496px", // Chiều rộng cố định
  height: "368px", // Chiều cao cố định
  border: "1px solid #34394266", // Viền mong muốn (xám đen trong suốt ~40%)
  borderRadius: "20px", // Bo góc mong muốn
  padding: "20px", // Khoảng đệm bên trong
  backgroundColor: "#fff",
  boxShadow: "0 4px 12px rgba(52, 57, 66, 0.08)", // Shadow nhẹ với màu #343942
  display: "flex",
  flexDirection: "column",
  gap: "18px", // Khoảng cách giữa các khối chính (title, content, actions)
  boxSizing: "border-box", // Đảm bảo padding/border nằm trong width/height
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
};

const cardTitleStyle: React.CSSProperties = {
  color: "#343942",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  margin: 0,
  flexShrink: 0,
};

const cardContentStyle: React.CSSProperties = {
  display: "flex",
  gap: "25px",
  alignItems: "center",
  flexGrow: 1,
  overflow: "hidden",
};

const cardImageStyle: React.CSSProperties = {
  width: "170px", // Kích thước ảnh phù hợp
  height: "170px",
  borderRadius: "15px", // Bo góc ảnh
  objectFit: "cover",
  flexShrink: 0,
};

const cardDetailsStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "18px", // Khoảng cách giữa các dòng thông tin
  flexGrow: 1,
  overflow: "hidden",
};

const detailItemStyle: React.CSSProperties = {
  // Giữ nguyên từ code bạn cung cấp, có thể tăng fontSize nếu muốn
  display: "flex",
  alignItems: "center",
  margin: 0,
  fontSize: "17px", // Tăng nhẹ font size
  color: "#555",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden", // Xử lý tràn text
};

const iconStyle: React.CSSProperties = {
  // Tăng marginRight
  marginRight: "15px",
  color: "#6c757d",
  flexShrink: 0,
};

const cardActionsStyle: React.CSSProperties = {
  marginTop: "auto", // Đẩy nút xuống dưới nếu content co giãn
  display: "flex",
  gap: "2cm",
  alignItems: "center",
  // flexShrink: 0,
};

// -- Button Styles (Cập nhật nút Còn phòng) ---
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
};

const availableButtonStyle: React.CSSProperties = {
  // Style nút "Còn phòng" mới giống mẫu
  ...baseButtonStyle,
  backgroundColor: "#E0F8E6", // Nền xanh lá nhạt
  color: "#1A8A3C", // Chữ xanh lá đậm
  border: "1px solid #A7D9B6", // Viền xanh lá nhạt
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
};

// --- Component Book ---
function Book() {
  // States và handlers (Giữ nguyên từ code của bạn)
  const [selectedFacility, setSelectedFacility] = useState("Tất cả");
  const [buildings, setBuildings] = useState(["Tất cả"]);
  const [selectedBuilding, setSelectedBuilding] = useState("Tất cả");
  const [selectedRoomType, setSelectedRoomType] = useState("Tất cả");
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(initialRooms);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState(""); // Ngày bắt đầu
  const [startTime, setStartTime] = useState(""); // Thời gian bắt đầu
  const [endTime, setEndTime] = useState("");

  const updateBuildingList = (facility: string) => {
    if (facility === "CS1") setBuildings(["Tất cả", "B1", "B4", "B9", "B10"]);
    else if (facility === "CS2")
      setBuildings(["Tất cả", "H1", "H2", "H3", "H6"]);
    else setBuildings(["Tất cả"]);
  };
  const handleFacilityChange = (facility: string) => {
    setSelectedFacility(facility);
    setSelectedBuilding("Tất cả");
    updateBuildingList(facility);
  };
  const handleBuildingChange = (building: string) =>
    setSelectedBuilding(building);
  const handleRoomTypeChange = (roomType: string) =>
    setSelectedRoomType(roomType);
  const handleSearch = () => {
    const filtered = initialRooms.filter((room) => {
      const facilityMatch =
        selectedFacility === "Tất cả" || room.facility === selectedFacility;
      const buildingMatch =
        selectedBuilding === "Tất cả" ||
        room.details.startsWith(selectedBuilding + "-");
      const roomTypeMatch =
        selectedRoomType === "Tất cả" || room.type === selectedRoomType;
      return facilityMatch && buildingMatch && roomTypeMatch;
    });
    setFilteredRooms(filtered);
  };
  const currentRooms = filteredRooms.slice(
    (currentPage - 1) * ROOMS_PER_PAGE,
    currentPage * ROOMS_PER_PAGE
  );

  return (
    <>
      <Header />
      <div
        style={{
          padding: "1.5cm 4cm 2cm 4cm",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Tiêu đề */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "35px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
            color: "#333",
          }}
        >
          Đặt phòng
        </h1>
        {/* Khung bộ lọc (Giữ nguyên JSX từ code của bạn) */}
        <div
          style={{
            background: "linear-gradient(90deg, #395799, #5F91FF)",
            padding: "18px",
            borderRadius: "10px",
            marginBottom: "30px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
            <div style={filterLabelStyle}>Cơ sở</div>{" "}
            <div style={filterLabelStyle}>Tòa</div>{" "}
            <div style={filterLabelStyle}>Loại phòng</div>{" "}
            <div style={filterLabelStyle}>Bắt đầu</div>{" "}
            <div style={filterLabelStyle}>Kết thúc</div>{" "}
            <div style={filterLabelStyle}>Ngày</div> <div />
            <select
              style={filterControlBaseStyle}
              value={selectedFacility}
              onChange={(e) => handleFacilityChange(e.target.value)}
            >
              {" "}
              <option value="Tất cả">Tất cả</option>{" "}
              <option value="CS1">Cơ sở 1</option>{" "}
              <option value="CS2">Cơ sở 2</option>{" "}
            </select>
            <select
              style={filterControlBaseStyle}
              value={selectedBuilding}
              onChange={(e) => handleBuildingChange(e.target.value)}
            >
              {buildings.map((b, i) => (
                <option key={i} value={b}>
                  {b}
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
            <input
              type="time"
              style={filterControlBaseStyle}
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <input
              type="time"
              style={filterControlBaseStyle}
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              min={startTime} // Thời gian kết thúc phải sau thời gian bắt đầu
            />
            <input
              type="date"
              style={filterDateInputStyle}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]} // Không cho phép chọn ngày trong quá khứ
            />
            <button
              style={searchButtonStyle}
              onClick={handleSearch}
              title="Tìm kiếm phòng"
            >
              {" "}
              <span
                role="img"
                aria-label="Tìm kiếm"
                style={{ fontSize: "20px" }}
              >
                {" "}
                🔍{" "}
              </span>{" "}
            </button>
          </div>
        </div>

        {/* Danh sách phòng (Cập nhật grid và dùng style mới) */}
        <div
          style={{
            display: "grid",
            // Grid với cột cố định theo width của card
            gridTemplateColumns: "repeat(auto-fit, 496px)",
            gap: "2cm", // Khoảng cách giữa các card
            justifyContent: "center", // Căn giữa các card trong grid
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
            currentRooms.map((room) => (
              // --- Áp dụng các style đã cập nhật cho card và các phần tử con ---
              <div key={room.id} style={cardStyle}>
                <h2 style={cardTitleStyle}> {room.name} </h2>
                <div style={cardContentStyle}>
                  <img src={imageBook} alt={room.name} style={cardImageStyle} />
                  <div style={cardDetailsStyle}>
                    {/* Tăng size icon trong JSX */}
                    <p style={detailItemStyle}>
                      <FaUsers size={24} style={iconStyle} /> {room.type}
                    </p>
                    <p style={detailItemStyle}>
                      <FaThLarge size={22} style={iconStyle} /> {room.capacity}
                      {} người
                    </p>
                    <p style={detailItemStyle}>
                      <FaMapMarkerAlt size={22} style={iconStyle} />
                      {room.details}
                    </p>
                  </div>
                </div>
                <div style={cardActionsStyle}>
                  {room.available ? (
                    <button style={availableButtonStyle}>
                      <FaRegSmile size={18} style={{ marginRight: "5px" }} />
                      Còn phòng
                    </button>
                  ) : (
                    <button style={unavailableButtonStyle} disabled>
                      <FaRegFrown size={18} style={{ marginRight: "5px" }} />
                      Hết phòng
                    </button>
                  )}
                  <button
                    style={bookButtonStyle}
                    onClick={() => alert(`Đặt phòng: ${room.name}`)}
                  >
                    Đặt phòng
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{
              padding: "10px 15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: currentPage === 1 ? "#f1f1f1" : "#fff",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
            }}
          >
            &lt;
          </button>
          {Array.from(
            { length: Math.ceil(filteredRooms.length / ROOMS_PER_PAGE) },
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                style={{
                  padding: "10px 15px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor:
                    currentPage === index + 1 ? "#2563EB" : "#fff",
                  color: currentPage === index + 1 ? "#fff" : "#000",
                  cursor: "pointer",
                }}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(
                  prev + 1,
                  Math.ceil(filteredRooms.length / ROOMS_PER_PAGE)
                )
              )
            }
            disabled={
              currentPage === Math.ceil(filteredRooms.length / ROOMS_PER_PAGE)
            }
            style={{
              padding: "10px 15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor:
                currentPage === Math.ceil(filteredRooms.length / ROOMS_PER_PAGE)
                  ? "#f1f1f1"
                  : "#fff",
              cursor:
                currentPage === Math.ceil(filteredRooms.length / ROOMS_PER_PAGE)
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            &gt;
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Book;
