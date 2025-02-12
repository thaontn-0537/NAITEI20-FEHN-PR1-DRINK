import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="border-b border-gray-200 bg-white text-gray-400">
        <div className="container mx-auto flex items-center justify-between px-80">
          <nav>
            <ul className="flex space-x-2 text-xs">
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Tài khoản của tôi
                </a>
              </li>
              <li className="text-gray-400">-</li>
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Trạng thái đơn hàng
                </a>
              </li>
              <li className="text-gray-400">-</li>
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Danh sách ưa thích
                </a>
              </li>
              <li className="text-gray-400">-</li>
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Giỏ hàng
                </a>
              </li>
              <li className="text-gray-400">-</li>
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Đăng nhập
                </a>
              </li>
              <li className="text-gray-400">-</li>
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Đăng ký
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm ở đây..."
              className="rounded-l border-none px-2 py-2 text-xs italic focus:outline-none"
            />
            <button className="rounded-r px-4 py-1 text-gray-400">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black py-4 text-white">
        <div className="container mx-auto flex items-center justify-between px-80">
          <div className="flex flex-col items-center justify-center text-2xl font-bold text-yellow-500">
            <span className="block">WINE</span>
            <span className="block">HOUSE</span>
          </div>

          <nav>
            <ul className="flex h-full space-x-10 text-xs">
              <li className="hover:text-yellow-500">
                <a href="#" className="tracking-wider uppercase">
                  Trang chủ
                </a>
              </li>
              <li className="hover:text-yellow-500">
                <a href="#" className="tracking-wider uppercase">
                  Rượu vang đỏ
                </a>
              </li>
              <li className="hover:text-yellow-500">
                <a href="#" className="tracking-wider uppercase">
                  Rượu trắng
                </a>
              </li>
              <li className="hover:text-yellow-500">
                <a href="#" className="tracking-wider uppercase">
                  Champagne
                </a>
              </li>
              <li className="hover:text-yellow-500">
                <a href="#" className="tracking-wider uppercase">
                  Thông tin
                </a>
              </li>
              <li className="hover:text-yellow-500">
                <a href="#" className="tracking-wider uppercase">
                  Blog
                </a>
              </li>
              <li className="hover:text-yellow-500">
                <a href="#" className="tracking-wider uppercase">
                  Liên hệ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
