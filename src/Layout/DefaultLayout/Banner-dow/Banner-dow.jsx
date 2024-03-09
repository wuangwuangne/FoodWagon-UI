function Bannerdow() {
    return (
        <div
            className="pt-12 mb-28 bg-cover bg-center h-screen flex items-center flex-col"
            style={{ backgroundImage: "url('img/banner.png')" }}
        >
            <div className="bg-[#FFFEFE] flex items-center justify-around py-4 px-24 rounded-2xl mt-12">
                <div className="flex items-center justify-center p-4  ">
                    <img src="img/banner-con1.png" alt="" />
                    <h2 className="bg-gradient-to-r from-orange-600 via-orange-600 to-yellow-400 bg-clip-text text-transparent w-[40%] text-[25px] font-bold">
                        Daily Discounts
                    </h2>
                </div>
                <div className="flex items-center justify-center border-l-2 border-solid border-gray-300 ">
                    <img src="img/banner-con2.png" alt="" />
                    <h2 className="bg-gradient-to-r from-orange-600 via-orange-600 to-yellow-400 bg-clip-text text-transparent w-[40%] text-[25px] font-bold">
                        Live Tracking
                    </h2>
                </div>
                <div className="flex items-center justify-center border-l-2 border-solid border-gray-300">
                    <img src="img/banner-con3.png" alt="" />
                    <h2 className="bg-gradient-to-r from-orange-600 via-orange-600 to-yellow-400 bg-clip-text text-transparent w-[40%] text-[25px] font-bold">
                        Quick Delivery
                    </h2>
                </div>
            </div>
            <div>thẻ 2</div>
        </div>
    );
}

export default Bannerdow;
