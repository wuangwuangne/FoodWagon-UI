import { Link, useLocation } from "react-router-dom";
import routes from "~/config/routes";

function SideBarAdmin() {
    const location = useLocation();

    const SIDEBAR_ITEM = [
        { title: "Trang chủ", link: routes.dashboard },
        { title: "Sản phẩm", link: routes.productAd },
        { title: "Người dùng", link: routes.user },
        { title: "Giao dịch", link: routes.transaction },
    ];

    return (
        <div className="w-1/6 flex flex-col h-full border-r">
            {SIDEBAR_ITEM.map((item) => (
                <Link
                    to={item.link}
                    className={`py-4 px-4 w-full hover:bg-gray-50 ${location.pathname === item.link && "bg-gray-100"}`}
                    key={item.title}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
}

export default SideBarAdmin;
