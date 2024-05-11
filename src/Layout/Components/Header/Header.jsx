// import { MdLocationOn } from 'react-icons/md';

import { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosSearch, IoMdPersonAdd } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "~/components/AuthProvider";
import Avatar from "~/components/Avatar";
import routes from "~/config/routes";

function Header() {
    const navigate = useNavigate();
    const { token, logOut, currentUser } = useContext(AuthContext);
    const [search, setSearch] = useState("");

    const MENU_ITEM = [
        {
            title: "Trang cá nhân",
            onclick: () => navigate(""),
        },
        {
            title: "Giỏ hàng",
            onclick: () => navigate(routes.cart),
        },
        {
            title: "Đăng xuất",
            onclick: logOut,
        },
    ];

    const onSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`);
    };

    return (
        <div className=" font-bold ">
            <div className="flex  flex-col  py-2 px-4  fixed  right-0 left-0 bg-[#F9FAFD] text-base pb-[17px] z-[1030]">
                <div className="flex justify-between">
                    <Link className=" flex items-center pl-28 cursor-pointer " to={routes.home}>
                        <div>
                            <img className="h-10" src="img/Main/LOGO.jpg" alt="" />
                        </div>
                        <span className="bg-gradient-to-r from-black  to-gray-400 bg-clip-text text-transparent font-bold ml-1 text-[24px] ">
                            EZMAN SNEAKER
                        </span>
                    </Link>
                    <div className=" flex items-center font-bold text-[18px] w-[40%] justify-between bg-gradient-to-r from-black via-slate-600 to-slate-700 bg-clip-text text-transparent">
                        <Link to={routes.shoes}>SHOES</Link>
                        <Link to={routes.sandals}>SANDALS</Link>
                        <Link to={routes.accessory}>ACCESSORY</Link>
                        <Link to={routes.size}>SIZE CHART</Link>
                    </div>
                    <div className="flex  items-center  text-primary ">
                        <form
                            onSubmit={onSearch}
                            className="flex items-center bg-[#dcdddd] rounded-lg w-full overflow-hidden"
                        >
                            <input
                                type="search"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-3 bg-transparent outline-none"
                            />
                            <button type="submit">
                                <IoIosSearch className="p-2 cursor-pointer hover:bg-gray-100" size={35} />
                            </button>
                        </form>

                        {!token ? (
                            <>
                                <Link
                                    to={routes.login}
                                    className="flex items-center w-[30%] text-primary bg-[#dcdddd] justify-center py-1 px-2 rounded-lg mx-2"
                                >
                                    <FaUser className="mr-2" />
                                    Login
                                </Link>
                                <Link
                                    to={routes.register}
                                    className="flex items-center w-[30%] text-primary bg-[#dcdddd] justify-center py-1 px-2 rounded-lg mx-2"
                                >
                                    <IoMdPersonAdd className="mr-2" />
                                    Register
                                </Link>
                            </>
                        ) : (
                            <div className="flex items-center mx-4 group relative">
                                <div className="h-[50px] w-[50px]">
                                    <Avatar
                                        src={currentUser.imageUrl}
                                        className="h-[50px] w-[50px] rounded-full object-cover cursor-pointer"
                                    />
                                </div>

                                <div className="absolute hidden group-hover:block top-12 right-0 bg-white w-[150px] shadow font-medium">
                                    {MENU_ITEM.map((item) => (
                                        <button
                                            key={item.title}
                                            onClick={item.onclick}
                                            className="flex items-center w-full justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
                                        >
                                            <p>{item.title}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
