import React from 'react'
import { Link } from 'react-router-dom';
import ButtonPulse from "../components/ButtonPulse.jsx";

const Categories = () => {
    return (
        <>
            <main>
                <section>
                    <div className='cate-wrap'>
                    <div className='cate-head'>
                        <h2>Categories</h2>
                    </div>
                    <div className='type-wrap'>
                        <div className='wave-ramp-eight'>
                            <img src="./images/wave-ramp-08.svg" alt="wave-ramp-08" />
                        </div>
                        <div className='circle-bg-five'>
                            <img src="./images/circle-bg.svg" alt="circle-bg-five" />
                        </div>
                        <div className='type-up'>
                            <div className='typpe-one'>
                                <Link to='/'>
                                    <img src="./images/type-01.png" alt="type-01" />
                                    <div className="image-overlay">
                                         <h3 className="overlay-title">Earbuds</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className='typpe-two'>
                                <Link>
                                    <img src="./images/type-02.png" alt="type-02" />
                                     <div className="image-overlay">
                                         <h3 className="overlay-title">Headphones</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='type-down'>
                            <div className='typpe-three'>
                                <Link>
                                    <img src="./images/type-03.png" alt="type-03" />
                                    <div className="image-overlay">
                                         <h3 className="overlay-title">Soundbar</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className='typpe-four'>
                                <Link>
                                    <img src="./images/type-04.png" alt="type-04" />
                                    <div className="image-overlay">
                                         <h3 className="overlay-title">Speakers</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section>
                    <div className='cate-suppot'>
                        <div className='wave-ramp-nine'>
                            <img src="./images/wave-ramp-09.svg" alt="wave-ramp-09" />
                        </div>
                        <div className='circle-bg-six'>
                            <img src="./images/circle-bg.svg" alt="circle-bg" />
                        </div>
                        <h2>Why buy from ACOUSTRA</h2>
                        <div className='cate-support-flex'>
                            <div>
                                <div className='cate-circle'>
                                    <div className='date-icon'>
                                        <img src="./images/date_icon.png" alt="date_icon" />
                                    </div>
                                </div>
                                <h3>90-day return policy</h3>
                                <p>Try it for 90 days to make sure it’s right for you.</p>
                                <div className='cate-button'>
                                    <ButtonPulse>
                                        <Link to='/' className='cate-link'>Learn more</Link>
                                    </ButtonPulse>
                                </div>
                            </div>

                            <div>
                                <div className='cate-circle'>
                                    <div className='date-icon'>
                                        <img src="./images/money-icon.png" alt="date_icon" />
                                    </div>
                                </div>
                                <h3>Price match promise</h3>
                                <p>Shop confidently. We’ll match a lower price.</p>
                                <div className='cate-button'>
                                    <ButtonPulse>
                                        <Link to='/' className='cate-link'>Learn more</Link>
                                    </ButtonPulse>
                                </div>
                            </div>
                            <div>
                                <div className='cate-circle'>
                                    <div className='date-icon'>
                                        <img src="./images/delivery_icon.png" alt="date_icon" />
                                    </div>
                                </div>
                                <h3>Free shipping&returns</h3>
                                <p>On all in-stock orders.</p>
                                <div className='cate-empty'></div>
                                <div className='cate-button'>
                                    <ButtonPulse>
                                        <Link to='/' className='cate-link'>Learn more</Link>
                                    </ButtonPulse>
                                </div>
                            </div>
                            <div>
                                <div className='cate-circle'>
                                    <div className='date-icon'>
                                        <img src="./images/account-icon.png" alt="date_icon" />
                                    </div>
                                </div>
                                <h3>My Acoustra perks</h3>
                                <p>My Bose members receive welcome and more.</p>
                                <div className='cate-button'>
                                    <ButtonPulse>
                                        <Link to='/' className='cate-link'>Learn more</Link>
                                    </ButtonPulse>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Categories