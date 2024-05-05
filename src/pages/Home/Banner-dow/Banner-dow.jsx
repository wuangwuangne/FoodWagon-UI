function Bannerdow() {
    return (
        <div
            className="pt-12 mb-28 bg-cover bg-center h-screen flex items-center flex-col"
            style={{ backgroundImage: "url('img/Main/bg.jpg')" }}
        >
            <div className="bg-[#FFFEFE] flex items-center justify-around py-4 px-24 rounded-2xl mt-12">
                <div className="flex items-center justify-center p-4  ">
                    <img src="img/banner-con1.png" alt="" />
                    <h2 className="bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent w-[40%] text-[30px] font-bold">
                        Daily Discounts
                    </h2>
                </div>
                <div className="flex items-center justify-center border-l-2 border-solid border-gray-300 ">
                    <img src="img/banner-con2.png" alt="" />
                    <h2 className="bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent w-[40%] text-[30px] font-bold">
                        Live Tracking
                    </h2>
                </div>
                <div className="flex items-center justify-center border-l-2 border-solid border-gray-300">
                    <img src="img/banner-con3.png" alt="" />
                    <h2 className="bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent w-[40%] text-[30px] font-bold">
                        Quick Delivery
                    </h2>
                </div>
            </div>
            <div className="flex mt-[77px] ml-44">
                <img src="img/banner-con4.png" alt="" />
                <div className="flex flex-col justify-center ml-10">
                    <h1 className="font-bold text-white text-[32px]">Đặt hàng chưa bao giờ dễ dàng đến thế</h1>
                    <p className="w-[57%] text-white">
                        Chỉ một vài thao tác cơ bản cả thế giới sẽ hiện ra trong mắt bạn
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Bannerdow;
