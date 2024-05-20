import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Commons } from "~/Common/Commons";
import Paginate from "~/components/Paginate";
import routes from "~/config/routes";
import { getAllOrder } from "~/services/orderService";
import { deleteProduct, getAllProduct } from "~/services/productService";

function ProductAdmin() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    };

    const deleteUserAdmin = async (id) => {
        const checkHaveOrder = await getAllOrder({ productId: id });
        if (checkHaveOrder.data.length > 0) {
            alert(`Người dùng vẫn còn mặt hàng`);
        } else {
            deleteProduct({ id })
                .then(() => {
                    fetch();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const fetch = useCallback(() => {
        getAllProduct({ page: currentPage, perPage: 10, name: search })
            .then((user) => {
                setData(user.data);
                setTotalPage(user.totalPage);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentPage, search]);

    useEffect(() => {
        fetch();
    }, [fetch]);

    return (
        <div className="w-full px-10">
            <div className="flex justify-end my-4">
                <div className="w-1/3 flex items-center border border-gray-200 rounded-xl overflow-hidden">
                    <input
                        placeholder="Tìm kiếm theo tên"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-4 outline-none py-2"
                    />
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">Tên sản phẩm</th>
                            <th className="px-6 py-3">Loại</th>
                            <th className="px-6 py-3">Giá</th>
                            <th className="px-6 py-3">Giảm giá</th>
                            <th className="px-6 py-3">Thời gian giảm giá</th>
                            <th className="px-6 py-3">Cỡ</th>
                            <th className="px-6 py-3">Ngày tạo</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item._id} className="bg-white border-b hover:bg-gray-100 ">
                                    <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{item.category}</td>
                                    <td className="px-6 py-4">{item.price.toLocaleString("vi-vn")}</td>
                                    <td className="px-6 py-4">{item.discount || "Chưa có giảm giá"}</td>
                                    <td className="px-6 py-4">{`${
                                        item.discountDate ? item.discountDate + "Ngày" : "Chưa có giảm giá"
                                    }`}</td>
                                    <td className="px-6 py-4">{item.size || "Free style"}</td>
                                    <td className="px-6 py-4">{Commons.formatTime(item.createdAt)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() =>
                                                navigate(routes.newProduct, {
                                                    state: {
                                                        dataProduct: item,
                                                        status: "Edit",
                                                    },
                                                })
                                            }
                                            className="font-medium p-4 text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Sửa
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => deleteUserAdmin(item._id)}
                                            className="font-medium p-4 text-red-600 dark:text-red-500 hover:underline"
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="text-center py-4">
                                    Không có dữ liệu
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Paginate totalPage={totalPage} handlePageChange={handlePageChange} currentPage={currentPage} />
        </div>
    );
}

export default ProductAdmin;
