import { Routes, Route } from "react-router-dom";
import Book from "./page/book";
import History from "./page/history";
import Register from "./page/register";
import Home from "./page/home";
import StatusRoom from "./page/status";
import ReportIssue from "./page/report";
import "./assets/css/output.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<Book />} />
        <Route path="/history" element={<History />} />
        <Route path="/register" element={<Home />} />
        <Route path="/status" element={<StatusRoom />} />
        <Route path="/report" element={<ReportIssue />} />
      </Routes>
    </>
  );
}

export default App;
