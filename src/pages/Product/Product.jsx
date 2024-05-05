import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { FaLongArrowAltLeft } from 'react-icons/fa';

function Product() {
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
        <div className="flex flex-col justify-center px-24 ">
            <div className="flex items-center cursor-pointer" onClick={returnHome}>
                <FaLongArrowAltLeft className="text-4xl  text-black" />
            </div>

            <div className="flex justify-center items-center  px-36 pb-14">
                <div className="w-1/2 mr-10">
                    <img src="/img/Main/Giày/adidas1.jpg" alt="" className="w-[80%] h-[40%]" />
                </div>
                <div className="w-1/2 border-b border-gray-300">
                    <h1 className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
                        [AD1122] ADIDAS SPEED RUN "BLACK"
                    </h1>
                    <h2 className="text-3xl text-red-600">222.222đ</h2>
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
                    <div className="flex items-center mt-4 ">
                        <FaMinus className="text-[40px] cursor-pointer hover:text-gray-500" onClick={decrease} />
                        <p className="mx-32 text-[20px]">{count}</p>
                        <IoMdAdd
                            className="text-[40px] font-bold cursor-pointer hover:text-gray-500"
                            onClick={increase}
                        />
                    </div>
                    <div className="flex mt-4">
                        <button className="rounded-lg px-4 py-2 bg-black text-white mr-4 hover:bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 hover:text-black">
                            Thêm vào giỏ hàng
                        </button>
                        <button className="rounded-lg px-4 py-2 bg-black text-white hover:bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 hover:text-black">
                            Xem cửa hàng còn hàng
                        </button>
                    </div>
                    <p className="mt-4">Mã sản phẩm: 201111063175</p>
                    <p>Chia sẻ:</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
