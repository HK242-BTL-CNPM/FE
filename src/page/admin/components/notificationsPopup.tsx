// src/page/admin/notification/NotificationsPopup.tsx
import React from "react";
import { FaBell } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// --- NotificationItem ---
function NotificationItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4 p-2 hover:bg-gray-50 rounded-md cursor-pointer">
      <div className="bg-orange-100 text-orange-500 p-2 rounded-full mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}

// --- Styled Components ---
const PopupContainer = styled.div`
  position: absolute;
  top: 100%;
  right: -14rem;
  margin-top: 0.5rem;
  min-width: 320px;
  max-width: 32rem; /* max-w-lg */
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border: 1px solid #e5e7eb;
  z-index: 50;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

// (Các styled components khác: PopupTitle, PopupList, NoNotificationsText, SeeMoreButton giữ nguyên)
const PopupTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.75rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
`;

const PopupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 20rem;
  overflow-y: auto;
  margin-bottom: 0.75rem;
`;

const NoNotificationsText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;
  padding: 1rem 0;
`;

const SeeMoreButton = styled.button`
  width: 100%;
  text-align: center;
  background-color: #eff6ff;
  color: #2563eb;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  margin-top: auto;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #dbeafe;
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px #93c5fd;
  }
`;

// --- Component Chính ---
interface NotificationsPopupProps {
  forwardedRef: React.Ref<HTMLDivElement>;
}

const NotificationsPopup: React.FC<NotificationsPopupProps> = ({
  forwardedRef,
}) => {
  const navigate = useNavigate();
  const notifications = [
    {
      id: 1,
      icon: <FaBell size={16} />,
      title: "Quạt không hoạt động",
      description: "Phòng 12 tầng 4",
    },
    {
      id: 2,
      icon: <FaBell size={16} />,
      title: "Đèn sắp hết hạn",
      description: "Phòng 10 tầng 3",
    },
    {
      id: 3,
      icon: <FaBell size={16} />,
      title: "Nhiệt độ cao bất thường",
      description: "Phòng Server",
    },
    {
      id: 4,
      icon: <FaBell size={16} />,
      title: "Quạt không hoạt động",
      description: "Phòng 15 tầng 5",
    },
  ];
  const handleSeeMoreClick = () => {
    navigate("/notification");
  };
  return (
    <PopupContainer ref={forwardedRef}>
      <PopupTitle>Thông báo</PopupTitle>
      <PopupList>
        {notifications.length > 0 ? (
          notifications.map((noti) => (
            <NotificationItem
              key={noti.id}
              icon={noti.icon}
              title={noti.title}
              description={noti.description}
            />
          ))
        ) : (
          <NoNotificationsText>Không có thông báo mới.</NoNotificationsText>
        )}
      </PopupList>
      {notifications.length > 0 && (
        // Thêm onClick handler cho nút
        <SeeMoreButton onClick={handleSeeMoreClick}>Xem thêm</SeeMoreButton>
      )}
    </PopupContainer>
  );
};

export default NotificationsPopup;
