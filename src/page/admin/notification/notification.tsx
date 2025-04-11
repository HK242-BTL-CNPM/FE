import Sidebar from "../components/sidebar";
import Header_admin from "../components/header_admin";

function   Notification() {
    return (
        <>
        <div className="flex bg-bg_admin">
          <div><Sidebar /></div>
          <div className="flex-1">
            <div>
              <Header_admin />
              noti page
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Notification;