import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { FaLongArrowAltLeft } from 'react-icons/fa';

function Product() {
    const products = [
        {
            id: 1,
            imgSrc: '/img/Main/Dép/dép1.png',
            name: '[FS] Giày thời trang thể thao nữ X-game BADAO 4.0',
            price: '222.222đ',
        },
        {
            id: 2,
            imgSrc: '/img/Main/Dép/dép2.png',
            name: '[FS] Giày thời trang thể thao nữ X-game BADAO 4.0',
            price: '222.222đ',
        },
        {
            id: 3,
            imgSrc: '/img/Main/Dép/dép3.png',
            name: '[FS] Giày thời trang thể thao nữ X-game BADAO 4.0',
            price: '222.222đ',
        },
        {
            id: 4,
            imgSrc: '/img/Main/Dép/dép4.png',
            name: '[FS] Giày thời trang thể thao nữ X-game BADAO 4.0',
            price: '222.222đ',
        },
        {
            id: 5,
            imgSrc: '/img/Main/Dép/dép5.png',
            name: '[FS] Giày thời trang thể thao nữ X-game BADAO 4.0',
            price: '222.222đ',
        },
    ];
    const increase = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const decrease = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    };
    const [count, setCount] = useState(0);

    const navigate = useNavigate();
    const returnHome = () => {
        navigate('/shoes');
    };

    return (
        <div className="flex flex-col justify-center px-48 ">
            <div className="flex items-center cursor-pointer" onClick={returnHome}>
                <FaLongArrowAltLeft className="text-4xl  text-black" />
            </div>

            <div className="flex justify-center items-center  px-36 pb-14">
                <div className="w-1/2 mr-10">
                    <img src="/img/Main/Giày/adidas1.jpg" alt="" className="w-auto h-[400px] " />
                </div>
                <div className="w-1/2 border-b border-gray-300">
                    <h1 className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
                        [AD1122] ADIDAS SPEED RUN "BLACK"
                    </h1>
                    <h2 className="text-3xl text-red-600">222.222đ</h2>
                    <img src="/img/Main/pay2.png" alt="" />
                    <div className="mt-4">
                        <p>Loại: Giày</p>
                        <p>Trạng thái: Còn hàng</p>
                        <p>Chưa có mô tả cho sản phẩm này</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <h3 className="mr-2">Size</h3>
                        37
                        <input type="checkbox" className="h-8 w-4 ml-1 mr-4" />
                        38
                        <input type="checkbox" className="h-8 w-4 ml-1 mr-4" />
                        39
                        <input type="checkbox" className="h-8 w-4 ml-1 mr-4" />
                        40
                        <input type="checkbox" className="h-8 w-4 ml-1 mr-4" />
                    </div>
                    <div className="flex items-center mt-4 border">
                        <FaMinus className="text-[40px] cursor-pointer hover:text-gray-500" onClick={decrease} />
                        <p className="mx-32 text-[20px]">{count}</p>
                        <IoMdAdd
                            className="text-[40px] font-bold cursor-pointer hover:text-gray-500"
                            onClick={increase}
                        />
                        <button className=" rounded-lg px-8 py-1 bg-black text-white  hover:bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 hover:text-black">
                            THÊM VÀO GIỎ HÀNG
                        </button>
                    </div>
                    <div className="flex mt-4 ">
                        <button className="w-full rounded-lg px-4 py-2 bg-black text-white hover:bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 hover:text-black">
                            MUA NGAY
                        </button>
                    </div>
                    <p className="text-center">
                        Gọi đặt mua / Zalo <i className="font-semibold">033 456 5538</i> (8:00 - 22:00)
                    </p>
                    <img src="/img/Main/pay.png" alt="" />
                </div>
            </div>
            <div className="text-[40px] mb-12">Sản phẩm khác</div>
            <div className="flex ">
                <div className="mr-4">
                    <img className="w-[200px] h-[200px]" src="/img/Main/Dép/dép1.png" alt="" />
                    <p>[FS] Giày thời trang thể thao nữ X-game BADAO 4.0 </p>
                    <p>222.222đ</p>
                </div>
                <div className="mr-4">
                    <img className="w-[200px] h-[200px]" src="/img/Main/Dép/dép2.png" alt="" />
                    <p>[FS] Giày thời trang thể thao nữ X-game BADAO 4.0 </p>
                    <p>222.222đ</p>
                </div>
                <div className="mr-4">
                    <img className="w-[200px] h-[200px]" src="/img/Main/Dép/dép3.png" alt="" />
                    <p>[FS] Giày thời trang thể thao nữ X-game BADAO 4.0 </p>
                    <p>222.222đ</p>
                </div>
                <div className="mr-4">
                    <img className="w-[200px] h-[200px]" src="/img/Main/Dép/dép4.png" alt="" />
                    <p>[FS] Giày thời trang thể thao nữ X-game BADAO 4.0 </p>
                    <p>222.222đ</p>
                </div>
                <div className="h-1/5">
                    <img className="w-[200px] h-[200px]" src="/img/Main/Dép/dép5.png" alt="" />
                    <p>[FS] Giày thời trang thể thao nữ X-game BADAO 4.0 </p>
                    <p>222.222đ</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
