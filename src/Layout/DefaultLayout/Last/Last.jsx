import { FaChevronRight } from 'react-icons/fa';

function Last() {
    return (
        <div className="relative font-bold ">
            <img src="img/last.png" alt="" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className=" text-white text-[40px] w-[60%]">Are you ready to order with the best deals?</h1>
                    <button className="bg-orange-500 text-white text-[15px] flex items-center p-2 pl-16 pr-16  mt-7">
                        PROCEED TO ORDER <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Last;
