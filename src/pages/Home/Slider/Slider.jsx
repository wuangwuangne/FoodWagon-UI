import React, { useContext, useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "~/components/AuthProvider";
import routes from "~/config/routes";
import { buyNow } from "~/services/orderService";
import { createUrlVnPay } from "~/services/paymentService";
import { getAllProduct } from "~/services/productService";

function Slider() {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
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

    const onBuyNow = (dataProduct) => {
        if (token) {
            const checkOut = {
                count: 1,
                productId: dataProduct._id,
                size: dataProduct.size.split(",")[0],
            };
            buyNow(checkOut)
                .then((order) => {
                    const dataPayment = {
                        amount: dataProduct.price,
                        language: "vn",
                        orderId: `buyNow-${order._id}`,
                        bankCode: "",
                    };
                    createUrlVnPay({ data: dataPayment })
                        .then((response) => {
                            if (response.status === 200) {
                                window.location.href = response.data;
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((err) => console.log(err));
        } else {
            navigate(routes.login);
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between", width: "1600px", alignItems: "center" }}>
            {data.length > 4 && (
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
                    <div
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
                                    <Link to={`/product/${item._id}`}>
                                        <img
                                            className="rounded-md w-[300px] h-[300px] "
                                            src={data[startIndex + i]?.imageUrl}
                                            alt={`Slide ${startIndex + i + 1}`}
                                        />
                                    </Link>
                                    {/* Hiển thị nội dung tùy chỉnh */}
                                    <button
                                        onClick={() => onBuyNow(item)}
                                        className="bg-orange-500 font-bold rounded-md text-white p-2 pl-24 pr-24 mt-2"
                                    >
                                        Đặt ngay
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {data.length > 4 && (
                <button onClick={handleNext} className="bg-primary rounded-full text-white font-bold text-[32px]">
                    <GrNext />
                </button>
            )}
        </div>
    );
}

export default Slider;
