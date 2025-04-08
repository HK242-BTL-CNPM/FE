import { Routes, Route } from "react-router-dom";
import Book from "./page/user/book";
import History from "./page/user/history";
import Home from "./page/user/home/home";
import Login from "./page/auth/login";
import StatusRoom from "./page/user/status";
import ReportIssue from "./page/user/report";
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
      </Routes>
    </>
  );
}

export default App;
