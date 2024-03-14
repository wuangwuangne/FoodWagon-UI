import { FaLocationDot } from 'react-icons/fa6';
import { TbBellRingingFilled } from 'react-icons/tb';
import { FaWallet } from 'react-icons/fa6';
import { MdDonutSmall } from 'react-icons/md';
import Item from '../../Layout/DefaultLayout/Item';
import Sliders from '~/Layout/DefaultLayout/Slider/Slider';
import Catalog from '~/Layout/DefaultLayout/Catalog';
import Featured from '~/Layout/DefaultLayout/Featured';
import BannerDow from '~/Layout/DefaultLayout/Banner-dow';
import Last from '~/Layout/DefaultLayout/Last';
function Home() {
    return (
        <div>
            {/* Item */}
            <Item />
            {/* How does it work */}
            <div className="mt-10 pt-10 flex flex-col items-center bg-gradient-to-b from-orange-50  to-white">
                <h1 className="font-bold text-orange text-[40px] mb-10 text-orange-500">How does it work</h1>
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-col items-center justify-center w-[15%] mr-4 ">
                        <FaLocationDot className="text-[112px] mb-3 text-primary" />
                        <p className="font-bold">Select location</p>
                        <p>Choose the location where your food will be delivered.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] mr-4">
                        <TbBellRingingFilled className="text-[112px] mb-3 text-primary" />
                        <p className="font-bold">Choose order</p>
                        <p>Check over hundreds of menus to pick your favorite food</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] mr-4">
                        <FaWallet className="text-[112px] mb-3 text-primary" />
                        <p className="font-bold">Pay advanced</p>
                        <p>It's quick, safe, and simple. Select several methods of payment</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] mr-4 ">
                        <MdDonutSmall className="text-[112px] mb-3 text-primary" />
                        <p className="font-bold">Enjoy meals</p>
                        <p>Food is made and delivered directly to your home.</p>
                    </div>
                </div>
            </div>
            {/* Slide */}
            <div className="pt-32 flex flex-col items-center ">
                <h1 className="font-bold text-[40px] ">Poplar items</h1>
                <Sliders />
            </div>
            {/* Featured */}
            <Featured />
            {/* Banner-Download */}
            <BannerDow />
            {/* Catalog */}
            <Catalog />
            {/* Last */}
            <Last />
        </div>
    );
}

export default Home;
