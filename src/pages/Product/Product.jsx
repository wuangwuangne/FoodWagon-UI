import { useContext, useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus, FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

import routes from "~/config/routes";
import { getAllProduct, getProductById } from "~/services/productService";
import { Commons } from "~/Common/Commons";
import { buyNow, newOrder } from "~/services/orderService";
import { createUrlVnPay } from "~/services/paymentService";
import { AuthContext } from "~/components/AuthProvider";

function Product() {
    const { id } = useParams();
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [moreProducts, setMoreProducts] = useState([]);
    const [data, setData] = useState({});
    const [checkOut, setCheckOut] = useState({ productId: id, count: 1, size: "" });

    const increase = () => {
        setCheckOut((prevState) => ({ ...prevState, count: prevState.count + 1 }));
    };

    const decrease = () => {
        if (checkOut.count > 1) {
            setCheckOut((prevState) => ({ ...prevState, count: prevState.count - 1 }));
        }
    };

    const onAddCheckOut = () => {
        if (token) {
            newOrder(checkOut)
                .then((order) => {
                    alert("Đã thêm giỏ hàng");
                    console.log(order);
                })
                .catch((err) => console.log(err));
        } else {
            navigate(routes.login);
        }
    };

    const onBuyNow = () => {
        if (token) {
            buyNow(checkOut)
                .then((order) => {
                    const dataPayment = {
                        amount: data.price,
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

    useEffect(() => {
        window.scrollTo(0, 0);
        getAllProduct({ page: 1, perPage: 5 })
            .then((products) => setMoreProducts(products.data))
            .catch((error) => console.log(error));

        getProductById({ id })
            .then((product) => {
                setData(product.data);
                setCheckOut((prevState) => ({
                    ...prevState,
                    size: product.data.size.split(",")[0],
                }));
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <div className="flex flex-col justify-center px-48 ">
            <Link to={routes.shoes} className="flex items-center cursor-pointer">
                <FaLongArrowAltLeft className="text-4xl text-black" />
            </Link>

            <div className="flex justify-center items-center px-36 pb-14">
                <div className="w-1/2 mr-10">
                    <img src={data.imageUrl} alt="" className="w-auto h-[500px]" />
                </div>
                <div className="w-1/2 border-b border-gray-300">
                    <h1 className="text-[50px] bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text w-[140%]">
                        -{data.name}-
                    </h1>
                    <h2 className="text-4xl text-red-600">{Commons.formatPrice(data.price)}đ</h2>
                    <img src="/img/Main/pay2.png" alt="" />
                    <div className="mt-4">
                        <p className="text-red-600">Loại: {data.category}</p>
                        <p className="text-red-600">Mô tả :</p>
                        <p className="text-red-600">{data.description || "Chưa có mô tả cho sản phẩm này"}</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <h3 className="mr-2">Size</h3>
                        {data.size?.split(",").map((item) => (
                            <div className="flex justify-center items-center" key={item}>
                                <input
                                    type="radio"
                                    name="size"
                                    checked={checkOut.size === item}
                                    value={item}
                                    onChange={(e) => setCheckOut({ ...checkOut, size: e.target.value })}
                                    className="h-4 w-4 mr-1 ml-4"
                                />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between px-4 py-2 items-center mt-4 border w-1/2">
                        <FaMinus className="text-[40px] cursor-pointer hover:text-gray-500" onClick={decrease} />
                        <p className="text-[20px]">{checkOut.count}</p>
                        <IoMdAdd
                            className="text-[40px] font-bold cursor-pointer hover:text-gray-500"
                            onClick={increase}
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <button
                            onClick={onAddCheckOut}
                            className="w-full mb-4 rounded-lg px-4 py-2 border hover:bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 hover:text-black"
                        >
                            Thêm giỏ hàng
                        </button>
                        <button
                            onClick={onBuyNow}
                            className="w-full rounded-lg px-4 py-2 bg-black text-white hover:bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 hover:text-black"
                        >
                            Mua ngay
                        </button>
                    </div>
                    <p className="text-center">
                        Gọi đặt mua / Zalo <i className="font-semibold">033 456 5538</i> (8:00 - 22:00)
                    </p>
                    <img src="/img/Main/pay.png" alt="" />
                </div>
            </div>
            <div className="text-[40px] mb-12">Sản phẩm khác</div>
            <div className="flex justify-center">
                {moreProducts.map((item) => (
                    <Link to={`/product/${item._id}`} key={item._id} className="mr-4 w-[350px]">
                        <img className="w-[350px] h-[350px]" src={item.imageUrl} alt="" />
                        <p>{item.name}</p>
                        <p>{Commons.formatPrice(item.price) || 0}đ</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Product;
