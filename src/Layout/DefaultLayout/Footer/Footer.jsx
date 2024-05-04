import { MdEmail } from 'react-icons/md';
import { FaHeart, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
    const cities = [
        ['San Francisco', 'Miami', 'San Diego', 'East Bay', 'Long Beach'],
        ['Los Angeles', 'Washington DC', 'Seattle', 'Portland', 'Nashville'],
        ['New York City', 'Orange County', 'Atlanta', 'Charlotte', 'Denver'],
        ['Chicago', 'Phoenix', 'Las Vegas', 'Sacramento', 'Oklahoma City'],
        ['Columbus', 'New Mexico', 'Albuquerque', 'Sacramento', 'New Orleans'],
    ];

    const renderCityList = () => {
        return cities.map((cityGroup, index) => (
            <div className="mb-3" key={index}>
                <ul>
                    {cityGroup.map((city, cityIndex) => (
                        <li key={cityIndex}>
                            <a href="#!">{city}</a>
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    const renderLinkList = (title, links) => {
        return (
            <div className="mb-3">
                <h1 className="lh-lg font-bold text-white mb-5">{title}</h1>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href="#!">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="bg-footer pt-20 text-white pb-0 leading-6 mb-0 flex flex-col px-28">
            <h1 className="mb-4 font-bold">OUR TOP CITIES</h1>
            <div className="flex justify-between">{renderCityList()}</div>
            <hr className="my-4 text-[#424242]" />
            <div className="flex justify-between">
                {renderLinkList('COMPANY', ['About Us', 'Team', 'Careers', 'Blog'])}
                {renderLinkList('CONTACT', ['Help & Support', 'Partner with Us', 'Ride with Us'])}
                {renderLinkList('LEGAL', [
                    'Terms & Conditions',
                    'Refund & Cancellation',
                    'Privacy Policy',
                    'Cookie Policy',
                ])}
                {renderLinkList('LEGAL', ['Terms & Conditions', 'Refund & Cancellation', 'Privacy Policy'])}
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
                    <h4 className="font-bold my-7 text-[26px]">
                        Receive exclusive offers and discounts in your mailbox
                    </h4>
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
