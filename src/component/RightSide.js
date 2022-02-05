import mapImg from "../../src/image/map.png";
import google from "../../src/image/google.png";
import heatmap from "../../src/image/heatmap.png";
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
  responsive,
}) => {
  return (
    <>
      <div className="col-lg-8 mt-4">
        <div
          style={
            responsive === "mobile" ? { width: "400px", margin: "0 auto", transition: '-moz-initial.5s', transition: '.5s' } : { width: "100%", transition: '-moz-initial.5s', transition: '.5s' }
          }
        >
          {/* buttons */}
          <div className="col-lg-12 text-center d-flex align-items-center justify-content-end right-header">
            <button onClick={handledesktop} className="device-btn me-4">
              <i className="fas fa-desktop"></i>
            </button>
            <button onClick={handlemobile} className="device-btn">
              <i className="fas fa-mobile-alt"></i>
            </button>
          </div>
          <div className="right-content shadow-sm rounded scrap-wrapper">
            {/* google header */}
            <div className="google-header d-flex justify-content-center justify-content-md-start flex-wrap ps-4">
              <img className="google-logo me-4 mb-4" src={google} alt="" />
              {/* google searchbar */}
              <div className="search-wrapper position-relative mb-4">
                <a href="#" className="tip">
                  tip
                </a>
                <input
                  type="text"
                  className={`goolge-search ${responsive}`}
                  placeholder="Enter a keyword to get real search result"
                />
              </div>
            </div>

            {/* google menu */}
            <ul className={`google-menu ${responsive}`}>
              <li className="active">
                <a href="#">all</a>
              </li>
              <li>
                <a href="#">images</a>
              </li>
              <li>
                <a href="#">videos</a>
              </li>
              <li>
                <a href="#">news</a>
              </li>
              <li>
                <a href="#">maps</a>
              </li>
              <li>
                <a href="#">More</a>
              </li>
            </ul>

            {/*show  ad*/}
            {showAd ? (
              <div className="website-info-wraper">
                <a href="https://wixsolution.com" className="link">
                  {" "}
                  <strong>Ad.</strong> https://wixsolution.com/
                </a>
                <h4 className="title mt-2" >WiX SEO Services</h4>
                <p>
                  We Bring Creative Solutions to our clients both in Marketing
                  and SEO Optimization for WIX
                </p>
              </div>
            ) : (
              ""
            )}

            {/* show map */}
            {showMap ? (
              <div className="website-info-wraper">
                <img src={mapImg} alt="" className="w-100" />
              </div>
            ) : (
              ""
            )}

            {/*searched website info*/}
            <div className="website-info-wraper position-relative">
              {showHeatmap ? (
                <img src={heatmap} alt="" className="heatmap" />
              ) : (
                ""
              )}
              <a href="#" className="link">
                {url}
              </a>
              <h4 className="title mt-2" id="scrp_title">{title}</h4>
              <p>
                {showdata ? <span className="date">Aug 20 2021-</span> : ""}
                {des}
              </p>
              {showRatings ? (
                <div className="ratings-wrapper d-flex">
                  {/* ratings */}
                  <div className="ratings d-flex align-items-center">
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                  </div>

                  {/* rating info */}
                  <span className="ratings-info">Rating 4.1/5 -112 votes</span>
                </div>
              ) : (
                ""
              )}
            </div>

            {/* sceleton */}
            <div className={`website-info-wraper ${responsive}`}>
              <div className="search-result is-placeholder mt-4">
                <div>
                  <span className="snippet-url uk-display-block"></span>
                </div>
                <div>
                  <span className="snippet-title"></span>
                </div>
                <div className="snippet-descr"></div>
              </div>
              <div className="search-result is-placeholder mt-4">
                <div>
                  <span className="snippet-url uk-display-block"></span>
                </div>
                <div>
                  <span className="snippet-title"></span>
                </div>
                <div className="snippet-descr"></div>
              </div>
              <div className="search-result is-placeholder mt-4">
                <div>
                  <span className="snippet-url uk-display-block"></span>
                </div>
                <div>
                  <span className="snippet-title"></span>
                </div>
                <div className="snippet-descr"></div>
              </div>
              <div className="search-result is-placeholder mt-4">
                <div>
                  <span className="snippet-url uk-display-block"></span>
                </div>
                <div>
                  <span className="snippet-title"></span>
                </div>
                <div className="snippet-descr"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightside;
