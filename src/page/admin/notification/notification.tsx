import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar"; // Điều chỉnh đường dẫn nếu cần
import Header_admin from "../components/header_admin"; // Điều chỉnh đường dẫn nếu cần
import styles from "./notification.module.css"; // Tạo file CSS Module riêng cho trang này

// --- Component cho một dòng thông báo chi tiết ---
interface NotificationRowProps {
  avatarUrl?: string; // Avatar người gửi (tùy chọn)
  senderName: string;
  location: string;
  message: string;
  timestamp: string; // Ví dụ: "21/02/2025"
  isNew?: boolean; // Đánh dấu thông báo mới (tùy chọn)
}

function NotificationRow({
  avatarUrl,
  senderName,
  location,
  message,
  timestamp,
  isNew,
}: NotificationRowProps) {
  return (
    <div className={`${styles.notificationRow} ${isNew ? styles.new : ""}`}>
      <div className={styles.senderInfo}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={senderName} className={styles.avatar} />
        ) : (
          // Placeholder nếu không có avatar
          <div className={styles.avatarPlaceholder}>
            {/* Lấy chữ cái đầu, ví dụ */}
            {senderName.substring(0, 1).toUpperCase()}
          </div>
        )}
        <div className={styles.senderDetails}>
          <span className={styles.senderName}>{senderName}</span>
          <span className={styles.location}>{location}</span>
        </div>
      </div>
      <div className={styles.message}>{message}</div>
      <div className={styles.timestamp}>{timestamp}</div>
      {/* Có thể thêm nút hành động (đánh dấu đã đọc, xóa, ...) */}
    </div>
  );
}

// --- Component Trang Notification ---
function NotificationPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState<NotificationRowProps[]>(
    []
  ); // State chứa danh sách thông báo
  const [isLoading, setIsLoading] = useState(false); // State loading

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // --- Fetch dữ liệu thông báo ---
  useEffect(() => {
    const fetchNotifications = async () => {
      setIsLoading(true);
      // --- TODO: Thay thế bằng logic gọi API thực tế ---
      // Ví dụ gọi API để lấy tất cả thông báo (cũ và mới)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Giả lập độ trễ mạng
      const fetchedNotifications: NotificationRowProps[] = [
        // Dữ liệu mẫu chi tiết hơn
        {
          senderName: "Trịnh Thị Mỹ Lệ",
          location: "Phòng 12 tầng 4",
          message: "Quạt không hoạt động",
          timestamp: "21/02/2025",
          isNew: true,
        },
        {
          senderName: "Hệ thống",
          location: "Phòng 10 tầng 3",
          message: "Đèn sắp hết hạn",
          timestamp: "20/02/2025",
        },
        {
          senderName: "Cảm biến",
          location: "Phòng Server",
          message: "Nhiệt độ cao bất thường",
          timestamp: "20/02/2025",
        },
        {
          senderName: "Trịnh Thị Mỹ Lệ",
          location: "Phòng 15 tầng 5",
          message: "Quạt không hoạt động",
          timestamp: "19/02/2025",
        },
        {
          senderName: "Trịnh Thị Mỹ Lệ",
          location: "Phòng 12 tầng 4",
          message: "Quạt không hoạt động",
          timestamp: "18/02/2025",
        },
        {
          senderName: "Trịnh Thị Mỹ Lệ",
          location: "Phòng 12 tầng 4",
          message: "Quạt không hoạt động",
          timestamp: "17/02/2025",
        },
        // ... thêm nhiều thông báo cũ hơn
      ];
      setNotifications(fetchedNotifications);
      // --- Kết thúc phần TODO ---
      setIsLoading(false);
    };

    fetchNotifications();
  }, []); // Chạy 1 lần khi component mount

  return (
    <div className={styles.notificationPageLayout}>
      {/* Sidebar */}
      <div
        className={styles.sidebarContainer}
        style={{ width: isSidebarOpen ? "16rem" : "0" }}
      >
        {isSidebarOpen && <Sidebar />}
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Header (Không cần truyền onBellClick) */}
        <Header_admin onToggleSidebar={handleToggleSidebar} />

        {/* Khu vực nội dung chính của trang */}
        <div className={styles.contentArea}>
          <h1 className={styles.pageTitle}>Notifications</h1>

          {/* Phần Lọc/Sắp xếp (Tùy chọn) */}
          {/* <div className={styles.filters}>
            <button>Tất cả</button>
            <button>Chưa đọc</button>
            <select>
              <option>Mới nhất</option>
              <option>Cũ nhất</option>
            </select>
          </div> */}

          {/* Danh sách thông báo */}
          <div className={styles.notificationListContainer}>
            {isLoading ? (
              <p>Loading notifications...</p>
            ) : notifications.length > 0 ? (
              notifications.map((noti, index) => (
                <NotificationRow key={index} {...noti} /> // Truyền props vào NotificationRow
              ))
            ) : (
              <p>Không có thông báo nào.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;
