import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Commons } from "~/Common/Commons";
import { getAllProduct } from "~/services/productService";

function ItemCard({ data }) {
    return (
        <Link to={`/product/${data._id}`} className="cursor-pointer mb-10 w-[360px] mr-2">
            <div className="text-white relative flex justify-center rounded-2xl overflow-hidden shadow-lg">
                <img className="h-[360px] w-[360px]" src={data.imageUrl} alt="" />
                <div className="absolute left-0 top-2 px-2 flex justify-center items-center bg-primary h-[70px] rounded-xl ">
                    <div className="text-[40px] font-bold">{data.discount}</div>
                    <div className="font-bold ml-2">
                        <p>%</p>
                        <p>Off</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold mt-3 mb-4 line-clamp-2">{data.name}</p>
                <p className="font-bold mt-3 mb-4 text-red-500">{Commons.formatPrice(data.price) || 0}đ</p>

                <span className="text-white font-extrabold bg-red-400 rounded-lg pr-3 pl-3 p-2">
                    <span>{data.discountDate} Days remaining</span>
                </span>
            </div>
        </Link>
    );
}
function Item() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllProduct({ discount: true })
            .then((product) => {
                setData(product.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="flex flex-wrap justify-center">
            {data && data.map((item, index) => <ItemCard key={index} data={item} />)}
        </div>
    );
}

export default Item;
