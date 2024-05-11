import { Link, useNavigate } from "react-router-dom";

function ListItem({ data }) {
    return (
        <div className="w-1/3 cursor-pointer">
            <div className="text-center mt-10 mr-4 ml-2">
                <Link to={`/product/${data._id}`} className="block">
                    <img src={data.imageUrl} alt="" className=" w-[380px] h-[380px] " />
                </Link>
                <div className="text-center mt-4">
                    <h3 className="font-bold line-clamp-2">{data.name}</h3>
                    <p className="text-red-500 text-lg font-bold">{data.price.toLocaleString()}đ</p>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
