import { CiLogout } from 'react-icons/ci';
function HomeAdmin() {
    return (
        <div className="py-3">
            <header className="flex justify-end mb-3 ">
                <button className="bg-primary text-white px-2 rounded-xl">Thêm sản phẩm</button>
                <CiLogout className="text-[60px]" />
            </header>
            <div className="border-t flex">
                <div className="w-1/4 h-full border-r">
                    <div className="py-4">Trang chủ</div>
                    <div className="py-4">Sản phẩm</div>
                    <div className="py-4">Người dùng</div>
                    <div className="py-4">Giao dịch</div>
                </div>
                <div className="w-full">
                    <div className="flex justify-end ">
                        <input className="px-10 mr-8 mb-4 mt-4" placeholder="Tìm kiếm theo tên....." />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default HomeAdmin;
