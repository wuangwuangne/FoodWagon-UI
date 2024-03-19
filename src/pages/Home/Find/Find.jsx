import { FaLocationDot } from 'react-icons/fa6';
import { FaMotorcycle } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import React, { useState } from 'react';
function Find() {
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
        <div className=" flex items-center pl-28 pb-[-10px] bg-primary">
            <div className="w-1/2">
                <h1 className="text-[#ffff] font-extrabold leading-none text-7xl mb-[20px]">Are you starving?</h1>
                <h1 className="text-4xl text-[#616161] mb-[20px] ">
                    Within a few clicks, find meals that are accessible near you
                </h1>

                <div className="w-[70%] bg-light px-4 rounded-lg">
                    <div className="flex justify-around border-b border-black border-opacity-10 mb-4 p-[10px] ">
                        <div
                            className={`flex items-center justify-center w-1/2 mx-2 rounded  bg-orange-500  cursor-pointer ${
                                deliveryFormVisible ? 'bg-orange-600 text-white' : ''
                            }`}
                            onClick={toggleDeliveryForm}
                        >
                            <FaMotorcycle />
                            <button>Delivery</button>
                        </div>
                        <div
                            className={`flex items-center justify-center w-1/2 mx-2 rounded  bg-orange-500  cursor-pointer ${
                                pickupFormVisible ? 'text-white bg-orange-600' : ''
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
    );
}

export default Find;
