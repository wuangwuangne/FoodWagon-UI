function Size() {
    return (
        <div className="px-20 pt-[90px]">
            <div>
                <h1 className="text-2xl font-bold mb-8">[BẬT MÍ] Cách chọn và đo size chuẩn</h1>
                <div className="flex justify-center mb-8">
                    <iframe
                        className="w-[780px] h-[380px]"
                        src="https://www.youtube.com/embed/PAM5c4G20cA?si=ADMsvc_bcbqEEBv9"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
                <blockquote className="text-lg text-center border-l-4 border-gray-300 px-4 py-2 mb-8 italic">
                    Bạn đang muốn đặt một đôi giày ở Trung Quốc nhưng không biết chọn size như thế nào cho vừa? Thực tế
                    size giày Trung Quốc khác so với Việt Nam tuy nhiên không quá nhiều. Trong bài viết này chúng ta sẽ
                    cùng tìm hiểu về cách chọn size giày trung quốc chuẩn nhất nhé!
                </blockquote>
                <strong className="text-xl">1.Bảng quy đổi size giày Trung Quốc theo từng loại</strong>
                <p className="text-center my-4">Hãy so sánh kích thước chân của bạn với bảng size giày dưới đây:</p>
                <div className="flex justify-center mb-4">
                    <img src="/img/Main/size-giay-nu.jpg" alt="Bảng size giày cho nữ" />
                </div>
                <p className="text-center mb-4 font-bold">Bảng size giày cho nữ</p>
                <div className="flex justify-center mb-4">
                    <img src="/img/Main/bang-quy-doi-size-giay-nam.jpg" alt="Bảng size giày cho nam" />
                </div>
                <p className="text-center mb-8 font-bold">Bảng size giày cho nam</p>
                <strong className="text-xl">2. Cách chọn và đo size giày phù hợp siêu đơn giản</strong>
                <div className="text-center mb-7">
                    <p className="my-4 ">
                        Chỉ cần 1 tờ giấy trắng, 1 cây bút và 1 thước dây, sau đó thực hiện các bước sau:
                    </p>
                    <p>
                        <em className="font-bold">Bước 1: Vẽ bàn chân</em>
                    </p>
                    <ul className="ml-4">
                        <li>Đặt bàn chân của bạn lên tờ giấy trắng.</li>
                        <li>Dùng bút chì vẽ lại khung bàn chân.</li>
                    </ul>
                    <p className="my-4">
                        Lưu ý: vẽ thẳng bút và ôm sát theo khuôn chân. Không xê dịch bàn chân khi vẽ.
                    </p>
                    <p>
                        <em className="font-bold">Bước 2: Chọn điểm đo</em>
                    </p>
                    <p>Chọn điểm cao nhất của các ngón chân sau và điểm thấp nhất của gót chân.</p>
                    <p>Kẻ các vạch như hình trên.</p>
                    <p>
                        <em className="font-bold">Bước 3: Lấy số đo</em>
                    </p>
                    <p>Dùng thước dây hoặc thước kẻ để đo đường vẽ ở bước 2.</p>
                    <p>
                        <em className="font-bold">Bước 4: So sánh bảng size giày</em>
                    </p>
                    <p>So sánh bảng kích thước để có size giày phù hợp.</p>
                </div>
            </div>
        </div>
    );
}

export default Size;
