// // import { createContext, useContext, useState, ReactNode } from 'react';

// // interface User {
// //   id: number;
// //   name: string;
// //   email: string;
// //   mssv: string;
// //   role: string;
// // }

// // interface AuthContextType {
// //   user: User | null;
// //   login: (userData: User) => void;
// //   logout: () => void;
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // export function AuthProvider({ children }: { children: ReactNode }) {
// //   const [user, setUser] = useState<User | null>(null);

// //   const login = (userData: User) => setUser(userData);
// //   const logout = () => setUser(null);

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // }

// // // Custom hook
// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (!context) throw new Error('useAuth must be used within AuthProvider');
// //   return context;
// // };


// //----cập nhật lại file để khi reload trang thì vẫn giữ được thông tin user đã đăng nhập
// import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   mssv: string;
//   role: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (userData: User) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// const LOCAL_STORAGE_KEY = 'user'; // Key để lưu trữ trong Local Storage

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     // Kiểm tra Local Storage khi component được mount lần đầu tiên
//     const storedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (error) {
//         console.error("Lỗi khi parse dữ liệu user từ Local Storage:", error);
//         // Xử lý lỗi nếu dữ liệu trong Local Storage không hợp lệ
//         localStorage.removeItem(LOCAL_STORAGE_KEY);
//       }
//     }
//   }, []); // [] đảm bảo useEffect chỉ chạy một lần sau lần render đầu tiên

//   const login = (userData: User) => {
//     setUser(userData);
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData)); // Lưu vào Local Storage khi đăng nhập
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem(LOCAL_STORAGE_KEY); // Xóa khỏi Local Storage khi đăng xuất
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Custom hook
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth must be used within AuthProvider');
//   return context;
// };

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import api from './api/axiosConfig'; 

// Định nghĩa cấu trúc User dựa trên API response
interface User {
  id: number;
  username: string;
  password: string;
  MSSV: number;
  lastname: string;
  firstname: string;
  email: string;
  isUser: boolean;
  isAdmin: boolean;
  isActive: boolean;
}

// Định nghĩa cấu trúc của AuthContext
interface AuthContextType {
  user: User | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const LOCAL_STORAGE_KEY = 'user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Kiểm tra user trong localStorage khi ứng dụng khởi động
  useEffect(() => {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }
  }, []);

  // Lấy thông tin người dùng từ API khi ứng dụng khởi động
  useEffect(() => {

    const fetchUser = async () => {

      const token = localStorage.getItem("token");

      if (token) {

        try {

          const response = await api.get("/api/v1/user/me");

          setUser(response.data.data);

        } catch (error) {

          console.error("Error fetching user data:", error);

          localStorage.removeItem("token");

        }

      }

    };

    fetchUser();

  }, []);

  // Hàm login: Lưu user và token
  const login = (userData: User, token: string) => {
    setUser(userData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
    localStorage.setItem('token', token);
    console.log("Đã lưu token vào localStorage:", token); // Debug
  };

  // Hàm logout: Xóa user và token
  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};