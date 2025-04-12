import Sidebar from "../components/sidebar";
import Header_admin from "../components/header_admin";

function   Device() {
    return (
        <>
        <div className="flex bg-bg_admin">
          <div><Sidebar /></div>
          <div className="flex-1">
            <div>
              <Header_admin />
              device page
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Device;