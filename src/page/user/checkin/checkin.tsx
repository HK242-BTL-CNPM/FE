import Header from "../component/header";
import Footer from "../component/footer";
import { useState } from "react";
import { roomStatusColor, rooms, bookingStatusColor } from "./const_checkin";
import { FaSort } from "react-icons/fa";
import Select from "react-select";
import { QRCodeSVG } from "qrcode.react";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";

const customStyles = {
  placeholder: (provided: any) => ({
    ...provided,
    color: "#1D4ED8",
    fontWeight: 500,
  }),
  menu: (provided: any) => ({
    ...provided,
    zIndex: 9999,
  }),
  control: (provided: any) => ({
    ...provided,
    borderRadius: 8,
    padding: "2px 4px",
  }),
};

type Room = typeof rooms[number];
type RoomKey = keyof Room;

function Checkin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const [sortConfig, setSortConfig] = useState<{ key: RoomKey; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 3;

  const [roomList, setRoomList] = useState(rooms);
  const [checkoutList, setCheckoutList] = useState<Room[]>([]);
  const [qrRoom, setQrRoom] = useState<Room | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageDel, setShowMessageDel] = useState(false);

  const handleSort = (key: RoomKey) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const [selectedCs, setSelectedCs] = useState<string | null>(null);
  const [selectedToa, setSelectedToa] = useState<string | null>(null);

  const filterRooms = () => {
    let filteredRooms = roomList;
    if (selectedToa) {
      filteredRooms = filteredRooms.filter((room) => room.roomNumber.startsWith(selectedToa));
    }
    return filteredRooms;
  };

  const filteredRooms = filterRooms();

  const sortedDevices = [...filteredRooms].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    const valA = a[key];
    const valB = b[key];
    const order = direction === "asc" ? 1 : -1;
    return (valA < valB ? -1 : valA > valB ? 1 : 0) * order;
  });

  const totalPages = Math.ceil(sortedDevices.length / entriesPerPage);
  const paginatedDevices = sortedDevices.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handleDelete = (roomId: number) => {
    const updatedRooms = roomList.filter((room) => room.id !== roomId);
    setRoomList(updatedRooms);
    setShowMessageDel(true);
    setTimeout(() => setShowMessageDel(false), 2000);
  };

  const handleCheckin = (roomId: number) => {
    const roomToCheckin = roomList.find((room) => room.id === roomId);
    if (roomToCheckin) {
      setCheckoutList([...checkoutList, roomToCheckin]);
      setRoomList(roomList.filter((room) => room.id !== roomId));
      setQrRoom(roomToCheckin);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }
  };

  const TableHeader = () => (
    <div className="hidden md:grid grid-cols-7 gap-4 p-4 h-16 text-sm font-semibold bg-[#F8FAFC] rounded-t-lg border border-gray-300 text-gray-600 items-center">
      {["Loại phòng", "Cơ sở", "Tòa", "Số phòng", "Thời gian đặt", "Ngày đặt", "Thao tác"].map(
        (title, i) => (
          <div key={i} className="flex items-center justify-center">
            {title}
          </div>
        )
      )}
    </div>
  );

  const TableRow = ({ room, onCheckin, onDelete, isCheckout = false }: {
    room: Room;
    onCheckin?: (id: number) => void;
    onDelete: (id: number) => void;
    isCheckout?: boolean;
  }) => (
    <div className="grid grid-cols-2 md:grid-cols-7 gap-4 py-4 px-4 border-b last:border-b-0 items-center">
      <div className="text-center">{room.roomType}</div>
      <div className="text-center">{room.cs}</div>
      <div className="text-center">{room.toa}</div>
      <div className="text-center">{room.roomNumber}</div>
      <div className="text-center">{room.time}</div>
      <div className="text-center">{room.date}</div>
      <div className="flex justify-center items-center gap-2 col-span-2 md:col-span-1">
        {!isCheckout && onCheckin && (
          <button
            onClick={() => onCheckin(room.id)}
            className="button3"
            style={{
              padding: "8px 16px",
              height: "40px",
              width: "80px",
              backgroundColor: "rgb(37, 99, 235)",
              color: "white",
            }}
          >
            Checkin
          </button>
        )}
        <button
          onClick={() => onDelete(room.id)}
          className="button3"
          style={{
            padding: "8px 16px",
            height: "40px",
            width: "80px",
            backgroundColor: "#DC2626",
            color: "white",
          }}
        >
          {isCheckout ? "Checkout" : "Xóa"}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 px-4 md:px-8 py-4">
          <section className="max-w-7xl mx-auto">
            <h1 className="text-xl md:text-2xl font-bold mb-4">Checkin</h1>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <TableHeader />
              <div className="px-4 md:px-0">
                {paginatedDevices.length ? (
                  paginatedDevices.map((room) => (
                    <TableRow
                      key={room.id}
                      room={room}
                      onCheckin={handleCheckin}
                      onDelete={handleDelete}
                    />
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">Không có dữ liệu</div>
                )}
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto mt-10">
            <h1 className="text-xl md:text-2xl font-bold mb-4">Checkout</h1>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <TableHeader />
              <div className="px-4 md:px-0">
                {checkoutList.length ? (
                  checkoutList.map((room) => (
                    <TableRow
                      key={room.id}
                      room={room}
                      isCheckout
                      onDelete={(id) => setCheckoutList(checkoutList.filter((r) => r.id !== id))}
                    />
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    Chưa có phòng nào được checkin
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>

      {qrRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-md w-11/12 sm:w-96 text-center">
            <h2 className="text-lg font-semibold mb-4">
              QR Code cho phòng {qrRoom.roomNumber}
            </h2>
            <QRCodeSVG
              className="m-auto"
              value={JSON.stringify({
                id: qrRoom.id,
                roomType: qrRoom.roomType,
                roomNumber: qrRoom.roomNumber,
                date: qrRoom.date,
                time: qrRoom.time,
              })}
              size={200}
            />
            <button
              onClick={() => setQrRoom(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow z-50"
          >
            Đã gửi mã QR code về mail
          </motion.div>
        )}

        {showMessageDel && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow z-50"
          >
            Đã xoá phòng thành công 🗑️
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default Checkin;