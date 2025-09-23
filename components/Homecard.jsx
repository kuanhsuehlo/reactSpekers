
import React from 'react';

const Homecard = () => {
    const ProductData = [
        {
            id: 1,
            title: "Speakers",
            content: "藍牙5.3連線穩定，操作簡單直覺。提供多種顏色選擇，外型時尚耐用。",
            image: "./images/SF_pdp_SLHM_gallery_Grey_07.webp"
        },
        {
            id: 2,
            title: "無線耳機",
            content: "高品質音效，舒適佩戴體驗，長時間使用不疲勞。",
            image: "./images/headphones.webp"
        },
        {
            id: 3,
            title: "音響系統",
            content: "環繞立體聲效果，為您打造家庭劇院級別的聽覺享受。",
            image: "./images/sound-system.webp"
        }
    ];

    return (
        <div>
            {ProductData.map(product => (
                <div key={product.id} className='card-styles'>
                    <img 
                        src={product.image} 
                        alt={product.title}
                    />
                    <h3>{product.title}</h3>
                    <p>{product.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Homecard;