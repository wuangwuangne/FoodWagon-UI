import React, { useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { getAllProduct } from "~/services/productService";

function Slider() {
    const [startIndex, setStartIndex] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllProduct({ page: 1, perPage: 10 })
            .then((products) => setData(products.data))
            .catch((err) => console.log(err));
    }, []);

    const handleNext = () => {
        setStartIndex((prevStartIndex) => (prevStartIndex === data.length - 1 ? 0 : prevStartIndex + 1));
    };

    const handlePrev = () => {
        setStartIndex((prevStartIndex) => (prevStartIndex === 0 ? data.length - 1 : prevStartIndex - 1));
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between", width: "1600px", alignItems: "center" }}>
            {data.length > 5 && (
                <button onClick={handlePrev} className="bg-primary rounded-full text-white font-extrabold text-[32px]">
                    <GrPrevious />
                </button>
            )}
            <div
                style={{
                    display: "flex",
                    overflow: "hidden",
                    width: "94%", // Độ rộng của slider là 600px
                    height: "500px", // Độ cao của slider
                    position: "relative",
                }}
            >
                {data.map((item, i) => (
                    <Link
                        to={`/product/${item._id}`}
                        className="mt-16"
                        key={i}
                        style={{
                            width: "300px", // Độ rộng của mỗi slide
                            position: "absolute",
                            left: `${i * 320}px`, // Tính toán vị trí của mỗi slide
                        }}
                    >
                        <div className="flex flex-col items-center mx-2">
                            {data[startIndex + i] && (
                                <>
                                    <img
                                        className="rounded-md w-[300px] h-[300px] "
                                        src={data[startIndex + i]?.imageUrl}
                                        alt={`Slide ${startIndex + i + 1}`}
                                    />
                                    {/* Hiển thị nội dung tùy chỉnh */}
                                    <button className="bg-orange-500 font-bold rounded-md text-white p-2 pl-24 pr-24 mt-2">
                                        Đặt ngay
                                    </button>
                                </>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
            {data.length > 5 && (
                <button onClick={handleNext} className="bg-primary rounded-full text-white font-bold text-[32px]">
                    <GrNext />
                </button>
            )}
        </div>
    );
}

export default Slider;
