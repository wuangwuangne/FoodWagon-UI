import { FaChevronRight } from 'react-icons/fa';
function Catalog() {
    return (
        <div>
            <div className="flex shadow-2xl items-center ml-32 mr-32  flex-row justify-center ">
                <div className="w-[30%]  text-[36px] pl-8 font-bold">
                    Best deals<span className="text-primary "> Crispy Sandwiches </span>
                    <p className="text-[17px] text-[#424242] mt-4">
                        Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.
                    </p>
                    <button className="bg-primary text-white text-[15px] flex items-center p-2 pl-24 pr-24 mt-24 rounded-lg">
                        PROCEED TO ORDER <FaChevronRight />
                    </button>
                </div>
                <img className="w-[70%] rounded-lg" src="img/cat1.png" alt="" />
            </div>
            {/* Cata 2 */}
            <div className="flex shadow-2xl items-center ml-32 mr-32  flex-row justify-center mt-24">
                <img className="w-[70%] rounded-lg" src="img/cat2.png" alt="" />
                <div className="w-[30%]  text-[36px] pl-8 font-bold">
                    Celebrate parties with<span className="text-primary "> Fried Chicken </span>
                    <p className="text-[17px] text-[#424242] mt-4">
                        Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals
                        for fried chicken.{' '}
                    </p>
                    <button className="bg-primary text-white text-[15px] flex items-center p-2 pl-24 pr-24 mt-24 rounded-lg">
                        PROCEED TO ORDER <FaChevronRight />
                    </button>
                </div>
            </div>
            {/* cat 3 */}
            <div className="flex shadow-2xl items-center ml-32 mr-32  flex-row justify-center mt-24 mb-24">
                <div className="w-[30%]  text-[36px] pl-8 font-bold">
                    Wanna eat hot &<span className="text-primary "> spicy Pizza? </span>
                    <p className="text-[17px] text-[#424242] mt-4">
                        Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.
                    </p>
                    <button className="bg-primary text-white text-[15px] flex items-center p-2 pl-24 pr-24 mt-24 rounded-lg">
                        PROCEED TO ORDER <FaChevronRight />
                    </button>
                </div>
                <img className="w-[70%] rounded-lg" src="img/cat3.png" alt="" />
            </div>
        </div>
    );
}

export default Catalog;
