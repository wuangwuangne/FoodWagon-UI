import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "~/config/routes";
import { getHistory, getMyOrder } from "~/services/orderService";
import { Commons } from "~/Common/Commons";

function HistoryOrder() {
    const [data, setData] = useState([]);

    const fetch = useCallback(() => {
        getHistory()
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        fetch();
    }, [fetch]);
    console.log(data);
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
                    <h1 className="text-center text-[40px]">Lịch sử mua hàng</h1>
                    <div className="flex">
                        <div className="w-full">
                            {data.map((item) => (
                                <div key={item._id} className=" border-b">
                                    <p>Ngày mua : {Commons.formatTime(item.createdAt)}</p>
                                    {item.listProduct.map((product) => (
                                        <div className="flex items-center justify-between mx-12 my-4" key={item._id}>
                                            <div className="flex items-center w-2/3">
                                                <img
                                                    className="w-[100px] h-[100px] object-cover"
                                                    src={product.productId.imageUrl}
                                                    alt=""
                                                />
                                                <p className="w-full">{product.productId.name}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="mr-4">
                                                    {Commons.formatPrice(product.productId.price)} VNĐ
                                                </p>
                                                <div className="border-l flex items-center px-2">
                                                    <p className="mx-12 text-[15px]">Số lượng : {product.counts}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default HistoryOrder;
