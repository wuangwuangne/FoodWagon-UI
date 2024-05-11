import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";

function SideBarUser({
    data,
    selectedOption,
    setSelectedOption,
    trademark,
    setTrademark,
    size,
    setSize,
    searchPrice,
    setSearchPrice,
}) {
    const startValue = 35;
    const endValue = 45;

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const onChangeTrademark = (event) => {
        const { value, checked } = event.target;
        const updatedTrade = [...trademark];

        if (checked) {
            if (!updatedTrade.includes(value)) {
                updatedTrade.push(value);
            }
        } else {
            const index = updatedTrade.indexOf(value);
            if (index !== -1) {
                updatedTrade.splice(index, 1);
            }
        }

        setTrademark(updatedTrade);
    };

    const onCheckSize = (event) => {
        const { value, checked } = event.target;
        const updatedSize = [...size];

        if (checked) {
            if (!updatedSize.includes(value)) {
                updatedSize.push(value);
            }
        } else {
            const index = updatedSize.indexOf(value);
            if (index !== -1) {
                updatedSize.splice(index, 1);
            }
        }

        setSize(updatedSize);
    };

    const checkboxes = [];
    if (size) {
        for (let i = startValue; i <= endValue; i += 1) {
            checkboxes.push(
                <div key={i} className="pr-10">
                    <input
                        className="input-size mr-1"
                        type="checkbox"
                        value={i}
                        checked={size.includes(i.toString())}
                        onChange={onCheckSize}
                        id={i}
                    />
                    <label htmlFor={i}>{i}</label>
                </div>,
            );
        }
    }

    return (
        <div className="flex px-28 ">
            <div className="w-1/4  border-gray-300 bg-gray-100 h-full ">
                <div className="p-4">
                    <h3 className="font-semibold my-5 text-[30px]">Thương hiệu</h3>
                    <div>
                        <input
                            className="input-size mr-1"
                            type="checkbox"
                            value={"Adidas"}
                            checked={trademark.includes("Adidas")}
                            onChange={onChangeTrademark}
                            id={"Adidas"}
                        />
                        Adidas
                    </div>
                    <div>
                        <input
                            className="input-size mr-1"
                            type="checkbox"
                            value={"Nike"}
                            checked={trademark.includes("Nike")}
                            onChange={onChangeTrademark}
                            id={"Nike"}
                        />
                        Nike
                    </div>
                    <div>
                        <input
                            className="input-size mr-1"
                            type="checkbox"
                            value={"Vans"}
                            checked={trademark.includes("Vans")}
                            onChange={onChangeTrademark}
                            id={"Vans"}
                        />
                        Vans
                    </div>
                    <div>
                        <input
                            className="input-size mr-1"
                            type="checkbox"
                            value={"Jordan"}
                            checked={trademark.includes("Jordan")}
                            onChange={onChangeTrademark}
                            id={"Jordan"}
                        />
                        Jordan
                    </div>
                </div>
                <div className="p-4 border-t border-gray-300 bg-gray-100">
                    <h3 className="font-semibold my-5 text-[30px]">Khoảng giá</h3>
                    <div>
                        <input
                            className="input-price"
                            type="radio"
                            checked={searchPrice === ""}
                            onChange={() => setSearchPrice("")}
                            name="searchPrice"
                        />
                        Tất cả
                    </div>
                    <div>
                        <input
                            className="input-price"
                            type="radio"
                            checked={searchPrice === "0-999999"}
                            onChange={() => setSearchPrice("0-999999")}
                            name="searchPrice"
                        />
                        Dưới 1.000.000đ
                    </div>
                    <div>
                        <input
                            className="input-price"
                            type="radio"
                            checked={searchPrice === "1000000-1999999"}
                            onChange={() => setSearchPrice("1000000-1999999")}
                            name="searchPrice"
                        />
                        1.000.000đ - 2.000.000đ
                    </div>
                    <div>
                        <input
                            className="input-price"
                            type="radio"
                            checked={searchPrice === "2000000-2999999"}
                            onChange={() => setSearchPrice("2000000-2999999")}
                            name="searchPrice"
                        />
                        2.000.000đ - 3.000.000đ
                    </div>
                    <div>
                        <input
                            className="input-price"
                            type="radio"
                            checked={searchPrice === "3000000-4000000"}
                            onChange={() => setSearchPrice("3000000-4000000")}
                            name="searchPrice"
                        />
                        3.000.000đ - 4.000.000đ
                    </div>
                </div>
                {size && (
                    <div className="p-4 border-t border-gray-300 bg-gray-100">
                        <h3 className="font-semibold my-5 text-[30px]">Kích cỡ ( nike, adidas, jordan, vans,...) </h3>
                        <div className="body-size">
                            <div className="flex flex-wrap items-center justify-center ">{checkboxes}</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="w-3/4">
                <div className="border-t border-b border-gray-300 p-4 flex justify-between items-center">
                    <label className="mr-2">Sắp xếp</label>
                    <div className="custom-select">
                        <select className="option" value={selectedOption} onChange={handleChange}>
                            <option value="">Mặc định</option>
                            <option value="price_asc">Giá tăng dần</option>
                            <option value="price_desc">Giá giảm dần</option>
                            <option value="name_asc">Tên: A-Z</option>
                            <option value="name_desc">Tên: Z-A</option>
                            <option value="oldest_first">Cũ nhất</option>
                            <option value="newest_first">Mới nhất</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {data.map((item) => (
                        <ListItem data={item} key={item._id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SideBarUser;
