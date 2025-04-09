import { AiOutlineExclamationCircle } from "react-icons/ai";
import Header from "../component/header";
import Footer from "../component/footer";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Report_Issue() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [selectedMinute, setSelectedMinute] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Tệp đã chọn:", file);
      // Bạn có thể xử lý tệp ở đây, ví dụ: tải lên server hoặc hiển thị xem trước
    }
  };
  return (
    <>
      <Header />
      <div
        style={{
          padding: "1.5cm 4cm 2cm 4cm",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Breadcrumb
        <div style={{ marginBottom: "20px" }}>
          <a
            href="../"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#5D6675",
              borderBottom: "1px solid #5D6675",
            }}
          >
            Trang chủ
          </a>
          <span style={{ marginRight: "10px" }}></span>
          <span
            style={{
              fontSize: "24px", // Kích thước chữ 24px
              color: "#5D6675", // Màu chữ #5D6675
            }}
          >
            &gt;
          </span>
          <span style={{ marginRight: "10px" }}></span>
          <a
            href="/report"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#5D6675",
              borderBottom: "1px solid #5D6675",
            }}
          >
            Báo cáo sự cố
          </a>
        </div> */}
        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <AiOutlineExclamationCircle
            style={{
              fontSize: "45px",
              color: "#000",
              marginRight: "20px",
            }}
          />
          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
            Báo cáo sự cố
          </h1>
        </div>
        {/* Main Content */}
        <div
          style={{
            display: "flex",
            gap: "4cm",
            position: "relative",
          }}
        >
          {/* Thông tin phòng */}
          <div
            style={{
              backgroundColor: "#EEF4FE",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #D1D5DB",
              width: "500px",
              height: "480px",
              marginLeft: "3.5cm",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Thông tin phòng
            </h2>
            <div
              style={{
                fontSize: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {/* Cơ sở */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <label style={{ flex: "1" }}>Cơ sở</label>
                <select style={{ ...dropdownStyle, flex: "2" }}>
                  <option>Tất cả</option>
                  <option>Cơ sở 1</option>
                  <option>Cơ sở 2</option>
                </select>
              </div>
              {/* Loại phòng */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <label style={{ flex: "1" }}>Loại phòng</label>
                <select style={{ ...dropdownStyle, flex: "2" }}>
                  <option>Tất cả</option>
                  <option>Phòng tự học</option>
                  <option>Phòng thuyết trình</option>
                  <option>Phòng họp nhóm</option>
                  <option>Phòng mentor 1-1</option>
                </select>
              </div>

              {/* Số người */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <label style={{ flex: "1" }}>Số người</label>
                <select style={{ ...dropdownStyle, flex: "2" }}>
                  <option>Tất cả</option>
                  <option>1-2 người</option>
                  <option>3-5 người</option>
                  <option>6-10 người</option>
                </select>
              </div>

              {/* Tên phòng */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <label style={{ flex: "1" }}>Tên phòng</label>
                <input
                  type="text"
                  placeholder="Nhập tên phòng"
                  style={{ ...inputStyle, flex: "2" }}
                />
              </div>

              {/* Thời gian */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <label style={{ flex: "1" }}>Thời gian</label>
                <div style={{ flex: "2", display: "flex", gap: "10px" }}>
                  {/* Dropdown chọn giờ */}
                  <select
                    style={{ ...dropdownStyle, flex: "1" }}
                    onChange={(e) => setSelectedHour(e.target.value)}
                    value={selectedHour || ""} // Đảm bảo giá trị không phải null
                  >
                    <option value="">Giờ</option>
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={i.toString()}>
                        {i.toString().padStart(2, "0")}
                      </option>
                    ))}
                  </select>

                  {/* Dropdown chọn phút */}
                  <select
                    style={{ ...dropdownStyle, flex: "1" }}
                    onChange={(e) => setSelectedMinute(e.target.value)}
                    value={selectedMinute || ""} // Đảm bảo giá trị không phải null
                  >
                    <option value="">Phút</option>
                    {Array.from({ length: 60 }, (_, i) => (
                      <option key={i} value={i.toString()}>
                        {i.toString().padStart(2, "0")}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Ngày */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <label style={{ flex: "1" }}>Ngày</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Chọn ngày"
                  className="custom-datepicker"
                  maxDate={new Date()} // Ngày tối đa là hôm nay
                  minDate={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() - 1)
                    )
                  } // Ngày tối thiểu là 1 năm trước
                />
              </div>
            </div>
          </div>

          {/* Báo cáo sự cố */}
          <div
            style={{
              backgroundColor: "#EEF4FE",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #D1D5DB",
              width: "638px",
              height: "480px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Báo cáo sự cố
            </h2>
            <div
              style={{
                fontSize: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <label>
                Tên thiết bị hư hỏng
                <input
                  type="text"
                  placeholder="Nhập tên thiết bị"
                  style={inputStyle}
                />
              </label>
              <label>
                Mô tả ngắn gọn
                <textarea
                  placeholder="Nhập mô tả"
                  style={{ ...inputStyle, height: "80px", resize: "none" }}
                />
              </label>
              <label>
                Hình ảnh (nếu có)
                <div
                  style={{
                    border: "2px dashed #2563EB",
                    borderRadius: "10px",
                    padding: "30px",
                    textAlign: "center",
                    color: "#000000",
                    cursor: "pointer",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  {/* Biểu tượng tải lên */}
                  <i
                    className="fa-solid fa-upload"
                    style={{
                      fontSize: "30px",
                      color: "#2563EB",
                      marginBottom: "10px",
                    }}
                  ></i>
                  {/* Văn bản */}
                  <p style={{ margin: 0 }}>Kéo hình ảnh vào hoặc</p>
                  <p style={{ margin: 0, fontWeight: "bold" }}>Tải ảnh lên</p>
                  {/* Input file */}
                  <input
                    type="file"
                    accept="image/*"
                    style={{
                      position: "absolute",
                      opacity: 0,
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                    onChange={(e) => handleFileUpload(e)}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        {/* Footer Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            position: "relative",
            bottom: "-20px",
          }}
        >
          <button style={cancelButtonStyle}>Hủy</button>
          <button style={submitButtonStyle}>Gửi</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

const dropdownStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #D1D5DB",
  fontSize: "14px",
  color: "#757575",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #D1D5DB",
  fontSize: "14px",
};

const cancelButtonStyle: React.CSSProperties = {
  backgroundColor: "#EEF4FE",
  color: "#2563EB",
  border: "none",
  borderRadius: "8px",
  padding: "10px 60px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "20px",
  marginRight: "20px",
};

const submitButtonStyle: React.CSSProperties = {
  backgroundColor: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "10px 60px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "20px",
  marginRight: "4cm",
};

export default Report_Issue;
