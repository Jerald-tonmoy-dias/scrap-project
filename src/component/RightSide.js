import React from 'react';

import mapImg from '../../src/image/map.png';
import google from '../../src/image/google.png';
import heatmap from '../../src/image/heatmap.png';
const Rightside = ({
    url,
    title,
    des,
    showdata,
    showRatings,
    showAd,
    showMap,
    showHeatmap,
    handledesktop,
    handlemobile,
    responsive
}) => {
    return (
        <>

            <div className='col-lg-8 mt-4'
                style={responsive === 'mobile' ? { width: '400px' } : {}}
            >
                {/* buttons */}
                <div className='col-lg-12 text-center d-flex align-items-center justify-content-end right-header'>
                    <button onClick={handledesktop} className='device-btn me-4'><i class="fas fa-desktop"></i></button>
                    <button onClick={handlemobile} className='device-btn'><i class="fas fa-mobile-alt"></i></button>
                </div>
                <div className='right-content shadow-sm rounded scrap-wrapper'>
                    {/* google header */}
                    <div className='google-header d-flex justify-content-center justify-content-md-start flex-wrap ps-4'>
                        <img className='google-logo me-4 mb-4' src={google} alt="" />
                        {/* google searchbar */}
                        <div className='search-wrapper position-relative mb-4'>
                            <a href='#' className='tip'>tip</a>
                            <input
                                type="text"
                                className={`goolge-search ${responsive}`}
                                placeholder='Enter a keyword to get real search result' />
                        </div>
                    </div>

                    {/* google menu */}
                    <ul className='google-menu'>
                        <li className='active'><a href="#">all</a></li>
                        <li><a href="#">images</a></li>
                        <li><a href="#">videos</a></li>
                        <li><a href="#">news</a></li>
                        <li><a href="#">maps</a></li>
                        <li><a href="#">More</a></li>
                    </ul>

                    {/*show  ad*/}
                    {showAd ?
                        <div className='website-info-wraper'>
                            <a href="https://wixsolution.com" className='link'> <strong>Ad.</strong> https://wixsolution.com/</a>
                            <h4 className='title mt-2'>WiX SEO Services</h4>
                            <p>
                                We Bring Creative Solutions to our clients
                                both in Marketing and SEO Optimization for WIX
                            </p>
                        </div> : ''
                    }

                    {/* show map */}
                    {showMap ?
                        <div className='website-info-wraper'>

                            <img src={mapImg} alt="" />
                        </div> : ''
                    }


                    {/*searched website info*/}
                    <div className='website-info-wraper position-relative'>
                        {showHeatmap ? <img src={heatmap} alt="" className='heatmap' /> : ''}
                        <a href="#" className='link'>{url}</a>
                        <h4 className='title mt-2'>{title}</h4>
                        <p>
                            {showdata ? <span className='date'>Aug 20 2021-</span> : ''}
                            {des}
                        </p>
                        {showRatings ? <div className='ratings-wrapper d-flex'>
                            {/* ratings */}
                            <div className='ratings d-flex align-items-center'>
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="fas fa-star"></i></span>
                            </div>

                            {/* rating info */}
                            <span className='ratings-info'>Rating 4.1/5 -112 votes</span>
                        </div> : ''}
                    </div>

                    {/* sceleton */}
                    <div className='website-info-wraper'>
                        <div class="search-result is-placeholder mt-4">
                            <div><span class="snippet-url uk-display-block"></span></div>
                            <div><span class="snippet-title"></span></div>
                            <div class="snippet-descr"></div>
                        </div>
                        <div class="search-result is-placeholder mt-4">
                            <div><span class="snippet-url uk-display-block"></span></div>
                            <div><span class="snippet-title"></span></div>
                            <div class="snippet-descr"></div>
                        </div>
                        <div class="search-result is-placeholder mt-4">
                            <div><span class="snippet-url uk-display-block"></span></div>
                            <div><span class="snippet-title"></span></div>
                            <div class="snippet-descr"></div>
                        </div>
                        <div class="search-result is-placeholder mt-4">
                            <div><span class="snippet-url uk-display-block"></span></div>
                            <div><span class="snippet-title"></span></div>
                            <div class="snippet-descr"></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Rightside;
