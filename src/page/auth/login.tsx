import "./login.scss"; // Đảm bảo bạn có file này

import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import mockUsers from "./mockUsers";
function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e:any) => {
    e.preventDefault();
  
    const foundUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );
  
    if (foundUser?.role === "Admin") {
      login(foundUser);
      navigate("/dashboard");
    } else if (foundUser) {
      login(foundUser);
      navigate("/"); 
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
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
            <form onSubmit={handleLogin}>
              <div style={{ textAlign: "left" }}>Email:</div>

              <div className="input-group">
                <div className="input-wrapper">
                  <input type="email" placeholder="Email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </div>
              <div style={{ textAlign: "left" }}>Mật khẩu:</div>
              <div className="input-group">
                <div className="input-wrapper">
                  <input type="password" placeholder="Password" required value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                  <i className="fa-solid fa-lock"></i>
                </div>
              </div>
              <div className="flex flex-col gap-5">
              <button
                style={{ alignItems: "center", marginTop: 30 }}
                className="button1" type="submit"
              >
                Đăng nhập
              </button>
              <button onClick={() => {
                  login(mockUsers[0]); // Đăng nhập nhanh
                  navigate("/");
                }} className="button1">
                Đăng nhập nhanh
              </button>
            </div>
            </form >
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
