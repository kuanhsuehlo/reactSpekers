import React from 'react'
import { useEffect, useState } from "react"
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const SwiperProduct = () => {

    // 建立背景圖的變數
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // 建立輪播圖片的陣列物件
    const slides = [
        { url: "./images/cq5dam.web.320.320.svg", title: "headphone" },
        { url: "./images/UOEBLE25_LunarBlue_SF_PDP_Gallery_03.webp", title: "Forest Path" },
        { url: "./images/SLP-BlueDusk_SF_E-CommGallery_Silo_Desktop_1501x1120_1.avif", title: "Ocean Waves" },
        { url: "./images/BTVS_003_RGB.webp", title: "Desert Landscape" },
    ]

    useEffect(() => {
        // 每三秒呼叫nextSlide()換下一張圖
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);
        // 每3秒後，移除autoplay，這樣才能取得最新的索引編號
        return () => clearInterval(autoplay);
    }, [currentImgIndex]);

    // 下一張圖
    const nextSlide = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }

    // 上一張
    const prevSlide = () => {
        // 取得前一張的索引編號，檢查是否為第一個編號
        // 是=>跳到最後張
        // 否=>跳到前一張
        setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }

    // 建立左右icon元件
    // const Arrow = ({ direction, onClick }) => {
    //     return (
    //         // 放icon區
    //         <div style={{
    //             position: "absolute",
    //             top: "50%",
    //             transform: "translateY(-50%)",
    //             cursor: "pointer",
    //             color: "#fff",
    //             [direction]: "20px",
    //             fontSize: "50px",
    //             userSelect: "none",
    //             zIndex: 10
    //         }}
    //         onClick={onClick}>
    //             {direction === "left" ? "◀" : "▶"}
    //         </div>
    //     )
    // }
    return (
        <>
        <div className='home-product'>
              <div className='home-circle'>
                <img src="./images/circle-bg.svg" alt="circle-bg" />
                <div className='home-web'>
                  <img src={slides[currentImgIndex].url} alt={slides[currentImgIndex].title} />
                </div>
                 <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '8px'
                }}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentImgIndex(index)}
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: currentImgIndex === index ? '#007bff' : '#ccc',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
              </div>
        </div>
        </>
    )
}

export default SwiperProduct


// import React from 'react'
// import { useEffect, useState } from "react"

// const SwiperProduct = () => {
//     // 建立背景圖的變數
//     const [currentImgIndex, setCurrentImgIndex] = useState(0);
    
//     // 建立輪播圖片的陣列物件
//     const slides = [
//         { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop", title: "Mountain Vista" },
//         { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop", title: "Forest Path" },
//         { url: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=1200&h=800&fit=crop", title: "Ocean Waves" },
//         { url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop", title: "Desert Landscape" },
//     ]
    
//     useEffect(() => {
//         // 每三秒呼叫nextSlide()換下一張圖
//         const autoplay = setInterval(() => {
//             nextSlide();
//         }, 3000);
//         // 每3秒後，移除autoplay，這樣才能取得最新的索引編號
//         return () => clearInterval(autoplay);
//     }, [currentImgIndex]);
    
//     // 下一張圖
//     const nextSlide = () => {
//         setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
//     }
    
//     // 上一張圖 (新增這個函式)
//     const prevSlide = () => {
//         setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
//     }
    
//     // 建立左右icon元件
//     const Arrow = ({ direction, onClick }) => {
//         return (
//             // 放icon區
//             <div style={{
//                 position: "absolute",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//                 color: "#fff",
//                 [direction]: "20px",
//                 fontSize: "50px",
//                 userSelect: "none",
//                 zIndex: 10
//             }}
//             onClick={onClick}>
//                 {direction === "left" ? "◀" : "▶"}
//             </div>
//         )
//     }
    
//     return (
//         <>
//             {/* 滿版最外層 */}
//             <div className="wrapper" style={{
//                 maxWidth: "100vw",
//                 height: "100vh",
//                 margin: "auto",
//                 position: "relative"
//             }}>
//                 {/* 滿版背景輪播區 */}
//                 <div style={{
//                     backgroundImage: `url(${slides[currentImgIndex].url})`,
//                     width: "100%",
//                     height: "100%",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     margin: "auto",
//                     position: "relative"
//                 }}>
//                     {/* 文字區 */}
//                     <h2 style={{ 
//                         color: "red",
//                         position: "absolute",
//                         top: "20px",
//                         left: "20px",
//                         margin: 0,
//                         zIndex: 5
//                     }}>
//                         {slides[currentImgIndex].title}
//                     </h2>
                    
//                     {/* 上一張 */}
//                     <Arrow direction="left" onClick={prevSlide} />
                    
//                     {/* 下一張 */}
//                     <Arrow direction="right" onClick={nextSlide} />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SwiperProduct