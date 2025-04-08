

function Profile () {
    return (
      <div>
        <div className="header"></div>

        <div className="sidebar">
          
          <a href="#"> <i className="fa-solid fa-house icon"></i>Trang chủ</a>
          <a href="#" className="active"><i className="fa-solid fa-user icon"></i>Chi tiết người dùng</a>
          <a href="#"><i className="fa-solid fa-right-from-bracket icon"></i>Đăng xuất</a>
        </div>
      
        <div className="content">
          <div className="profile-container">
            <div className="profile-header">
              <div className="avatar"></div>
              <div className="name">Trịnh Thị Mỹ Lệ</div>
              <button className="button2">Tải ảnh mới</button>
            </div>
      
            <div className="info-group">
              <label htmlFor="studentId">Mã số sinh viên</label>
              <div id="studentId" className="frame">22xxxxx</div>
            </div>    
            <div className="info-group">
              <label htmlFor="email">Địa chỉ thư điện tử</label>
              <div id="email" className="frame">cobengokngek@hcmut.edu.vn</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;