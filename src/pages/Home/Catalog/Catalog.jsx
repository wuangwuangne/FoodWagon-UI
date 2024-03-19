import { FaChevronRight } from 'react-icons/fa';

function CatalogItem({ imageSrc, title, subtitle }) {
    return (
        <div className="flex shadow-2xl items-center ml-32 mr-32  flex-row justify-center mt-24 mb-24">
            <div className="w-[30%]  text-[36px] pl-8 font-bold">
                <span>{title}</span>
                <p className="text-[17px] text-[#424242] mt-4">{subtitle}</p>
                <button className="bg-primary text-white text-[15px] flex items-center p-2 pl-24 pr-24 mt-24 rounded-lg">
                    PROCEED TO ORDER <FaChevronRight />
                </button>
            </div>
            <img className="w-[70%] rounded-lg" src={imageSrc} alt="" />
        </div>
    );
}

function Catalog() {
    const catalogItems = [
        {
            imageSrc: 'img/cat1.png',
            title: 'Best deals Crispy Sandwiches',
            subtitle: 'Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.',
        },
        {
            imageSrc: 'img/cat2.png',
            title: 'Celebrate parties with Fried Chicken',
            subtitle:
                'Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.',
        },
        {
            imageSrc: 'img/cat3.png',
            title: 'Wanna eat hot & spicy Pizza?',
            subtitle: 'Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.',
        },
    ];

    return (
        <div>
            {catalogItems.map((item, index) => (
                <CatalogItem key={index} imageSrc={item.imageSrc} title={item.title} subtitle={item.subtitle} />
            ))}
        </div>
    );
}

export default Catalog;
