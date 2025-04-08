import BannerImg from "../../../assets/images/Banner_Home.png";
import { IoIosSearch } from "react-icons/io";

function Banner() {
  return (
    <>
      <div className="relative aspect-[16/9] w-full">
        <img src={BannerImg} className="object-cover" />

        <div className="absolute bottom-4 left-0 top-1/2 w-full px-4">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-4">
            <div className="md:basis-1/2 w-full">
              <button className="button1 w-full md:w-auto">
                Đặt phòng ngay!
              </button>
            </div>
            <div className="flex flex-row md:basis-1/2 w-full">
              <form className="w-full">
                <input
                  type="text"
                  placeholder="Tìm kiếm phòng học"
                  className="w-full p-2 border rounded"
                />
              </form>

              <div className="absolute left-[90%] justify-center">
                <IoIosSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
