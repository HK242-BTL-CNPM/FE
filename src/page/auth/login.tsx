import React from "react";
import "./login.scss"; // Đảm bảo bạn có file này

import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("Hiếu Dương Minh"); //
    navigate("/");
  };

  return (
    <>
      {/* <h1>Login</h1> */}
      <div className="bglogin">
        <div style={{ display: "flex", height: "100vh" }}> </div>
        <div className="right">
          <div className="login-form">
            <h2
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 32,
                color: "#2563eb",
              }}
            >
              Đăng nhập tài khoản
            </h2>
            <form>
              <div style={{ textAlign: "left" }}>Email:</div>

              <div className="input-group">
                <div className="input-wrapper">
                  <input type="email" placeholder="Email" required />
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </div>
              <div style={{ textAlign: "left" }}>Mật khẩu:</div>
              <div className="input-group">
                <div className="input-wrapper">
                  <input type="password" placeholder="Password" required />
                  <i className="fa-solid fa-lock"></i>
                </div>
              </div>
            </form>
            <div className="flex flex-col gap-5">
            <button
              style={{ alignItems: "center", marginTop: 30 }}
              className="button1"
            >
              Đăng nhập
            </button>
            <button
              onClick={handleLogin}
              className="button1"
            >
              Đăng nhập nhanh
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
