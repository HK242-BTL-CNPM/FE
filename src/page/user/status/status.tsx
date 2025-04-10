import Header from "../component/header";
import Footer from "../component/footer";
import { CiCircleList, CiCalendar } from "react-icons/ci";
import { FaSort, FaLock } from "react-icons/fa"; // Import icon sắp xếp
import { rooms, roomTypes, statusColor, roomStatuses } from "./const_status";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarXmark } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { Link } from "react-router-dom";

function Status() {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const [selectedRoomType, setSelectedRoomType] = useState("Tất cả phòng");
  const [selectedRoomStatus, setSelectedRoomStatus] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(8);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSort = (key: string) => {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredRooms = rooms.filter((room) => {
    const typeMatch =
      selectedRoomType === "Tất cả phòng" || room.type === selectedRoomType;
    const statusMatch =
      selectedRoomStatus === "Tất cả" || room.status === selectedRoomStatus;
    return typeMatch && statusMatch;
  });

  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    const order = direction === "asc" ? 1 : -1;
    if (a[key as keyof typeof a] < b[key as keyof typeof b]) return -1 * order;
    if (a[key as keyof typeof a] > b[key as keyof typeof b]) return 1 * order;
    return 0;
  });
  const totalPages = Math.ceil(sortedRooms.length / entriesPerPage);
  const paginatedRooms = sortedRooms.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <>
      <Header />
      <div
        style={{
          padding: "1.5cm 4cm 2cm 4cm",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#F9FAFB", // Thêm màu nền nhạt
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <CiCircleList
              style={{
                fontSize: "50px", // Giảm size chút
                color: "#374151", // Màu xám đậm
                marginRight: "20px",
              }}
            />
            <h1
              style={{ fontSize: "32px", fontWeight: "bold", color: "#111827" }}
            >
              {" "}
              Trạng thái phòng
            </h1>
          </div>

          {/* Date Picker */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            
              
            }}
          >
            <CiCalendar size={25} style={{ color: "#374151" }} />{" "}
            <div className="pl-2">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date || new Date())}
              minDate={new Date()} // Chỉ cho phép chọn từ ngày hiện tại trở đi
              maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
              dateFormat="MMM, dd yyyy" // Định dạng ngày
              className="custom-datepicker rounded-xl px-2 py-1 border border-gray-300"
              placeholderText="Select a date"
            />
            </div>
            {/* Icon lịch */}
            
          </div>
        </div>

        {/* --- Container chính cho Filter và Bảng --- */}
        <div
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            gap: "30px",
            alignItems: "flex-start",
          }}
        >
          {/* --- CSS Styles (Giữ nguyên và sửa margin) --- */}
          <style>{`
            .page-title { font-size: 1.5em; font-weight: bold; color: #2563eb; margin-bottom: 16px; }

            .table-section { /* Class mới cho div bọc bảng */
                flex-grow: 1; /* Cho phép bảng chiếm không gian còn lại */
                display: flex;
                flex-direction: column; /* Header và container xếp dọc */
            }
            .room-container {
              background-color: white;
              border-radius: 0 0 8px 8px; /* Chỉ bo góc dưới */
              box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
              padding: 0 16px 16px 16px; /* Bỏ padding-top vì header đã có, bỏ padding-left lớn */
              /* margin-left: 500px; */ /* <<-- BỎ MARGIN */
              /* margin-right: 50px; */ /* <<-- BỎ MARGIN */
              height: auto;
              border: 1px solid #E5E7EB; /* Thêm viền nhẹ */
              border-top: none; /* Bỏ viền trên */
            }
            .room-header, .room-row {
              display: grid;
              /* Có thể điều chỉnh lại grid columns nếu cần 5 cột */
              /* grid-template-columns: 1.5fr 1.5fr 1fr 1fr 50px; */
              grid-template-columns: 1.5fr 1.5fr 1fr 1fr; /* Giữ nguyên 4 cột như code gốc */
              gap: 15px; /* Khoảng cách cột */
            }
            .room-header {
              padding: 12px 16px; /* Điều chỉnh padding */
              height: 60px; 
              font-size: 0.9em; /* Nhỏ hơn chút */
              font-weight: 600;
              border-radius: 8px 8px 0 0; /* Chỉ bo góc trên */
              background-color: #F9FAFB;
              align-items: center;
              border: 1px solid #E5E7EB; /* Thêm viền nhẹ */
              color: #6B7280; /* Màu chữ header */
            }
            .room-row {
              align-items: center;
              padding: 15px 0; /* Giữ padding dọc */
              border-bottom: 1px solid #eee;
            }
             .room-row:last-child {
                 border-bottom: none; /* Bỏ viền dòng cuối */
            }
            .room-name { display: flex; align-items: center; gap: 8px; font-weight: 500;} /* Thêm font-weight */

            /* Status Label Styles */
            .status-label { padding: 5px 10px; border-radius: 6px; font-size: 0.85em; display: inline-block; font-weight: 500; min-width: 90px; text-align: center;}
            /* Cần định nghĩa các màu này dựa trên hình mẫu */
            .status-green { background-color: #D1FAE5; color: #065F46; } /* TRỐNG */
            .status-purple { background-color: #E5E7EB; color: #4B5563; } /* KHÓA - dùng màu xám như mẫu */
            .status-yellow { background-color: #FFEDD5; color: #9A3412; } /* ĐÃ ĐẶT - dùng màu cam như mẫu */
            .status-sky { background-color: #DBEAFE; color: #1E40AF; } /* ĐANG SỬ DỤNG */

            /* Filter Styles */
            .room-filter {
                width: 340px; /* Giảm width chút */
                padding: 20px;
                border: 1px solid #E5E7EB;
                border-radius: 12px;
                background-color: white;
                box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
                flex-shrink: 0; /* Ngăn filter co lại */
              }
            .filter-header-internal { /* Đổi tên class để tránh trùng */
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            .filter-main-title { /* Đổi tên class */
                 background-color: #3B82F6; /* Nền xanh */
                 color: white;
                 font-weight: bold;
                 font-size: 1.1em;
                 padding: 8px 15px;
                 border-radius: 6px;
            }
            .clear-all-button {
                 border-bottom: 1px solid #343942;
                 color: #23272C;
                 cursor: pointer;
                 font-size: 13px;
                 font-weight: 500;
            }
            .filter-title {
                font-size: 16px; /* Chỉnh size */
                font-weight: 600;
                color: #374151; /* Màu chữ */
                margin-bottom: 12px;
                margin-top: 20px;
              }
            .filter-items-container { /* Thêm container cho nút */  
                display: flex; 
                flex-wrap: wrap; 
                gap: 15px;
            }
            .filter-item {
                background-color: #F3F4F6;
                color: #374151;
                border: 1px solid #E5E7EB;
                border-radius: 16px;
                padding: 6px 14px;
                font-size: 14px;
                cursor: pointer;
              }
              /* Thêm style cho nút được chọn (ví dụ) */
             .filter-item.selected {
                 background-color: #3B82F6; color: white; border-color: #3B82F6;
             }
             .filter-item:hover {
                 background-color: #E5E7EB;
             }
          `}</style>

          {/* --- Filter Column --- */}
          <div className="room-filter">
            <div className="filter-header-internal">
              <div className="filter-main-title">Room Filter</div>
              <button
                className="clear-all-button"
                onClick={() => {
                  setSelectedRoomType("Tất cả phòng");
                  setSelectedRoomStatus("Tất cả");
                }}
              >
                CLEAR ALL
              </button>
            </div>

            <div className="filter-title">Loại Phòng</div>
            <div className="filter-items-container">
              {roomTypes.map((type, index) => (
                <div
                  key={index}
                  className={`filter-item ${
                    selectedRoomType === type ? "selected" : ""
                  }`}
                  onClick={() => setSelectedRoomType(type)}
                >
                  {type}
                </div>
              ))}
            </div>

            <div className="filter-title">Trạng Thái Phòng</div>
            <div className="filter-items-container">
              {roomStatuses.map((status, index) => (
                <div
                  key={index}
                  className={`filter-item ${
                    selectedRoomStatus === status ? "selected" : ""
                  }`}
                  onClick={() => setSelectedRoomStatus(status)}
                >
                  {status}
                </div>
              ))}
            </div>
          </div>

          {/* --- Table Column --- */}
          <div className="table-section">
            <div className="room-header">
              <div>Tên phòng</div>
              <div
                onClick={() => handleSort("type")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Loại phòng <FaSort style={{ marginLeft: "5px" }} />
              </div>
              <div
                onClick={() => handleSort("status")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Trạng thái <FaSort style={{ marginLeft: "5px" }} />
              </div>
              <div
                onClick={() => handleSort("time")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Thời gian <FaSort style={{ marginLeft: "5px" }} />
              </div>
            </div>

            <div className="room-container">
              {paginatedRooms.map((room) => (
                <div key={room.id} className="room-row">
                  <div className="room-name">Phòng {room.id}</div>
                  <div>{room.type}</div>
                  <div>
                    <span
                      className={`status-label ${
                        statusColor[room.status as keyof typeof statusColor] ||
                        "status-default"
                      }`}
                    >
                      {room.status}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {room.time}
                    {/* Thêm icon bên phải */}
                    {room.status === "Đã đặt" && (
                      <FontAwesomeIcon
                        icon={faCalendarXmark}
                        style={{
                          color: "#6B7280",
                          fontSize: "20px",
                          marginRight: "50px",
                        }}
                      />
                    )}
                    {room.status === "Khóa" && (
                      <FaLock
                        style={{ color: "#6B7280", marginRight: "50px" }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                padding: "0 10px",
                fontSize: "0.9em",
                color: "#6b7280",
              }}
            >
              {/* Hiển thị số lượng entries */}
              <div>
                Show{" "}
                {Math.min(
                  (currentPage - 1) * entriesPerPage + 1,
                  sortedRooms.length
                )}{" "}
                to {Math.min(currentPage * entriesPerPage, sortedRooms.length)}{" "}
                of {sortedRooms.length} entries
              </div>
              {/* Pagination */}
              <div style={{ display: "flex", gap: "5px" }}>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    backgroundColor: currentPage === 1 ? "#f1f1f1" : "#fff",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  }}
                >
                  &lt;
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      backgroundColor:
                        currentPage === index + 1 ? "#2563EB" : "#fff",
                      color: currentPage === index + 1 ? "#fff" : "#000",
                      cursor: "pointer",
                    }}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    backgroundColor:
                      currentPage === totalPages ? "#f1f1f1" : "#fff",
                    cursor:
                      currentPage === totalPages ? "not-allowed" : "pointer",
                  }}
                >
                  &gt;
                </button>
              </div>

              {/* Show entries dropdown */}
              <div>
                Show{" "}
                <select
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1); // Reset to first page
                  }}
                  style={{
                    padding: "2px 5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  <option value={5}>5</option>
                  <option value={8}>8</option>
                  <option value={10}>10</option>
                </select>{" "}
                entries
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Status;
