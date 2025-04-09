import { Link } from "react-router-dom";
import StudySpaceLogo from "../../../assets/images/StudySpace_logo.png";
import {
  AiOutlineEnvironment,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="flex flex-wrap flex-col w-full pl-20 pt-20">
        <div className="">
          <div className="flex flex-row items-center ">
            <Link to="../home">
              <img
                src={StudySpaceLogo}
                alt="StudySpace Logo"
                className="h-[60px] w-[60px]"
              />
            </Link>

            <div>
              <div className="text-gray-800 text-[16px] leading-[1.5] font-bold">
                STUDYSPACE
              </div>
              <div className="text-gray-500 text-[10px] leading-[1] italic font-medium">
                “Học tập hoàn hảo”
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-row w-full pt-3">
          <div className="basis-2/5 flex-col ">
            <div className="flex flex-row items-center">
              <AiOutlineEnvironment />
              <h2 className="pl-2">
                268 Đ. Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh, Việt Nam
              </h2>
            </div>
            <div className="flex flex-row items-center">
              <AiOutlinePhone />
              <h2 className="pl-2">0987 654 321</h2>
            </div>
            <div className="flex flex-row items-center">
              <AiOutlineMail />
              <h2 className="pl-2">abc@gmail.com </h2>
            </div>
          </div>
          <div className="basis-1/5">
            <div className="flex flex-col space-y-1">
              <h2 className="font-semibold text-base">Về chúng tôi</h2>
              <Link className="text-[#666B72] font-medium pl-1" to="../">
                Trang chủ
              </Link>
              <Link className="text-[#666B72] font-medium pl-1" to="../book">
                Đặt phòng
              </Link>
              <Link className="text-[#666B72] font-medium pl-1" to="../history">
                Lịch sử đặt phòng
              </Link>
              <Link className="text-[#666B72] font-medium pl-1" to="../status">
                Trạng thái phòng
              </Link>
              <Link className="text-[#666B72] font-medium pl-1" to="../report">
                Báo cáo sự cố
              </Link>
            </div>
          </div>
          <div className="basis-1/5">
          <div className="flex flex-col space-y-1">
              <h2 className="font-semibold text-base">Hỗ trợ</h2>
              <Link className="text-[#666B72] font-medium pl-1" to="">
              FAQs
              </Link>
              <Link className="text-[#666B72] font-medium pl-1" to="">
              Chính sách
              </Link>
              </div>
          </div>
          <div className="basis-1/5">
          <div className="flex flex-col space-y-1">
              <h2 className="font-semibold text-base">Theo dõi chúng tôi qua</h2>
              <div className="flex">
              <Link className="" to="../">
              <AiOutlineFacebook size={60}/>
              </Link>
              <Link className="" to="../book">
              <AiOutlineInstagram size={60}/>
              </Link>
              </div>
              
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
