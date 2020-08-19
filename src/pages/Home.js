import React from "react";
import "./Home.css";


import bigmobileimage from "./assets/big_mobile_svg.png";
import thirdsectionimage from "./assets/big_screenshots_image.png";
// fourth section images
import fourthsectionimage from "./assets/mobile_image.png";
// fifth section images
import fifthsectionimage from "./assets/mobile_image_blue_background.png";
// sixth section image
import sixthsectionimage from "./assets/mobile_image_yellow_background.png";
// last section
import lastimage from './assets/bottom_mobile_image.png'

const Home = () => {
  return (
    <>
    <div style={{marginTop:'90px'}}  className='halfpiece'>
    <div className="container1grid1">
      <div className="container1grid1Card1">
        <div className="big_text">
          Next Level Voice Recording
        </div>
        <div className="small_paragraph">
          AnyVoice is an awesome app that allows you change your voice to
          anyone else’s in the world. App will be released sometime in 2050
        </div>
        <form>
        <div className="input_email">
          <div className="inputboxwithgreyborder">
           
          <input type='email'
              placeholder="Enter your email"
              className="input_tag"
            ></input>
          </div>
          <button type='submit' className='clsbtnget'>Get notified</button>
        </div>
        </form>
      </div>

      <div className="container1grid1Card2">
        <img src={bigmobileimage} className="bmobimg" alt='nothing'></img>
      </div>
    </div>

    {/*second section for icons*/}
    <div className="second_section">
      <div className="icon1box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="127"
          height="117"
          viewBox="0 0 127 117"
          fill="none"
        >
          <rect
            x="12.5"
            y="2.5"
            width="112"
            height="112"
            stroke="#FF003D"
            strokeWidth="5"
          />
          <path
            d="M68.9987 64.125C71.032 64.125 72.9821 63.3348 74.4199 61.9283C75.8576 60.5218 76.6654 58.6141 76.6654 56.625V47.25C76.6654 45.2609 75.8576 43.3532 74.4199 41.9467C72.9821 40.5402 71.032 39.75 68.9987 39.75C66.9654 39.75 65.0153 40.5402 63.5775 41.9467C62.1398 43.3532 61.332 45.2609 61.332 47.25V56.625C61.332 58.6141 62.1398 60.5218 63.5775 61.9283C65.0153 63.3348 66.9654 64.125 68.9987 64.125ZM65.1654 47.25C65.1654 46.2554 65.5692 45.3016 66.2881 44.5983C67.007 43.8951 67.982 43.5 68.9987 43.5C70.0154 43.5 70.9904 43.8951 71.7093 44.5983C72.4282 45.3016 72.832 46.2554 72.832 47.25V56.625C72.832 57.6196 72.4282 58.5734 71.7093 59.2766C70.9904 59.9799 70.0154 60.375 68.9987 60.375C67.982 60.375 67.007 59.9799 66.2881 59.2766C65.5692 58.5734 65.1654 57.6196 65.1654 56.625V47.25Z"
            fill="white"
          />
          <path
            d="M82.4154 56.625C82.4154 56.1277 82.2134 55.6508 81.854 55.2992C81.4945 54.9475 81.007 54.75 80.4987 54.75C79.9904 54.75 79.5029 54.9475 79.1434 55.2992C78.784 55.6508 78.582 56.1277 78.582 56.625C78.582 59.1114 77.5724 61.496 75.7751 63.2541C73.9779 65.0123 71.5404 66 68.9987 66C66.457 66 64.0195 65.0123 62.2223 63.2541C60.425 61.496 59.4154 59.1114 59.4154 56.625C59.4154 56.1277 59.2134 55.6508 58.854 55.2992C58.4945 54.9475 58.007 54.75 57.4987 54.75C56.9904 54.75 56.5029 54.9475 56.1434 55.2992C55.784 55.6508 55.582 56.1277 55.582 56.625C55.5858 59.7785 56.7501 62.8252 58.8618 65.2078C60.9735 67.5903 63.8916 69.1495 67.082 69.6V73.5H63.0379C62.5855 73.5 62.1516 73.6758 61.8317 73.9888C61.5118 74.3017 61.332 74.7262 61.332 75.1687V75.5813C61.332 76.0238 61.5118 76.4483 61.8317 76.7612C62.1516 77.0742 62.5855 77.25 63.0379 77.25H74.9595C75.4119 77.25 75.8458 77.0742 76.1657 76.7612C76.4856 76.4483 76.6654 76.0238 76.6654 75.5813V75.1687C76.6654 74.7262 76.4856 74.3017 76.1657 73.9888C75.8458 73.6758 75.4119 73.5 74.9595 73.5H70.9154V69.6C74.1058 69.1495 77.0239 67.5903 79.1356 65.2078C81.2473 62.8252 82.4116 59.7785 82.4154 56.625Z"
            fill="white"
          />
          <circle cx="16.5" cy="74.5" r="16.5" fill="#FFFF24" />
        </svg>
      </div>

      <div className="icon2box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="123"
          height="117"
          viewBox="0 0 123 117"
          fill="none"
        >
          <circle
            cx="64.5"
            cy="58.5"
            r="56"
            stroke="#FFFF24"
            strokeWidth="5"
          />
          <path
            d="M68.8687 73.4999H68.475C67.6814 73.4212 66.9336 73.0915 66.3402 72.5588C65.7467 72.026 65.3386 71.318 65.175 70.5374L60.15 47.2499L54.975 59.2499C54.8286 59.5853 54.5873 59.8706 54.2808 60.0705C53.9743 60.2704 53.6159 60.3762 53.25 60.3749H47.625C47.1277 60.3749 46.6508 60.1774 46.2992 59.8258C45.9475 59.4741 45.75 58.9972 45.75 58.4999C45.75 58.0027 45.9475 57.5257 46.2992 57.1741C46.6508 56.8225 47.1277 56.6249 47.625 56.6249H52.0125L56.7188 45.7687C57.0356 45.0402 57.5755 44.4311 58.2608 44.0293C58.9461 43.6274 59.7413 43.4536 60.5318 43.5329C61.3222 43.6121 62.0671 43.9404 62.6589 44.4702C63.2508 45.0001 63.6591 45.7043 63.825 46.4812L68.85 69.7499L74.025 57.7874C74.1657 57.445 74.4045 57.1519 74.7115 56.945C75.0185 56.7382 75.3798 56.6268 75.75 56.6249H81.375C81.8723 56.6249 82.3492 56.8225 82.7008 57.1741C83.0525 57.5257 83.25 58.0027 83.25 58.4999C83.25 58.9972 83.0525 59.4741 82.7008 59.8258C82.3492 60.1774 81.8723 60.3749 81.375 60.3749H76.9875L72.2812 71.2312C71.9939 71.8996 71.5182 72.4701 70.9123 72.8729C70.3064 73.2757 69.5963 73.4936 68.8687 73.4999Z"
            fill="white"
          />
          <circle cx="16.5" cy="85.5" r="16.5" fill="#FF003D" />
        </svg>
      </div>

      <div className="icon2box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="153"
          height="116"
          viewBox="0 0 153 116"
          fill="none"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M82.1314 8.04503L146.859 99.9308C150.36 104.9 146.806 111.75 140.728 111.75H11.272C5.19417 111.75 1.64038 104.9 5.14058 99.9308L69.8686 8.04502C72.8561 3.80398 79.1439 3.80398 82.1314 8.04503Z"
              stroke="#C505F6"
              strokeWidth="5"
            />
            <circle cx="26.5" cy="52.5" r="17.5" fill="#FFFF24" />
            <g clipPath="url(#clip0)">
              <path
                d="M75.5 54.75C85.8556 54.75 94.25 63.1444 94.25 73.5C94.25 83.8556 85.8556 92.25 75.5 92.25C65.1444 92.25 56.75 83.8556 56.75 73.5C56.75 63.1444 65.1444 54.75 75.5 54.75ZM75.5 58.5C71.5218 58.5 67.7064 60.0804 64.8934 62.8934C62.0804 65.7064 60.5 69.5218 60.5 73.5C60.5 77.4782 62.0804 81.2936 64.8934 84.1066C67.7064 86.9196 71.5218 88.5 75.5 88.5C79.4782 88.5 83.2936 86.9196 86.1066 84.1066C88.9196 81.2936 90.5 77.4782 90.5 73.5C90.5 69.5218 88.9196 65.7064 86.1066 62.8934C83.2936 60.0804 79.4782 58.5 75.5 58.5V58.5ZM84.875 75.375C84.875 77.8614 83.8873 80.246 82.1291 82.0041C80.371 83.7623 77.9864 84.75 75.5 84.75C73.0136 84.75 70.629 83.7623 68.8709 82.0041C67.1127 80.246 66.125 77.8614 66.125 75.375H84.875Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="-2.74609"
              y="2.36426"
              width="157.491"
              height="119.886"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <clipPath id="clip0">
              <rect
                width="45"
                height="45"
                fill="white"
                transform="translate(53 48)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>

    {/*Below is third section for full back ground image*/}

    <div className="third_section">
      <img
        src={thirdsectionimage}
        alt="thirdsectionimmagee"
        className="thirdsectionimagetag"
      ></img>
    </div>
    {/*Below is fourth seciton */}
    <div className="fourth_section">
      <div className="fourth_section_card1">
        <div className="hrline">
          <div className="pinkcircle"></div>
        </div>
        <img
          src={fourthsectionimage}
          alt=" fourth imaages"
          className="fourthsectionimage"
        ></img>
      </div>

      <div className="fourth_section_card2">
        <div className="fourth_section_small_btn">3 easy steps</div>
        <p className="fourth_section_big_txt">
           How it works
        </p>

        <ul>
          <li className="first_li">
            <span className="spantag">1</span>Take a sample of anyone's
            voice
          </li>
          <li className="second_li">
            <span className="spantag">2</span>Make your own voice recording
            in high quality
          </li>
          <li className="third_li">
            <span className="spantag">3</span>Add effect and sound like
            other people
          </li>
        </ul>
      </div>
    </div>

    {/*Fifth section*/}
    <div className="fifth_section">
      <div className="infosection">
        <p className="fifth_section_card1_big_txt">Analyzing Voice</p>
        <p className="paragraphtag">
          AnyVoice uses an artificially intelligent system that learns a
          person’s voice by analyzing speech recordings and audio files /
          video files as well as identifying the relationships between them.
        </p>
      </div>
      <div>
        <img src={fifthsectionimage} alt="fifth immage" className='fifthimgcls'></img>
      </div>
    </div>
    {/*Sixth section */}

    <div className="sixth_section">
      <div className="sixth_section_card1">
        <img
          src={sixthsectionimage}
          alt="sixth immaagee"
          className="sixthimagecls"
        />
      </div>
      <div className="sixth_section_card2">
        <div className="infosection">
          <p className="fifth_section_card1_big_txt">
            See? Its gonna be aweseome
          </p>
          <p className="paragraphtag">
            AnyVoice uses an artificially intelligent system that learns a
            person’s voice by analyzing speech recordings and audio files /
            video files as well as identifying the relationships between
            them.
          </p>
        </div>
      </div>
    </div>

    {/*seventh section*/}
    <div className="seventh_section">
      <div className="seventh_section_inner_div">
        <div className="card1seventh">
          <div
            className="big_text"
            style={{ fontSize: "30px", marginTop: "60px" }}
          >
            Taking voice recording to the next level
          </div>
          <div className="small_paragraph">
            AnyVoice is an awesome app that allows you change your voice to
            anyone else’s in the world. App will be released sometime in
            2050
          </div>
          <form>
          <div className="input_email">
            <div className="inputboxwithgreyborder">
              <input
              type='email'
                placeholder="Enter your email"
                className="input_tag"
              ></input>
            </div>
            <button type='submit' style={{background:'white',color:'black'}} className="clsbtnget2">Get notified</button>
          </div>
        </form>
          </div>

        <div className="card2seventh" style={{display:'flex',justifyContent:'center',alignItems:'center'}}><img src={lastimage} alt='this is last imageee' className='lstimgcls' style={{width:'300px',height:'350px'}}/></div>
      </div>
    </div>


    
  </div>

    </>
  );
};

export default Home;
