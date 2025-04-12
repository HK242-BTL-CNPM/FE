import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import mockUsers from "./mockUsers";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
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
    <div className="bg-[url('/src/assets/images/27257016.jpg')] bg-no-repeat bg-center bg-cover h-screen flex justify-end items-center">
            <div className="hidden md:block md:w-2/3"></div>

      <div className="bg-white w-full max-w-[500px] h-screen flex justify-center items-center">
        <div className="w-[450px] text-center font-sans">
          <h2 className="font-bold mb-5 mt-5 text-2xl text-blue-600">
            Đăng nhập tài khoản
          </h2>
          <form onSubmit={handleLogin}>
            <div className="text-left mb-2">Email:</div>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  pl-12 pt-3 pb-3 border border-gray-300 rounded-lg text-black text-base"
              />
              <i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-base fa-solid fa-envelope"></i>
            </div>
            <div className="text-left mb-2">Mật khẩu:</div>
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pt-3 pb-3 pl-12 border border-gray-300 rounded-lg text-black text-base"
              />
              <i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-base fa-solid fa-lock"></i>
            </div>
            <div className="flex flex-col gap-5">
            <button
                className="button1 w-2/3 mx-auto" type="submit"
              >
                Đăng nhập
              </button>

              <div className="flex justify-center gap-5">
                <button
                  onClick={() => {
                    login(mockUsers[0]); 
                    navigate("/");
                  }}
                  className="button3 px-4 hover:scale-105 transition-transform duration-200"
                >
                  Đăng nhập nhanh (USER)
                </button>
                <button
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                  className="button3 px-4 hover:scale-105 transition-transform duration-200"
                >
                  Đăng nhập nhanh (ADMIN)
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;