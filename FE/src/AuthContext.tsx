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

interface User {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  MSSV: string; 
  isUser: boolean;
  isAdmin: boolean;
  isActive: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const LOCAL_STORAGE_KEY = 'user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

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

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
  };

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