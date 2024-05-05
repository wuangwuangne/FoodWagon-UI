import React, { useState } from 'react';
import ListItem from './ListItem';

const CustomSelect = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="custom-select">
            <select className="option" value={selectedOption} onChange={handleChange}>
                <option value="">Mặc định</option>
                <option value="2">Giá tăng dần</option>
                <option value="3">Giá giảm dần</option>
                <option value="4">Tên: A-Z</option>
                <option value="5">Tên: Z-A</option>
                <option value="6">Cũ nhất</option>
                <option value="7">Mới nhất</option>
            </select>
        </div>
    );
};

const startValue = 35;
const endValue = 45;

const checkboxes = [];

for (let i = startValue; i <= endValue; i += 0.5) {
    checkboxes.push(
        <div key={i} className="pr-10">
            <div>
                <input className="input-size " type="checkbox" value={i} />
                {i}
            </div>
        </div>,
    );
}

function Wrap({ data }) {
    return (
        <div className="flex px-28 ">
            <div className="w-1/4 border-r border-gray-300 bg-gray-100">
                <div className="p-4">
                    <h3 className="font-semibold my-5 text-[40px]">Thương hiệu</h3>
                    <div>
                        <input className="input-local" type="checkbox" /> Adidas
                    </div>
                    <div>
                        <input className="input-local" type="checkbox" /> Nike
                    </div>
                    <div>
                        <input className="input-local" type="checkbox" /> Vans
                    </div>
                    <div>
                        <input className="input-local" type="checkbox" /> Jordan
                    </div>
                </div>
                <div className="p-4 border-t border-gray-300 bg-gray-100">
                    <h3 className="font-semibold my-5 text-[40px]">Khoảng giá</h3>
                    <div>
                        <input className="input-price" type="checkbox" /> Dưới 1.000.000đ
                    </div>
                    <div>
                        <input className="input-price" type="checkbox" /> 1.000.000đ - 2.000.000đ
                    </div>
                    <div>
                        <input className="input-price" type="checkbox" /> 2.000.000đ - 3.000.000đ
                    </div>
                    <div>
                        <input className="input-price" type="checkbox" /> 3.000.000đ - 4.000.000đ
                    </div>
                </div>
                <div className="p-4 border-t border-gray-300 bg-gray-100">
                    <h3 className="font-semibold my-5 text-[40px]">Kích cỡ ( nike, adidas, jordan, vans,...) </h3>
                    <div className="body-size">
                        <div className="flex flex-wrap items-center justify-center ">{checkboxes}</div>
                    </div>
                </div>
            </div>
            <div className="w-3/4">
                <div className="border-t border-b border-gray-300 p-4 flex justify-between items-center">
                    <label className="mr-2">Sắp xếp</label>
                    <CustomSelect />
                </div>
                <div className="flex flex-wrap">
                    {data.map((item) => (
                        <ListItem data={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Wrap;
