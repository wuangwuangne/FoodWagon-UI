function Item() {
    return (
        <div className="flex flex-wrap justify-center pb-4.5">
            <div className="pt-20 mx-2 flex">
                <div className="cursor-pointer">
                    <div className="text-white relative">
                        <img className="rounded-2xl" src="img/item1.png" alt="" />
                        <div className="absolute bottom-0 left-0 flex justify-center items-center bg-primary h-[110px] rounded-xl ">
                            <div className="text-[80px] font-bold">15</div>
                            <div className="font-bold ml-2">
                                <p>%</p>
                                <p>Off</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold mt-3 mb-4   ">Flat Hill Slingback</p>
                        <span className="text-orange-600 font-extrabold bg-[#fdeadf] rounded-lg pr-3 pl-3 p-2 ">
                            <span>6 Days remaining</span>
                        </span>
                    </div>
                </div>
            </div>
            {/* item 2 */}
            <div className="pt-20 mx-2 flex">
                <div className="cursor-pointer">
                    <div className="text-white relative">
                        <img className="rounded-2xl" src="img/item2.png" alt="" />
                        <div className="absolute bottom-0 left-0 flex justify-center items-center bg-primary h-[110px] rounded-xl ">
                            <div className="text-[80px] font-bold">10</div>
                            <div className="font-bold ml-2">
                                <p>%</p>
                                <p>Off</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold mt-3 mb-4   ">Ocean Blue Ring</p>
                        <span className="text-orange-600 font-extrabold bg-[#fdeadf] rounded-lg pr-3 pl-3 p-2 ">
                            <span>6 Days remaining</span>
                        </span>
                    </div>
                </div>
            </div>
            {/* item3 */}
            <div className="pt-20 mx-2 flex">
                <div className="cursor-pointer">
                    <div className="text-white relative">
                        <img className="rounded-2xl" src="img/item3.png" alt="" />
                        <div className="absolute bottom-0 left-0 flex justify-center items-center bg-primary h-[110px] rounded-xl">
                            <div className="text-[80px] font-bold">20</div>
                            <div className="font-bold ml-2">
                                <p>%</p>
                                <p>Off</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold mt-3 mb-4   ">Brown Leathered Wallet</p>
                        <span className="text-orange-600 font-extrabold bg-[#fdeadf] rounded-lg pr-3 pl-3 p-2 ">
                            <span>6 Days remaining</span>
                        </span>
                    </div>
                </div>
            </div>
            {/* item4 */}
            <div className="pt-20 mx-2 flex">
                <div className="cursor-pointer">
                    <div className="text-white relative">
                        <img className="rounded-2xl" src="img/item4.png" alt="" />
                        <div className="absolute bottom-0 left-0 flex justify-center items-center bg-primary h-[110px] rounded-xl">
                            <div className="text-[80px] font-bold">25</div>
                            <div className="font-bold ml-2">
                                <p>%</p>
                                <p>Off</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold mt-3 mb-4   ">Silverside Wristwatch</p>
                        <span className="text-orange-600 font-extrabold bg-[#fdeadf] rounded-lg pr-3 pl-3 p-2 ">
                            <span>6 Days remaining</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
