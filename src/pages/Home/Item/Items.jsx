import React from 'react';

function ItemCard({ imageSrc, discount, itemName, itemPrice }) {
    return (
        <div className="cursor-pointer mb-10">
            <div className="text-white relative flex justify-center">
                <img className="rounded-2xl h-[360px] w-[360px] mr-4" src={imageSrc} alt="" />
                <div className="absolute left-0 top-0 flex justify-center items-center bg-primary h-[70px] rounded-xl ">
                    <div className="text-[40px] font-bold">{discount}</div>
                    <div className="font-bold ml-2">
                        <p>%</p>
                        <p>Off</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold mt-3 mb-4">{itemName}</p>
                <p className="font-bold mt-3 mb-4 text-red-500">{itemPrice || 0}đ</p>

                <span className="text-white font-extrabold bg-red-400 rounded-lg pr-3 pl-3 p-2">
                    <span>6 Days remaining</span>
                </span>
            </div>
        </div>
    );
}

function Item() {
    const items = [
        { imageSrc: 'img/Main/Dép/dép1.png', discount: 15, itemName: 'Flat Hill Slingback', itemPrice: 10000 },
        { imageSrc: 'img/Main/Giày/nike 1.jpg', discount: 10, itemName: 'Ocean Blue Ring' },
        { imageSrc: 'img/Main/Dép/dép2.png', discount: 20, itemName: 'Brown Leathered Wallet' },
        { imageSrc: 'img/Main/Giày/nike2.jpg', discount: 25, itemName: 'Silverside Wristwatch' },
        { imageSrc: 'img/Main/Dép/dép1.png', discount: 25, itemName: 'Silverside Wristwatch' },
        { imageSrc: 'img/Main/Dép/dép1.png', discount: 25, itemName: 'Silverside Wristwatch' },
        { imageSrc: 'img/Main/Dép/dép1.png', discount: 25, itemName: 'Silverside Wristwatch' },
        { imageSrc: 'img/Main/Dép/dép1.png', discount: 25, itemName: 'Silverside Wristwatch' },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {items.map((item, index) => (
                <ItemCard
                    key={index}
                    imageSrc={item.imageSrc}
                    discount={item.discount}
                    itemName={item.itemName}
                    itemPrice={item.itemPrice}
                />
            ))}
        </div>
    );
}

export default Item;
