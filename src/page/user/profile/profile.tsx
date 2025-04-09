import { Link } from "react-router-dom";

const sidebarLinkStyle = {
  display: "block",
  padding: "10px 20px",
  color: "#333",
  textDecoration: "none",
};

function Profile() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/src/assets/images/image5.png')",backgroundSize: "cover",
          width: "100%",height: "250px",position: "relative",
        }}
      ></div>

      <div style={{position: "absolute",top: "300px",left: "50px",width: "250px",padding: "20px 0",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",border: "1px solid rgb(205, 205, 205)"}}>

          <a href="#" style={sidebarLinkStyle}>
            <Link className="text-[#666B72] font-medium pl-1" to="../">
          <i className="fa-solid fa-house icon"></i> Trang chủ
          </Link>
        </a>
  <Link    to="#"  className="active" style={{...sidebarLinkStyle,backgroundColor: "#2979ff",color: "white"}}  >
    <i className="fa-solid fa-user icon"></i> Chi tiết người dùng
  </Link>
        <a href="#" style={sidebarLinkStyle}>
        <Link className="text-[#666B72] font-medium pl-1" to="../login">
          <i className="fa-solid fa-right-from-bracket icon"></i> Đăng xuất
          </Link></a>
      </div>

      <div style={{ marginLeft: "300px", padding: "40px" }}>
        <div
          style={{
            background: "#ffffff",margin: "0 auto",marginTop: "-100px",width: "600px",
            borderRadius: "16px",boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "70px 30px 30px",position: "relative",zIndex: "1",
          }}
        >
          <div style={{textAlign: "center",position: "relative",}}>
            <div
              style={{
                width: "140px",height: "140px", borderRadius: "50%",overflow: "hidden",
                border: "4px solid white",position: "absolute",top: "-150px",left: "50%",
                transform: "translateX(-50%)",backgroundSize: "contain",
                background: "url('/src/assets/images/ava.png') no-repeat center center",
              }}
            ></div>
            <div style={{ fontSize: "24px", fontWeight: "bold",marginBottom: "10px" }}>
              Trịnh Thị Mỹ Lệ
            </div>
            <button className="button2">Tải ảnh mới</button>

          </div>

          <div style={{ marginTop: "20px" }}>
            <label htmlFor="studentId" style={{ fontWeight: "bold", display: "block", marginBottom: "4px" }}>
              Mã số sinh viên
            </label>
            <div
              id="studentId"
              style={{width: "100%",padding: "10px", borderRadius: "8px", border: "1px solid #ccc", }}>
              22xxxxx
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <label htmlFor="email" style={{ fontWeight: "bold", display: "block", marginBottom: "4px" }}>
              Địa chỉ thư điện tử
            </label>
            <div
              id="email"
              style={{ width: "100%", padding: "10px", borderRadius: "8px",  border: "1px solid #ccc", }}>
              cobengokngek@hcmut.edu.vn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Profile;
