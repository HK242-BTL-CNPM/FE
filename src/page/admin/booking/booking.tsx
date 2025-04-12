import Sidebar from "../components/sidebar";
import Header_admin from "../components/header_admin";

function   Booking() {
  return (
    <>
    <div className="flex bg-bg_admin">
        <div><Sidebar /></div>
        <div className="flex-1">
          <div>
            <Header_admin />
            <h1>booking page</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;