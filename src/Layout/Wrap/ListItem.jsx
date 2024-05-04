import { Link, useNavigate } from 'react-router-dom';

function ListItem({ data }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${data.id}`);
    };

    return (
        <div onClick={handleClick} className="w-1/3 cursor-pointer">
            <div className="text-center mt-10 mr-4">
                <Link to={`/product/${data.id}`} className="block">
                    <img src={data.img} alt="" className=" w-[380px] h-[380px] " />
                </Link>
                <div className="text-center mt-4">
                    <h3 className="font-bold">{data.title}</h3>
                    <p className="text-red-500 text-lg font-bold">{data.price.toLocaleString()}đ</p>
                    <p> Mô tả: {data.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
