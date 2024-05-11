import { Link } from "react-router-dom";

function Transaction() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">Tài khoản</th>
                        <th className="px-6 py-3">Họ và tên</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Số điện thoại</th>
                        <th className="px-6 py-3">Địa chỉ</th>
                        <th className="px-6 py-3">Giời tính</th>
                        <th className="px-6 py-3">Ngày tạo</th>
                        <th className="px-6 py-3">Số khóa</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b hover:bg-gray-100 ">
                        <td className="px-6 py-4 font-medium text-gray-900">czx</td>
                        <td className="px-6 py-4 font-medium text-gray-900">das</td>
                        <td className="px-6 py-4">e</td>
                        <td className="px-6 py-4">123</td>
                        <td className="px-6 py-4">312</td>
                        <td className="px-6 py-4">Nam</td>
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4 text-right">
                            <Link to={``} className="font-medium p-4 text-blue-600 dark:text-blue-500 hover:underline">
                                Sửa
                            </Link>
                        </td>
                        <td>
                            <button className="font-medium p-4 text-red-600 dark:text-red-500 hover:underline">
                                Xóa
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Transaction;
