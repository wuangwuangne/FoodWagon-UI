import React, { useState } from 'react';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';

function Slider() {
    const [startIndex, setStartIndex] = useState(0);

    const images = [
        'img/hot1.png',
        'img/hot2.png',
        'img/hot3.png',
        'img/hot4.png',
        'img/hot5.png',
        'img/hot1.png',
        'img/hot2.png',
        'img/hot4.png',
        'img/hot1.png',
        'img/hot3.png',
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
                            <div className="flex flex-col items-center">
                                <img
                                    className="rounded-md"
                                    src={images[startIndex + index]}
                                    alt={`Slide ${startIndex + index + 1}`}
                                />
                                <p className="mt-4">{customTexts[startIndex + index]}</p>
                                {/* Hiển thị nội dung tùy chỉnh */}
                                <button className="bg-orange-500 font-bold rounded-md text-white p-2 pl-24 pr-24 mt-2">
                                    Order now
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
