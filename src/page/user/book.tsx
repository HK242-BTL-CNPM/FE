import Header  from "./component/header";

// Đổi tên component thành FooterNav hoặc tên gì đó mô tả hơn (tùy chọn)
function Book() {
  return (
    <>
      <Header />
      <div
        className="text-black-500"
        style={{
          fontSize: "13px",
          lineHeight: "1",
          fontWeight: "500",
        }}
      >
        Book Room
      </div>
    </>
  );
}

export default Book;
