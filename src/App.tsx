import { Routes, Route } from "react-router-dom";
import Book from "./page/user/book/book";
import History from "./page/user/history/history";
import Home from "./page/user/home/home";
import Login from "./page/auth/login";
<<<<<<< HEAD
import StatusRoom from "./page/user/status";
import ReportIssue from "./page/user/report";
import Profile from "./page/user/profile";

=======
import StatusRoom from "./page/user/status/status";
import ReportIssue from "./page/user/report/report";
>>>>>>> 6db61dfdbef30e574ea942138666365156581f2d
import "./assets/css/output.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/status" element={<StatusRoom />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
