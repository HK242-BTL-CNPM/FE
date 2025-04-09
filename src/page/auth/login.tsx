import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("Hiếu Dương Minh"); //
    navigate("/"); 
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Đăng nhập nhanh
      </button>
    </div>
  );
}

export default LoginPage;
