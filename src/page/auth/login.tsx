import React from "react";
import "./login.scss"; // Đảm bảo bạn có file này

function Login() {
  return (
      <>
          {/* <h1>Login</h1> */}
          <div className="bglogin"><div style={{display: 'flex', height: '100vh'}}>    </div>
  <div className="right">
    <div className="login-form">
      <h2 style={{ fontWeight: 'bold', marginBottom: 20, fontSize: 32, color: '#2563eb' }}>Đăng nhập tài khoản</h2>
      <form>
          <div style={{textAlign: 'left'}} >Email:</div>

<div className="input-group">
                          <div className="input-wrapper">
                              <input type="email" placeholder="Email" required />
                              <i className="fa-solid fa-envelope"></i>
                          </div>
                      </div>
                      <div style={{textAlign: 'left'}} >Mật khẩu:</div>
                      <div className="input-group">
                          <div className="input-wrapper">
                              <input type="password" placeholder="Password" required />
                              <i className="fa-solid fa-lock"></i>
                          </div>
                      </div>

      </form>
      <button style={{alignItems: 'center',marginTop: 30}} className="button1">Đăng nhập</button>

    </div>

  </div>

</div>
      </>

    );
}

export default Login;