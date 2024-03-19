import { FaClock, FaTag } from 'react-icons/fa';
import { LuArrowBigRight } from 'react-icons/lu';

function RestaurantItem({ imageSrc, logoSrc, isOpenNow }) {
    return (
        <div className="pt-14 mx-2 flex">
            <div className="cursor-pointer">
                <div className="text-white relative">
                    <img className="rounded-2xl mb-4" src={imageSrc} alt="" />
                    <div className="absolute top-3 left-4 flex justify-center items-center bg-orange-500  rounded-xl">
                        <div className="text-[15px] font-bold flex items-center p-1">
                            <FaTag className="mr-1" />
                            10% off
                        </div>
                    </div>
                    <div className="absolute top-3 left-[110px] flex justify-center items-center bg-primary  rounded-md">
                        <div className="text-[15px] font-bold flex items-center p-1">
                            <FaClock className="mr-1" /> Fast
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex mb-4 items-center">
                        <img src={logoSrc} alt="" />
                        <div className="ml-4">
                            <p className="font-bold">Food world</p>
                        </div>
                    </div>
                    <span
                        className={`text-${isOpenNow ? 'green' : 'orange'}-400 font-bold bg-${
                            isOpenNow ? 'green' : '#fdeadf'
                        } rounded-lg pr-2 pl-2 p-1 text-[19px]`}
                    >
                        {isOpenNow ? 'Opens now' : 'Opens Tomorrow'}
                    </span>
                </div>
            </div>
        </div>
    );
}

function Featured() {
    return (
        <div className="pt-28 flex flex-col items-center">
            <h1 className="font-bold text-[40px]">Featured Restaurants</h1>
            <div className="flex flex-wrap justify-center">
                {[1, 2, 3, 4].map((index) => (
                    <RestaurantItem
                        key={index}
                        imageSrc={`img/res${index}.png`}
                        logoSrc={`img/logo${index}.png`}
                        isOpenNow={index % 2 === 0} // Example logic for determining if open now
                    />
                ))}
            </div>
            <button className="bg-primary mt-[120px] flex text-white items-center font-bold p-2 pr-10 pl-10 mb-28 rounded-lg hover:text-black">
                <span className="mr-4">View All</span>
                <span>
                    <LuArrowBigRight />
                </span>
            </button>
        </div>
    );
}

export default Featured;
