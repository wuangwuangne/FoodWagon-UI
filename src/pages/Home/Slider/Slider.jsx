import React, { useState } from 'react';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';

const VALUE = [
    {
        id: 1,
        img: 'img/Main/Giày/adidas1.jpg',
        name: 'Custom Text 1',
    },
    {
        id: 2,
        img: 'img/Main/Giày/adidas2.jpg',
        name: 'Custom Text 2',
    },
    {
        id: 3,
        img: 'img/Main/Giày/adidas3.jpg',
        name: 'Custom Text 3',
    },
    {
        id: 4,
        img: 'img/Main/Giày/adidas1.jpg',
        name: 'Custom Text 4',
    },
    {
        id: 5,
        img: 'img/Main/Giày/adidas1.jpg',
        name: 'Custom Text 5',
    },
    {
        id: 6,
        img: 'img/Main/Giày/adidas1.jpg',
        name: 'Custom Text 6',
    },
    {
        id: 7,
        img: 'img/Main/Giày/adidas1.jpg',
        name: 'Custom Text 7',
    },
    {
        id: 8,
        img: 'img/Main/Giày/adidas1.jpg',
        name: 'Custom Text 8',
    },
    {
        id: 9,
        img: 'img/Main/Giày/adidas1.jpg',
        name: 'Custom Text 9',
    },
    {
        id: 10,
        img: 'img/Main/Giày/adidas1.jpg',
        name: 'Custom Text 10',
    },
    {
        id: 11,
        img: 'img/Main/Giày/adidas1.jpg',
        name: 'Custom Text 11',
    },
];

function Slider() {
    const [startIndex, setStartIndex] = useState(0);
    const [data, setData] = useState(VALUE);

    const images = [
        'img/Main/Giày/adidas1.jpg',
        'img/Main/Giày/adidas2.jpg',
        'img/Main/Giày/adidas3.jpg',
        'img/Main/Giày/adidas1.jpg',
        'img/Main/Giày/adidas1.jpg',
        'img/Main/Giày/adidas1.jpg',
        'img/Main/Giày/adidas1.jpg',
        'img/Main/Giày/adidas1.jpg',
        'img/Main/Giày/adidas1.jpg',
        'img/Main/Giày/adidas1.jpg',
        'img/Main/Giày/adidas1.jpg',
    ];

    const customTexts = [
        'Custom Text 1',
        'Custom Text 2',
        'Custom Text 3',
        'Custom Text 4',
        'Custom Text 5',
        'Custom Text 6',
        'Custom Text 7',
        'Custom Text 8',
        'Custom Text 9',
        'Custom Text 10',
    ];

    const handleNext = () => {
        setStartIndex((prevStartIndex) => (prevStartIndex === 5 ? 0 : prevStartIndex + 1));
    };

    const handlePrev = () => {
        setStartIndex((prevStartIndex) => (prevStartIndex === 0 ? 5 : prevStartIndex - 1));
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '1600px', alignItems: 'center' }}>
                <button onClick={handlePrev} className="bg-primary rounded-full text-white font-extrabold text-[32px]">
                    <GrPrevious />
                </button>
                <div
                    style={{
                        display: 'flex',
                        overflow: 'hidden',
                        width: '94%', // Độ rộng của slider là 600px
                        height: '500px', // Độ cao của slider
                        position: 'relative',
                    }}
                >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index, i) => (
                        <div
                            className="mt-16"
                            key={index}
                            style={{
                                width: '300px', // Độ rộng của mỗi slide

                                position: 'absolute',
                                left: `${i * (80 + 220)}px`, // Tính toán giá trị left dựa trên index
                            }}
                        >
                            <div className="flex flex-col items-center mx-2">
                                <img
                                    className="rounded-md w-[300px] h-[300px] "
                                    src={images[startIndex + index]}
                                    alt={`Slide ${startIndex + index + 1}`}
                                />
                                <p className="mt-4">{customTexts[startIndex + index]}</p>
                                {/* Hiển thị nội dung tùy chỉnh */}
                                <button className="bg-orange-500 font-bold rounded-md text-white p-2 pl-24 pr-24 mt-2">
                                    Đặt ngay
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className="bg-primary rounded-full text-white font-bold text-[32px]">
                    <GrNext />
                </button>
            </div>
        </div>
    );
}

export default Slider;
