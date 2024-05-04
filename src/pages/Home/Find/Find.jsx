function Find() {
    return (
        <div className=" flex items-center pl-28 pb-[-10px] bg-primary">
            <div className="w-1/2">
                <h1 className="text-[#ffff] font-extrabold leading-none text-7xl mb-[20px]">
                    Sự thành công đến từ những bước đi đầu tiên.
                </h1>
                <h1 className="text-4xl text-white mb-[20px] ">
                    Hãy để đôi giày nói lên về cá tính của bạn - Tự tin, độc đáo và luôn thể hiện phong cách riêng
                </h1>
            </div>
            <div className="relative w-1/2 ">
                <img
                    className="transition-transform duration-500 transform hover:-translate-y-12 cursor-pointer mt-[250px] mb-[100px]"
                    src="img/Main/banner@.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Find;
