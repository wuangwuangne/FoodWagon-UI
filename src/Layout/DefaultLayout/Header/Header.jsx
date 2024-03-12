import { MdLocationOn } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import { IoIosSearch } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { FaMotorcycle } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { useState } from 'react';

function Header() {
    const [deliveryFormVisible, setDeliveryFormVisible] = useState(false);
    const [pickupFormVisible, setPickupFormVisible] = useState(false);

    const toggleDeliveryForm = () => {
        setDeliveryFormVisible(!deliveryFormVisible);
        setPickupFormVisible(false);
    };

    const togglePickupForm = () => {
        setPickupFormVisible(!pickupFormVisible);
        setDeliveryFormVisible(false);
    };

    return (
        <div className=" bg-primary font-bold">
            <div className="flex items-center justify-between  py-2 px-4 fixed top-0 right-0 left-0 bg-[#F9FAFD] text-base pb-[17px] z-[1030]">
                <div className=" flex items-center pl-28 ">
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
                            className="flex items-center w-3/6 text-primary bg-[#FFFEFE] justify-center py-2 px-10"
                            type="submit"
                        >
                            <CiUser />
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <div className=" flex items-center  ml-[180px]">
                <div className="w-1/2">
                    <h1 className="text-[#ffff] font-extrabold leading-none text-7xl mb-[20px]">Are you starving?</h1>
                    <h1 className="text-4xl text-[#616161] mb-[20px] ">
                        Within a few clicks, find meals that are accessible near you
                    </h1>

                    <div className="w-[70%] bg-light px-4 rounded-lg">
                        <div className="flex justify-around border-b border-black border-opacity-10 mb-4 p-[10px] ">
                            <div
                                className={`flex items-center justify-center w-1/2 mx-2 rounded  bg-orange-500 bg-opacity-15 cursor-pointer ${
                                    deliveryFormVisible ? 'bg-opacity-100' : ''
                                }`}
                                onClick={toggleDeliveryForm}
                            >
                                <FaMotorcycle />
                                <button>Delivery</button>
                            </div>
                            <div
                                className={`flex items-center justify-center w-1/2 mx-2 rounded  bg-[#F17228] bg-opacity-15 cursor-pointer ${
                                    pickupFormVisible ? 'bg-opacity-100' : ''
                                }`}
                                onClick={togglePickupForm}
                            >
                                <GiShoppingBag />
                                <button>Pickup</button>
                            </div>
                        </div>
                        {(deliveryFormVisible || pickupFormVisible) && (
                            <div className="p-[10px]">
                                <form className="flex items-center">
                                    <div className="w-[90%]">
                                        <div className="relative">
                                            <FaLocationDot className="absolute h-5 w-5 top-1/2 transform -translate-y-1/2 text-[#F17228] left-3" />
                                            <label className="sr-only">Address</label>
                                            <input
                                                className="block w-full px-10 py-3 rounded-lg focus:outline-none focus:border-[#F17228] "
                                                type="text"
                                                placeholder="Enter Your Address"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[30%]">
                                        <button className="px-3 py-3 rounded-lg bg-[#F17228] text-[#ffff]">
                                            Find Food
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative w-1/2">
                    <img
                        className="transition-transform duration-300 transform hover:-translate-y-4 cursor-pointer pt-[170px] "
                        src="img/food.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
