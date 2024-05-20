import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routes from "~/config/routes";
import { cancelOne, getMyOrder } from "~/services/orderService";
import { FaXmark } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { Commons } from "~/Common/Commons";
import { createUrlVnPay } from "~/services/paymentService";


function Cart() {
    // const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderId, setOrderId] = useState("");
    const [dataInfo,setDataInfo] = useState({
        address:"",
        phone:""
    })

    const increase = (id) => {
        const updatedData = data.map((item) => {
            if (item._id === id) {
                return { ...item, counts: item.counts + 1 };
            }
            return item;
        });
        setData(updatedData);
    };

    const decrease = (id) => {
        const updatedData = data.map((item) => {
            if (item._id === id && item.counts > 1) {
                return { ...item, counts: item.counts - 1 };
            }
            return item;
        });
        setData(updatedData);
    };

const onChange =(e) => {
    const newData = {...dataInfo}
    newData[e.target.name] = e.target.value
    setDataInfo(newData)
}

    const fetch = useCallback(() => {
        getMyOrder()
            .then((res) => {
                if (res.data) {
                    setData(res.data.listProduct);
                    setOrderId(res.data._id);
                } else {
                    setData([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const cancelOneProduct = (id) => {
        cancelOne(id)
            .then((cancel) => {
                fetch();
            })
            .catch((error) => console.log(error));
    };

    const onBuy = (e) => {
        e.preventDefault()
        const dataPayment = {
            amount: totalPrice,
            language: "vn",
            orderId: orderId + "-" + dataInfo.address + "-" + dataInfo.phone, 
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
    };

    useEffect(() => {
        fetch();
    }, [fetch]);

    useEffect(() => {
        let total = 0;
        data.forEach((item) => {
            total += item.counts * item.productId.price;
        });
        setTotalPrice(total);
    }, [data]);

    return (
        <div className="px-48 py-12">
            {data.length === 0 ? (
                <>
                    <h1 className="text-3xl">Giỏ hàng</h1>
                    <div className="flex flex-col items-center mt-8">
                        <img src="img/Main/cart1.png" alt="" />
                        <p className="py-2">Không có sản phẩm nào trong giỏ hàng của bạn</p>
                        <Link to={routes.home} className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">
                            TIẾP TỤC MUA HÀNG
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="text-center text-[40px]">Giỏ hàng</h1>
                    <div className="flex">
                        <div className="w-3/4">
                            {data.map((item) => (
                                <div className="flex items-center justify-between mr-12 my-4" key={item._id}>
                                    <div className="flex items-center w-2/3">
                                        <button onClick={() => cancelOneProduct(item._id)}>
                                            <FaXmark className="mr-2" />
                                        </button>
                                        <img
                                            className="w-[100px] h-[100px] object-cover"
                                            src={item.productId.imageUrl}
                                            alt=""
                                        />
                                        <p className="w-full">{item.productId.name}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="mr-4">{Commons.formatPrice(item.productId.price)} VNĐ</p>
                                        <div className="border flex items-center px-2">
                                            <FaMinus
                                                className="text-[10px] cursor-pointer hover:text-gray-500"
                                                onClick={() => decrease(item._id)}
                                            />
                                            <p className="mx-12 text-[15px]">{item.counts || 1}</p>
                                            <IoMdAdd
                                                className="text-[15px] font-bold cursor-pointer hover:text-gray-500"
                                                onClick={() => increase(item._id)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={onBuy} className="bg-gray-100 w-[30%]">
                           <div className="flex flex-col">
                            <h1 className="text-center font-semibold">ĐỊA CHỈ GIAO HÀNG</h1>
                            <input className="" onChange={onChange} required value={dataInfo.address} name="address" type="text" placeholder="Nhập thông tin địa chỉ nhận hàng"/>
                            <input className="" onChange={onChange} required value={dataInfo.phone} name="phone" type="text" placeholder="Số điện thoại nhận hàng" />
                            <hr />
                           </div>
                            <div className="flex justify-between mx-4 my-8">
                                <p className="font-bold">TỔNG CỘNG:</p>
                                <div>
                                    {/* Calculate total price based on counts */}
                                    {Commons.formatPrice(totalPrice)} VNĐ
                                    <p>(Đã bao gồm VAT nếu có)</p>
                                </div>
                            </div>
                            <button type="submit" className="bg-primary text-white px-4 w-full mb-28 mt-7">
                                THANH TOÁN
                            </button>
                            <img src="/img/Main/pay3.png" alt="" />
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
