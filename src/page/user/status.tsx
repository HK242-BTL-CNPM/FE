import  Header  from "./component/header";
import { Link } from "react-router-dom";
import {rooms,statusColor, roomTypes, roomStatuses } from "./const_status";

function Status() {
  return (
    <>
      <Header />
      <Link to="../">
        <h1 className="text-lg font-semibold pl-20 pt-2 text-[#5D6675] inline-block ">
          {" "}
          &gt; Trang chủ
        </h1>
      </Link>
      <Link to="../status">
        <h1 className="text-lg font-semibold pl-1 pt-2 text-[#5D6675] inline-block ">
          {" "}
          &gt; Trạng thái phòng
        </h1>
      </Link>
      <div style={{
          padding: "16px",
          backgroundColor: "rgb(255, 255, 255)",
          minHeight: "100vh",
          fontFamily: "sans-serif"
      }}>
      <style>{`

        .page-title {
          font-size: 1.5em;
          font-weight: bold;
          color: #2563eb;
          margin-bottom: 16px;
        }
        .room-container {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          padding: 16px;
          margin-left:500px;
          margin-right:50px;
          height: auto;
          padding-left: 80px;

        }
        .room-header, .room-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        .room-header {
         padding-left: 80px;
         padding-top:10px;
          font-size: 1em;
          border-radius: 8px;
          padding-bottom: 8px;
          bottom: 8px;
          background-color: #f4f5f7;
          margin-left:500px;
          margin-right:50px;
          height: 50px;
          text-align: left;
          align-items: center;
        }
        .room-row {
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #eee;
        }
        .room-name {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-label {
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.9em;
          display: inline-block;
        }
        .status-green {
          background-color: #bbf7d0;
          color: #166534;
        }
        .status-purple {
          background-color: #e9d5ff;
          color: #6b21a8;
        }
        .status-yellow {
          background-color: #fef9c3;
          color: #a16207;
        }
        .status-sky {
          background-color: #bae6fd;
          color: #075985;
        }
          .room-filter {
            position: absolute; 
            top: 55%; 
            left: 50px; 
            transform: translateY(-50%); 
            width: 400px;
            padding: 10px;
            border: 1px solid rgb(205, 205, 205);
            border-radius: 8px;
            background-color: white;
          }
          .filter-title {
            font-size: 1.2em;
            font-weight: bold;
            margin: 15px;
            color: #2563eb;
          }
          .filter-item {
            margin-bottom: 10px;
            margin-left: 10px;
            color: #333;
            border: 1px solid rgb(204, 204, 204);
            border-radius: 30px;
            padding: 4px 12px; 
            display: inline-block; 
             cursor: pointer;
          }
      `}</style>

      <h1 style={{fontSize: "1.5em",fontWeight: "bold",color: "#2563eb",marginBottom: "16px"}}>
        Trạng thái phòng
      </h1>

      <div className="room-filter">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <div style={{ fontSize: '1.6em', fontWeight: 'bold', marginLeft:'20px' }}>
      Room Filter
      <i className="fa-solid fa-filter" style={{ marginLeft: "10px" }}></i>
    </div>

    <div style={{ fontSize: "0.9em", color: "#666", cursor: "pointer", marginRight:'10px' }}>
      Xóa tất cả
    </div>
  </div>
          <div className="filter-title">Loại Phòng</div>
          {roomTypes.map((type, index) => (
            <div key={index} className="filter-item">
              {type}
            </div>
          ))}

          <div className="filter-title">Trạng Thái Phòng</div>
          {roomStatuses.map((status, index) => (
            <div key={index} className="filter-item">
              {status}
            </div>
          ))}
        </div>

      <div className="room-header">
          <div>Tên phòng</div>
          <div>Loại phòng
          <i className="fa-solid fa-sort" style={{ marginLeft: "20px" ,color:'#343942'}}></i>

          </div>
          <div>Trạng thái
          <i className="fa-solid fa-sort" style={{ marginLeft: "20px" ,color:'#343942'}}></i>

          </div>
          <div>Thời gian
          <i className="fa-solid fa-sort" style={{ marginLeft: "20px" ,color:'#343942'}}></i>

          </div>
        </div>
      <div className="room-container">
        
        {rooms.map((room) => (
          <div key={room.id} className="room-row">
            <div className="room-name">
              Phòng {room.id}
            </div>
            <div>{room.type}</div>
            <div>
              <span className={`status-label ${statusColor[room.status as keyof typeof statusColor]}`}>
          {room.status}
              </span>
            </div>
            <div>
              <i className="fa-solid fa-clock mr-2" style={{color: '#888', marginRight:'10px'}}></i> {/* Icon thời gian */}
              {room.time}
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
export default Status;


