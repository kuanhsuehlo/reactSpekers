import React from 'react'
import Homecard from "../components/Homecard.jsx";
import { Link } from 'react-router-dom';
import SwiperProduct from "../components/SwiperProduct.jsx";
import ButtonPulse from "../components/ButtonPulse.jsx";

const Home = () => {
  return (
    <>
      {/* 第一區塊 */}
      <section>
        <div>
          <div className='home-wrap'>
            <div className='wave-ramp-one'>
              <img src="./images/wave-ramp-01.svg" alt="wave-ramp-01" />
            </div>
            <div className='wave-ramp-two'>
              <img src="./images/wave-ramp-02.svg" alt="wave-ramp-02" />
            </div>
            <div className='home-head'>
              <div className='head-img'><img src="./images/ACOUSTRA.svg" alt="ACOUSTRA" /></div>
              <div className='home-item'>
                <p>Bose QuietComfort Ultrabr<br />Headphones</p>
                {/* <button>Shop Now</button> */}
                <ButtonPulse>
                  <Link className='btn-text' to="">Shop Now</Link>
                </ButtonPulse>
              </div>
            </div>
            <SwiperProduct />
          </div>
        </div>
      </section>
      {/* 第二區塊 */}
      <section>
        <div className='info-card'>
          <div className='info-circle'>
            <img src="./images/circle-bg.svg" alt="circle" />
          </div>
          <div className='wave-ramp-three'>
            <img src="./images/wave-ramp-03.svg" alt="wave-ramp-03" />
          </div>
          <div className='info-flex'>
            <div className='info-combine-one'>
              <div className='info-item'>
                <Link to='/'>
                  <img src="./images/SF_pdp_SLHM_gallery_Grey_07.webp" alt="攜帶音響" />
                  <div className='p-24'>
                    <h3>Speakers</h3>
                    <p>藍牙5.3連線穩定，操作簡單直覺。提供多種顏色選擇，外型時尚耐用。</p>
                  </div>
                </Link>
              </div>
              <div className='info-item'>
                <Link to='/'>
                  <img src="./images/SUSB-Black_SF_gallery_3_1680x1120.webp" alt="soundbar" />
                  <div className='p-24'>
                    <h3>Speakers</h3>
                    <p>多個驅動單體，透過音訊處理技術模擬環繞音效。高階款式會搭配獨立重低音喇叭，提供更震撼表現。</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className='info-combine-two'>
              <div className='info-item'>
                <Link to='/'>
                  <img src="./images/大耳機.png" alt="耳罩耳機" />
                  <div className='p-24'>
                    <h3>Speakers</h3>
                    <p>大尺寸驅動單體提供出色音質，配戴舒適度高，續航力通常較長。多數具備主動降噪、多點連線等進階功能。適合長時間聆聽、居家工作或專業音樂製作。</p>
                  </div>
                </Link>
              </div>
              <div className='info-item'>
                <Link to='/'>
                  <img src="./images/小耳機.png" alt="耳機" />
                  <div className='p-24'>
                    <h3>Speakers</h3>
                    <p>藍牙5.3連線穩定，操作簡單直覺。提供多種顏色選擇，外型時尚耐用。</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='info-fun'>
            <h2>Connect<br />any source</h2>
            <p>音響設備分為個人聆聽的耳機與空間享受的喇叭兩大類。</p>
            <p>耳機包含真無線、入耳式、頭戴式等類型，適合通勤、工作或私人聆聽；喇叭系統則從桌面音響到家庭劇院，滿足不同空間需求。</p>
          </div>
        </div>
      </section>
      {/* 第三區塊 */}
      <section>
        <div className='popular-wrap'>
          <h2>Popular Products</h2>
          <div className='popular-flex'>
            <div className='popular-img'>
              <a href="#">
                <img src="./images/QCEBLE26-TwilightBlue_SF_Gallery_3_Desktop_3264x2448.png" alt="earbud-blue" />
                <h3>Bose QuietComfort <span>消噪耳塞</span></h3>
                <p>耳機</p>
                <p className='price'>NT$6,000</p>
              </a>
            </div>
            <div className='popular-img'>
              <a href="#">
                <img src="./images/sf_pdp_SLMPS_gallery_black_600x450_x2-7.webp" alt="earbud-blue" />
                <h3>Bose SoundLink <span>藍牙揚聲器</span></h3>
                <p>藍芽喇叭</p>
                <p className='price'>NT$6,000</p>
              </a>
            </div>
            <div className='popular-img'>
              <a href="#">
                <img src="./images/QCHLE26-IceBlue_SF_PDP_E-Comm-Gallery_1501x1120_1.png" alt="earbud-blue" />
                <h3>Bose QuietComfort <span>消噪耳塞</span></h3>
                <p>耳機</p>
                <p className='price'>NT$6,000</p>
              </a>
            </div>
            <div className='popular-img'>
              <a href="#">
                <img src="./images/SLMII-DuskBlue_SF_PDP_E-Comm_Gallery_7_1500x1120.png" alt="earbud-blue" />
                <h3>Bose QuietComfort <span>消噪耳塞</span></h3>
                <p>耳機</p>
                <p className='price'>NT$6,000</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* 第四區塊 */}
      <section>
        <div className='explore-box'>
          <div className='explore-wrap'>
            <img src="./images/explore.png" alt="探索產品介紹" />
            <div className='explore-content'>
              <h3>Find your fit</h3>
              <p>From noise cancellation to full awareness during drills,<br />we have the right earbuds to find your fit.</p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home