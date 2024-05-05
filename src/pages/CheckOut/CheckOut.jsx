import { FaXmark } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa';

const VALUE = [
    {
        id: 1,
        img: '/img/Main/Giày/adidas1.jpg',
        name: 'Giày chạy thể thao nữ Basic-stable ANTA 822335576-3',
        price: 1000000,
    },
    {
        id: 2,
        img: '/img/Main/Giày/adidas1.jpg',
        name: 'Giày chạy thể thao nữ Basic-stable ANTA 822335576-3',
        price: 1000000,
    },
    {
        id: 3,
        img: '/img/Main/Giày/adidas1.jpg',
        name: 'Giày chạy thể thao nữ Basic-stable ANTA 822335576-3',
        price: 1000000,
    },
];

function CheckOut() {
    const [counts, setCounts] = useState({});
    const [data, setData] = useState(VALUE);

    const increase = (id) => {
        setCounts((prevCounts) => {
            return {
                ...prevCounts,
                productId: id,
                [id]: (prevCounts[id] || 0) + 1,
            };
        });
    };

    const decrease = (id) => {
        setCounts((prevCounts) => {
            const newCount = (prevCounts[id] || 0) - 1;
            return {
                ...prevCounts,
                productId: id,
                [id]: Math.max(newCount, 0), // Ensure count doesn't go below 0
            };
        });
    };

    console.log(counts);

    return (
        <div className="px-48 py-12">
            <h1 className="text-center text-[40px]">Giỏ hàng</h1>
            <div className="flex">
                <div className="w-3/4">
                    {data.map((item) => (
                        <div className="flex items-center justify-between mr-12" key={item.id}>
                            <div className="flex items-center">
                                <FaXmark /> <img className="w-[20%] h-[60px]" src={item.img} alt="" />
                                <p className="w-full">{item.name}</p>
                            </div>
                            <div className="flex items-center">
                                <p className="mr-4">{item.price.toLocaleString('vi-vn')} VNĐ</p>
                                <div className="border flex items-center">
                                    <FaMinus
                                        className="text-[10px] cursor-pointer hover:text-gray-500"
                                        onClick={() => decrease(item.id)}
                                    />
                                    <p className="mx-12 text-[15px]">{counts[item.id] || 0}</p>
                                    <IoMdAdd
                                        className="text-[15px] font-bold cursor-pointer hover:text-gray-500"
                                        onClick={() => increase(item.id)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-100 w-[30%]">
                    <div className="flex justify-between mx-4 my-8">
                        <p className="font-bold">TỔNG CỘNG:</p>
                        <div>
                            {/* Calculate total price based on counts */}
                            {Object.values(counts)
                                .reduce((acc, curr) => acc + curr, 0)
                                .toLocaleString('vi-vn')}{' '}
                            VNĐ
                            <p>(Đã bao gồm VAT nếu có)</p>
                        </div>
                    </div>
                    <button className="bg-primary text-white px-4 w-full mb-28 mt-7">THANH TOÁN</button>
                    <img src="/img/Main/pay3.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
