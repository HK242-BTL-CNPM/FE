import { AiOutlineExclamationCircle } from "react-icons/ai";
import Header from "../component/header";
import Footer from "../component/footer";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function Report_Issue() {
  const [selectedFacility, setSelectedFacility] = useState("Tất cả");
  const [buildingOptions, setBuildingOptions] = useState<string[]>([]);
  const [selectedRoomType, setSelectedRoomType] = useState("Tất cả");
  const [roomNameOptions, setRoomNameOptions] = useState<string[]>([]);

  const handleFacilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const facility = e.target.value;
    setSelectedFacility(facility);

    // Cập nhật danh sách tòa dựa trên cơ sở đã chọn
    if (facility === "Cơ sở 1") {
      setBuildingOptions(["B1", "B4", "B9", "B10"]);
    } else if (facility === "Cơ sở 2") {
      setBuildingOptions(["H1", "H2", "H3", "H6"]);
    } else {
      setBuildingOptions([]);
    }
  };

  const handleRoomTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const roomType = e.target.value;
    setSelectedRoomType(roomType);

    // Cập nhật danh sách tên phòng dựa trên loại phòng
    if (roomType === "Phòng thuyết trình") {
      setRoomNameOptions(["PTT-01", "PTT-02", "PTT-03", "PTT-04"]);
    } else if (roomType === "Phòng tự học") {
      setRoomNameOptions(["PTH-01", "PTH-02", "PTH-03", "PTH-04"]);
    } else if (roomType === "Phòng họp nhóm") {
      setRoomNameOptions(["PHN-01", "PHN-02", "PHN-03", "PHN-04"]);
    } else if (roomType === "Phòng mentor 1-1") {
      setRoomNameOptions(["PM1-01", "PM1-02", "PM1-03", "PM1-04"]);
    } else {
      setRoomNameOptions([]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Tệp đã chọn:", file);
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
              height: "370px",
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
                marginTop: "30px",
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
                <select
                  style={{ ...dropdownStyle, flex: "2" }}
                  value={selectedFacility}
                  onChange={handleFacilityChange}
                >
                  <option value="Tất cả">Tất cả</option>
                  <option value="Cơ sở 1">Cơ sở 1</option>
                  <option value="Cơ sở 2">Cơ sở 2</option>
                </select>
              </div>

              {/* Tòa */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <label style={{ flex: "1" }}>Tòa</label>
                <select style={{ ...dropdownStyle, flex: "2" }}>
                  <option value="">Tất cả</option>
                  {buildingOptions.map((building) => (
                    <option key={building} value={building}>
                      {building}
                    </option>
                  ))}
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
                <select
                  style={{ ...dropdownStyle, flex: "2" }}
                  value={selectedRoomType}
                  onChange={handleRoomTypeChange}
                >
                  <option value="Tất cả">Tất cả</option>
                  <option value="Phòng tự học">Phòng tự học</option>
                  <option value="Phòng thuyết trình">Phòng thuyết trình</option>
                  <option value="Phòng họp nhóm">Phòng họp nhóm</option>
                  <option value="Phòng mentor 1-1">Phòng mentor 1-1</option>
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
                <select style={{ ...dropdownStyle, flex: "2" }}>
                  <option value="">Tất cả</option>
                  {roomNameOptions.map((roomName) => (
                    <option key={roomName} value={roomName}>
                      {roomName}
                    </option>
                  ))}
                </select>
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
