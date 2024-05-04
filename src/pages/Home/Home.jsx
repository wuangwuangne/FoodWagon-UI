import { FaLocationDot } from 'react-icons/fa6';
import { TbBellRingingFilled } from 'react-icons/tb';
import { FaWallet } from 'react-icons/fa6';
import { MdDonutSmall } from 'react-icons/md';
import Item from './Item';
import Sliders from '~/pages/Home/Slider/Slider';
import Catalog from '~/pages/Home/Catalog';
import Featured from '~/pages/Home/Featured';
import BannerDow from '~/pages/Home/Banner-dow';
import Last from '~/pages/Home/Last';
import Find from './Find';
function Home() {
    return (
        <div>
            {/* Find */}
            <Find />
            {/* Slide */}
            <div className="pt-32 flex flex-col items-center ">
                <h1 className="font-bold text-[40px] ">Poplar items</h1>
                <Sliders />
            </div>
            {/* Item */}
            <h1 className=" text-center my-[40px] text-[40px] font-bold">Sản phẩm khuyến mãi</h1>
            <Item />
            {/* How does it work */}
            <div className="mt-10 pt-10 flex flex-col items-center bg-gradient-to-b from-gray-100  to-white">
                <h1 className="font-bold text-orange text-[40px] mb-10 text-primary">
                    Thao tác đặt hàng dễ dàng cùng EZ MAN SNEAKER
                </h1>
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-col items-center justify-center w-[15%] mr-4 ">
                        <FaLocationDot className="text-[112px] mb-3 text-primary" />
                        <p className="font-bold">Xem sản phẩm </p>
                        <p>Chúng tôi luôn mang lại những sản phẩm mới nhất </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] mr-4">
                        <TbBellRingingFilled className="text-[112px] mb-3 text-primary" />
                        <p className="font-bold">Chọn sản phẩm</p>
                        <p>Lựa chọn những sản phẩm mà quý khách yêu thích </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] mr-4">
                        <FaWallet className="text-[112px] mb-3 text-primary" />
                        <p className="font-bold">Thanh toán giỏ hàng</p>
                        <p>Quý khách có thể thanh toán bằng nhiều phương thức</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] mr-4 ">
                        <MdDonutSmall className="text-[112px] mb-3 text-primary" />
                        <p className="font-bold">Chờ giao hàng</p>
                        <p>Quý khách sẽ được nhận hàng từ 3-5 ngày</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[15%] mr-4 ">
                        <MdDonutSmall className="text-[112px] mb-3 text-primary" />
                        <p className="font-bold">Đánh giá sản phẩm</p>
                        <p>Những đóng góp của quý khách sẽ giúp chúng tôi phát triển hơn</p>
                    </div>
                </div>
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
