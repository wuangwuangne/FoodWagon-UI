// import { MdLocationOn } from 'react-icons/md';

import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const click = () => {
        navigate('/login');
    };
    const home = () => {
        navigate('/');
    };

    return (
        <div className=" font-bold ">
            <div className="flex  flex-col  py-2 px-4  fixed  right-0 left-0 bg-[#F9FAFD] text-base pb-[17px] z-[1030]">
                <div className="flex justify-between">
                    <div className=" flex items-center pl-28 cursor-pointer " onClick={home}>
                        <div>
                            <img className="h-10" src="img/Main/LOGO.jpg" alt="" />
                        </div>
                        <span className="bg-gradient-to-r from-black  to-gray-400 bg-clip-text text-transparent font-bold ml-1 text-[24px] ">
                            EZMAN SNEAKER
                        </span>
                    </div>
                    <div className=" flex items-center font-bold text-[18px] w-[40%] justify-between bg-gradient-to-r from-black via-slate-600 to-slate-700 bg-clip-text text-transparent">
                        <Link to={'/shoes'}>SHOES</Link>
                        <Link to={'/sandals'}>SANDALS</Link>
                        <a href="#">ACCESSORY</a>
                        <Link to={'/size'}>SIZE CHART</Link>
                    </div>
                    <div className="flex  items-center  text-primary ">
                        <button
                            onClick={click}
                            className="flex items-center w-[30%] text-primary bg-[#dcdddd] justify-center py-1 px-2 rounded-lg mr-1"
                            type="submit"
                        >
                            <FaUser />
                            Login
                        </button>
                        <button
                            onClick={click}
                            className="flex items-center w-[30%] text-primary bg-[#dcdddd] justify-center py-1 px-2 rounded-lg mr-1"
                            type="submit"
                        >
                            <FaShoppingCart />
                            Giỏ
                        </button>
                        <div className="flex items-center ">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-[80%] bg-[#dcdddd] rounded-3xl pl-2 pr-2"
                            />
                            <button>
                                <IoIosSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
