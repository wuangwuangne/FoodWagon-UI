import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate();
    const continues = () => {
        navigate('/');
    };

    return (
        <div className="p-14">
            <h1 className="text-3xl">Giỏ hàng</h1>
            <div className="flex flex-col items-center mt-8">
                <img src="img/Main/cart1.png" alt="" />
                <p className="py-2">Không có sản phẩm nào trong giỏ hàng của bạn</p>
                <button className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer" onClick={continues}>
                    TIẾP TỤC MUA HÀNG
                </button>
            </div>
        </div>
    );
}

export default Cart;
