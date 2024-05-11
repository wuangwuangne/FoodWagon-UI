import { MdEmail } from "react-icons/md";
import { FaHeart, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import routes from "~/config/routes";

function Footer() {
    return (
        <div className="bg-footer pt-20 text-white pb-0 leading-6 mb-0 flex flex-col px-28">
            <div className="flex justify-between items-center">
                <div>
                    <div className="flex items-center my-4 ">
                        <MdOutlineEmail />
                        <p className="hover:text-blue-300"> Email: hungnguyen079079@gmail.com</p>
                    </div>
                    <div className="flex items-center my-4">
                        <IoCall />
                        Hotline: 033 456 5538
                    </div>
                    <a
                        className="flex items-center my-4"
                        href="https://www.google.com/maps/place/11+Nguy%E1%BB%85n+Tr%C3%A3i,+H%C3%B2a+Hi%E1%BA%BFu,+TX.+Th%C3%A1i+H%C3%B2a,+Ngh%E1%BB%87+An,+Vi%E1%BB%87t+Nam/@19.3224747,105.4260162,18z/data=!3m1!4b1!4m10!1m2!2m1!1zU-G7kSAxMSBuZ3V54buFbiB0csOjaSAoIMSQ4bqndSBD4bqndSBIaeG6v3UgMSApLCBUaMOhaSBIw7VhLCBWaWV0bmFt!3m6!1s0x313715731e7004bb:0x1acef8ee0f8889cc!8m2!3d19.3224747!4d105.4284517!15sCkVT4buRIDExIG5ndXnhu4VuIHRyw6NpICggxJDhuqd1IEPhuqd1IEhp4bq_dSAxICksIFRow6FpIEjDtWEsIFZpZXRuYW2SARBnZW9jb2RlZF9hZGRyZXNz4AEA!16s%2Fg%2F11ghtcc39b?hl=vi-VN&entry=ttu"
                        target="blank"
                    >
                        <FaLocationDot />
                        Số 11 nguyễn trãi ( Đầu Cầu Hiếu 1 ), Thái Hõa, Vietnam
                    </a>
                </div>
                <div className="flex flex-col">
                    <h1 className="my-4">CHÍNH SÁCH</h1>
                    <Link to={routes.policyMaintenance} className="my-4 hover:text-blue-300">
                        Chính sách vận chuyển
                    </Link>
                    <Link to={routes.policyReturn} className="my-4 hover:text-blue-300">
                        Đổi/trả hàng
                    </Link>
                    <Link to={routes.policySecurity} className="my-4 hover:text-blue-300">
                        Bảo mật thông tin
                    </Link>
                </div>
                <div className="text-[#BDBDBD] w-[32%]">
                    <h1 className="lh-lg font-bold text-[20px]">FOLLOW US</h1>
                    <div className="text-start my-3 flex">
                        <a className="mr-3 text-[25px]" href="#!">
                            <FaInstagram />
                        </a>
                        <a className="mr-3 text-[25px]" href="#!">
                            <FaFacebook />
                        </a>
                        <a className="mr-3 text-[25px]" href="#!">
                            <FaTwitter />
                        </a>
                    </div>
                    <h4 className="font-bold my-7 text-[26px]">Đăng ký nhận tin</h4>
                    <div className="flex items-center">
                        <div className="relative flex items-center">
                            <div className="absolute left-0 top-0 bottom-0 flex items-center px-3 text-gray-500">
                                <MdEmail className="text-[#BDBDBD]" />
                            </div>
                            <input
                                className="border-0 rounded-md text-bg-[#616161] pl-10 pr-4 py-2"
                                type="email"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div className="col-auto ml-7">
                            <button className="bg-primary text-white font-bold p-2 w-[150%] rounded-md" type="submit">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-16 mb-4" />
            <div className="flex justify-between pb-8">
                <p>All rights Reserved © Your Company, 2024</p>
                <div className="flex items-center">
                    Made with <FaHeart className="text-red-600 mx-2" /> by
                    <a
                        className="mx-2"
                        href="https://www.facebook.com/profile.php?id=100020162593131"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WuangWuangne
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
