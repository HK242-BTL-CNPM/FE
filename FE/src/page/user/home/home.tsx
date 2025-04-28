// import Banner from "./banner";
// import Description from "./description";
// import Header from "../../user/component/header";
// import Footer from "../../user/component/footer";
// function Home() {
//   return (
//     <>
//       <Header />
//       <Banner />
//       <Description />
//       <Footer />
//     </>
//   );
// }

// export default Home;


import { useEffect, useState } from "react";
import api from "../../../api/axiosConfig";

interface User {
  id: number;
  username: string;
  email: string;
  isUser: boolean;
  isAdmin: boolean;
  isActive: boolean;
}

function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Gửi yêu cầu API đến /api/v1/user/me
    api
      .get("/api/v1/user/me")
      .then((response) => {
        console.log("Response from /api/v1/user/me:", response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError(error.response?.data?.detail || "Không thể lấy dữ liệu người dùng");
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Trang Chủ</h2>
        {user ? (
          <div className="text-left">
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Is User:</strong> {user.isUser ? "True" : "False"}</p>
            <p><strong>Is Admin:</strong> {user.isAdmin ? "True" : "False"}</p>
            <p><strong>Is Active:</strong> {user.isActive ? "True" : "False"}</p>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p>Đang tải dữ liệu...</p>
        )}
      </div>
    </div>
  );
}

export default Home;