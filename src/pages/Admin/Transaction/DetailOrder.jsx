import { useLocation } from "react-router-dom";

function DetailOrder() {
    const location = useLocation();
    const { dataDetail } = location?.state;

    return (
        <div >
            <h1 className="text-center text-[40px]">THÔNG TIN SẢN PHẨM ĐÃ ĐẶT</h1>

            {dataDetail.map(item => (
            <div key={`${item.productId.id}-${item.size}`}> {/* Kết hợp các thuộc tính để tạo key duy nhất */}
            <p>- {item.productId.name},</p>
            <p>- Số lượng: {item.counts}</p>
            <p>- Size: {item.size}</p>
    </div>
))}

        </div>
    );
}

export default DetailOrder;
