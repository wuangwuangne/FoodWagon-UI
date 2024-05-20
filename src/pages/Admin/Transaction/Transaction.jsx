import { useCallback, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Commons } from "~/Common/Commons";
import Paginate from "~/components/Paginate";
import routes from "~/config/routes";
import { deleteOrder, getAllOrder } from "~/services/orderService";

function Transaction() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [data, setData] = useState([]);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    };

    const fetch = useCallback(() => {
        getAllOrder({ page: currentPage, perPage: 10 })
            .then((order) => {
                setData(order.data);
                setTotalPage(order.totalPage);
            })
            .catch((error) => console.log(error));
    }, [currentPage]);

    const totalPrice = (arrayPrice) => {
        let total = false;
        arrayPrice.forEach((item) => {
            total += item.counts * item.productId.price;
        });
        return Commons.formatPrice(total);
    };

    const onDelete = async (id) => {
        deleteOrder(id)
            .then(() => {
                fetch();
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetch();
    }, [fetch]);

    return (
        <div className="w-full px-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">Họ và tên</th>
                            <th className="px-6 py-3">Địa chỉ nhận hàng</th>
                            <th className="px-6 py-3">Số điện thoại</th>
                            <th className="px-6 py-3">Chi tiết đơn hàng</th>
                            <th className="px-6 py-3">Tổng tiền</th>
                            <th className="px-6 py-3">Trạng thái</th>
                            <th className="px-6 py-3">Ngày tạo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr className="bg-white border-b hover:bg-gray-100 " key={item._id}>
                                <td className="px-6 py-4 font-medium text-gray-900">{item.userId.fullName}</td>
                                <td className="px-6 py-4">{item.address}</td>
                                <td className="px-6 py-4">{item.phone}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() =>
                                            navigate(routes.detailOrder, { state: { dataDetail: item.listProduct } })
                                        }
                                    >
                                        <FaEye />
                                    </button>
                                </td>
                                <td className="px-6 py-4">{totalPrice(item.listProduct)} VNĐ</td>
                                <td className="px-6 py-4">{!item.status ? "Chưa thanh toán" : "Đã thanh toán"}</td>
                                <td className="px-6 py-4">{Commons.formatTime(item.createdAt)}</td>
                                <td>
                                    <button
                                        onClick={() => onDelete(item._id)}
                                        className="font-medium p-4 text-red-600 dark:text-red-500 hover:underline"
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Paginate totalPage={totalPage} handlePageChange={handlePageChange} currentPage={currentPage} />
        </div>
    );
}

export default Transaction;
