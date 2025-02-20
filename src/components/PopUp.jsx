import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import popup from "../assets/images/popup.png";
import { Button } from "./Button";

const EmailPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-brightness-50 min-h-screen flex justify-center items-center z-50">
      <div className="bg-white p-10 max-w-2xl w-full h-auto relative -top-20">
        <IoMdClose className="absolute -top-8 w-8 h-auto -right-8 text-white cursor-pointer hover:text-black" onClick={() => setIsOpen(false)} />
        <div className="grid grid-cols-6 items-center">
          <div className="col-span-2 -mb-10 -ml-10 -mt-4">
              <img src={popup} alt="Wine house" className="w-100 h-auto"/>
          </div>
          <div className="col-span-4 text-center">
            <h2 className="text-4xl text-black font-medium mb-3">Gửi Email</h2>
            <p className="text-gray-500 text-sm mb-4">
              Đăng ký Email ngay hôm nay để nhận được thông tin về các sự kiện,
              các chương trình giảm giá của chúng tôi sớm nhất!
            </p>
            <div className="flex items-center justify-center mb-4">
                <input
                  type="email"
                  placeholder="Email của bạn..."
                  className=" text-gray-500 text-sm w-full border border-gray-200 px-4 py-2 w-1/2 focus:border-black outline-none"
                />
                <Button size="lg" className="bg-yellow-500 hover:bg-black px-5" onClick={() => setIsOpen(false)}>GỬI EMAIL</Button>
              </div>
            <div className="flex items-center justify-center mt-3">
              <input type="checkbox" id="dont-show" className="mr-2 cursor-pointer" />
              <label htmlFor="dont-show" className="text-gray-500 text-sm">
                Không hiển thị lại thông báo này
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;
