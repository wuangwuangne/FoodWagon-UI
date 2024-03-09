import { MdEmail } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
function Footer() {
    return (
        <div className="bg-footer pt-20 text-white pb-0 leading-6 mb-0 flex flex-col px-28">
            <h1 className="mb-4 font-bold">OUR TOP CITIES</h1>
            <div className="flex justify-between">
                <div className=" mb-3">
                    <ul>
                        <li>
                            <a href="#!">San Francisco</a>
                        </li>
                        <li>
                            <a href="#!">Miami</a>
                        </li>
                        <li>
                            <a href="#!">San Diego</a>
                        </li>
                        <li>
                            <a href="#!">East Bay</a>
                        </li>
                        <li>
                            <a href="#!">Long Beach</a>
                        </li>
                    </ul>
                </div>
                <div className=" mb-3">
                    <ul>
                        <li>
                            <a href="#!">Los Angeles</a>
                        </li>
                        <li>
                            <a href="#!">Washington DC</a>
                        </li>
                        <li>
                            <a href="#!">Seattle</a>
                        </li>
                        <li>
                            <a href="#!">Portland</a>
                        </li>
                        <li>
                            <a href="#!">Nashville</a>
                        </li>
                    </ul>
                </div>
                <div className=" mb-3">
                    <ul>
                        <li>
                            <a href="#!">New York City</a>
                        </li>
                        <li>
                            <a href="#!">Orange County</a>
                        </li>
                        <li>
                            <a href="#!">Atlanta</a>
                        </li>
                        <li>
                            <a href="#!">Charlotte</a>
                        </li>
                        <li>
                            <a href="#!">Denver</a>
                        </li>
                    </ul>
                </div>
                <div className=" mb-3">
                    <ul>
                        <li>
                            <a href="#!">Chicago</a>
                        </li>
                        <li>
                            <a href="#!">Phoenix</a>
                        </li>
                        <li>
                            <a href="#!">Las Vegas</a>
                        </li>
                        <li>
                            <a href="#!">Sacramento</a>
                        </li>
                        <li>
                            <a href="#!">Oklahoma City</a>
                        </li>
                    </ul>
                </div>
                <div className=" mb-3">
                    <ul>
                        <li>
                            <a href="#!">Columbus</a>
                        </li>
                        <li>
                            <a href="#!">New Mexico</a>
                        </li>
                        <li>
                            <a href="#!">Albuquerque</a>
                        </li>
                        <li>
                            <a href="#!">Sacramento</a>
                        </li>
                        <li>
                            <a href="#!">New Orleans</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-4 text-[#424242]" />
            <div className="flex justify-between ">
                <div className="mb-3">
                    <h1 className="lh-lg font-bold text-white mb-5">COMPANY</h1>
                    <ul>
                        <li>
                            <a href="#!">About Us</a>
                        </li>
                        <li>
                            <a href="#!">Team</a>
                        </li>
                        <li>
                            <a href="#!">Careers</a>
                        </li>
                        <li>
                            <a href="#!">blog</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 mb-3">
                    <h1 className="lh-lg font-bold text-white mb-5 mr-4">CONTACT</h1>
                    <ul>
                        <li>
                            <a href="#!">Help &amp; Support</a>
                        </li>
                        <li>
                            <a href="#!">Partner with us </a>
                        </li>
                        <li>
                            <a href="#!">Ride with us</a>
                        </li>
                        <li>
                            <a href="#!">Ride with us</a>
                        </li>
                    </ul>
                </div>
                <div className="mb-3">
                    <h1 className="lh-lg font-bold text-white mb-5 mr-4">LEGAL</h1>
                    <ul>
                        <li>
                            <a href="#!">Terms &amp; Conditions</a>
                        </li>
                        <li>
                            <a href="#!">Refund &amp; Cancellation</a>
                        </li>
                        <li>
                            <a href="#!">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#!">Cookie Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h1 className="lh-lg font-bold text-white mb-5 mr-4">LEGAL</h1>
                    <ul>
                        <li>
                            <a href="#!">Terms &amp; Conditions</a>
                        </li>
                        <li>
                            <a href="#!">Refund &amp; Cancellation</a>
                        </li>
                        <li>
                            <a href="#!">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="text-[#BDBDBD] w-[32%]">
                    <h1 className="lh-lg font-bold text-[20px]">FOLLOW US</h1>
                    <div className="text-start my-3 flex ">
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
                    <h4 className="font-bold my-7  text-[26px]">
                        Receive exclusive offers and discounts in your mailbox
                    </h4>
                    <div className="flex items-center">
                        <div className="relative flex items-center">
                            <div className="absolute left-0 top-0 bottom-0 flex items-center px-3 text-gray-500">
                                <MdEmail className="text-[#BDBDBD]" />
                            </div>
                            <input
                                className="border-0 rounded-md text- bg-[#616161] pl-10 pr-4 py-2 "
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
                    <a className="mx-2" href="">
                        WuangWuangne
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
