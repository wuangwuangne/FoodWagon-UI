import { MdLocationOn } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import { IoIosSearch } from 'react-icons/io';

import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const click = () => {
        navigate('login');
    };
    const home = () => {
        navigate('/');
    };
    return (
        <div className=" font-bold ">
            <div className="flex items-center justify-between  py-2 px-4 fixed  right-0 left-0 bg-[#F9FAFD] text-base pb-[17px] z-[1030]">
                <div className=" flex items-center pl-28 cursor-pointer " onClick={home}>
                    <div>
                        <img src="img/logo.png" alt="" />
                    </div>
                    <span className="bg-gradient-to-r from-orange-600 via-orange-600 to-yellow-400 bg-clip-text text-transparent font-bold ml-1 text-[28px] ">
                        foodwaGon
                    </span>
                </div>

                <div className=" flex items-center justify-between ">
                    <p className="text-black font-bold flex pr-[80px]">
                        Deliver to:
                        <MdLocationOn className="left-4 text-primary" />
                        <span className="font-normal">Current Location</span>
                        <span>Mirpur 1 Bus Stand, Dhaka</span>
                    </p>
                    <div className="flex items-center relative text-primary pr-28">
                        <div className="relative flex items-center rounded border-primary ">
                            <input
                                className="  mr-[30px] rounded-lg outline-none py-2 px-10 "
                                placeholder="Search Food"
                            />
                            <button className="absolute inset-y-0 left-0 flex items-center bg-[#FFFEFE] rounded ">
                                <IoIosSearch className="ml-5 font-semibold" />
                            </button>
                        </div>

                        <button
                            onClick={click}
                            className="flex items-center w-3/6 text-primary bg-[#FFFEFE] justify-center py-2 px-10 rounded-lg"
                            type="submit"
                        >
                            <CiUser />
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
