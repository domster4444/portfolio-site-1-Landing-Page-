import React, { Component } from "react";
import "./Portfolio.css";
import gitlogo from "../icons/whitegit.png";
import hostedsitelogo from "../icons/whitewebsite.png";
import htmllogo from '../icons/skills_used_icons/html.png'
import csslogo from '../icons/skills_used_icons/css.png'
import javascriptlogo from '../icons/skills_used_icons/javascript.png'
import reactlogo from '../icons/skills_used_icons/react.png'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfoliocontainer">
        <div className="portfoliomaintxtcontainer">
          <p className="portfoliomaintxt">Portfolio</p>
        </div>

        <div className="portfoliogridcontainer">
          <div className="card1portfolio">
            <div
              className="portfolio"
              id="portfolioid1"
              onMouseEnter={() => clickedcard1ofportfolio()}
              onMouseLeave={() => clickedremovedcard1ofportfolio()}
            >
              <div className="portfolio_div_inner_animated_div1">
                <a href='https://google.com'  target='_blank'  rel="noopener noreferrer">
                <img
                  src={gitlogo}
                  alt="git logo"
                  className="gitlogoclsofportfolio"
                /></a>
                <a href='https://fb.com'  target='_blank'  rel="noopener noreferrer">
                <img
                  src={hostedsitelogo}
                  alt="Hosted website logo"
                  className="websitelogoclsofportfolio"
                /></a>
              </div>
              <div className='customimageforcard1'></div>
<p className='cardtxtofportfolio'>This project was great to uplift my skills more above.Everything was fine,and the work went smoothly</p>
            
<br/><div className='usedskillscls'>Used Skills:<img src={htmllogo} alt='html logo' className='skilllogo'/><img src={csslogo} alt='css logo' className='skilllogo'/><img src={javascriptlogo} alt='javascript logo' className='skilllogo'/><img src={reactlogo} alt='react logo' className='skilllogo'/></div>
</div>
          </div>


          <div className="card2portfolio">
            <div
              className="portfolio"
              id="portfolioid2"
              onMouseEnter={() => clickedcard2ofportfolio()}
              onMouseLeave={() => clickedremovedcard2ofportfolio()}
            >
              <div className="portfolio_div_inner_animated_div2">
              <a href='https://google.com'  target='_blank'  rel="noopener noreferrer">  
              <img
                  src={gitlogo}
                  alt="git logo"
                  className="gitlogoclsofportfolio"
                /></a>
                <a href='https://google.com'  target='_blank'  rel="noopener noreferrer">
                <img
                  src={hostedsitelogo}
                  alt="Hosted website logo"
                  className="websitelogoclsofportfolio"
                /></a>
              </div>
              <div className='customimageforcard2'></div>
<p className='cardtxtofportfolio'>This project was great to uplift my skills more above.Everything was fine,and the work went smoothly</p>
<br/><div className='usedskillscls'>Used Skills:<img src={htmllogo} alt='html logo' className='skilllogo'/><img src={csslogo} alt='css logo' className='skilllogo'/><img src={javascriptlogo} alt='javascript logo' className='skilllogo'/><img src={reactlogo} alt='react logo' className='skilllogo'/></div>
            
              </div>
          </div>
          <div className="card3portfolio">
            <div
              className="portfolio"
              id="portfolioid3"
              onMouseEnter={() => clickedcard3ofportfolio()}
              onMouseLeave={() => clickedremovedcard3ofportfolio()}
            >
              <div className="portfolio_div_inner_animated_div3">
              <a href='https://google.com'  target='_blank'  rel="noopener noreferrer">
                
              <img
                  src={gitlogo}
                  alt="git logo"
                  className="gitlogoclsofportfolio"
                />
              </a>
              <a href='https://google.com'  target='_blank'  rel="noopener noreferrer">
                
              <img
                  src={hostedsitelogo}
                  alt="Hosted website logo"
                  className="websitelogoclsofportfolio"
                />
              </a>
                </div>
              <div className='customimageforcard3'></div>
              <p className='cardtxtofportfolio'>This project was great to uplift my skills more above.Everything was fine,and the work went smoothly</p>
              <br/><div className='usedskillscls'>Used Skills:<img src={htmllogo} alt='html logo' className='skilllogo'/><img src={csslogo} alt='css logo' className='skilllogo'/><img src={javascriptlogo} alt='javascript logo' className='skilllogo'/><img src={reactlogo} alt='react logo' className='skilllogo'/></div>

            </div>
          </div>
          <div className="card4portfolio">
            <div
              className="portfolio"
              id="portfolioid4"
              onMouseEnter={() => clickedcard4ofportfolio()}
              onMouseLeave={() => clickedremovedcard4ofportfolio()}
            >
              <div className="portfolio_div_inner_animated_div4">
              <a href='https://google.com'  target='_blank'  rel="noopener noreferrer">
                
              <img
                  src={gitlogo}
                  alt="git logo"
                  className="gitlogoclsofportfolio"
                />
              </a>
              <a href='https://google.com' target='_blank'  rel="noopener noreferrer">
                
              <img
                  src={hostedsitelogo}
                  alt="Hosted website logo"
                  className="websitelogoclsofportfolio"
                />
              </a>
                </div>
              <div className='customimageforcard4'></div>
              <p className='cardtxtofportfolio'>This project was great to uplift my skills more above.Everything was fine,and the work went smoothly</p>
              <br/><div className='usedskillscls'>Used Skills:<img src={htmllogo} alt='html logo' className='skilllogo'/><img src={csslogo} alt='css logo' className='skilllogo'/><img src={javascriptlogo} alt='javascript logo' className='skilllogo'/><img src={reactlogo} alt='react logo' className='skilllogo'/></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
// card1 hover

// increasing height of inner div
function clickedcard1ofportfolio() {
  document.getElementsByClassName(
    "portfolio_div_inner_animated_div1"
  )[0].style.height = "40%";

  // visibling the logos

  document.getElementsByClassName("gitlogoclsofportfolio")[0].style.opacity =
    "1";

  document.getElementsByClassName(
    "websitelogoclsofportfolio"
  )[0].style.opacity = "1";
  // invisibling text when hovered
  document.getElementsByClassName(
    "cardtxtofportfolio"
  )[0].style.opacity = "0";
  // invisibling used skills section when hovered
  document.getElementsByClassName(
    "usedskillscls"
  )[0].style.opacity = "0";


}

// decreasing height of inner card div
function clickedremovedcard1ofportfolio() {
  document.getElementsByClassName(
    "portfolio_div_inner_animated_div1"
  )[0].style.height = "0%";

  // invisibling the logos

  document.getElementsByClassName("gitlogoclsofportfolio")[0].style.opacity =
    "0";
  document.getElementsByClassName(
    "websitelogoclsofportfolio"
  )[0].style.opacity = "0";

  // visibling text when hover is removed
  document.getElementsByClassName(
    "cardtxtofportfolio"
  )[0].style.opacity = "1";


  // visibling usedskills section when hover is removed
  document.getElementsByClassName(
    "usedskillscls"
  )[0].style.opacity = "1";

}




// card2 hover
function clickedcard2ofportfolio() {
  document.getElementsByClassName(
    "portfolio_div_inner_animated_div2"
  )[0].style.height = "40%";

  // visibling the logos

  document.getElementsByClassName("gitlogoclsofportfolio")[1].style.opacity =
    "1";

  document.getElementsByClassName(
    "websitelogoclsofportfolio"
  )[1].style.opacity = "1";

    // invisibling text when hovered
    document.getElementsByClassName(
      "cardtxtofportfolio"
    )[1].style.opacity = "0";
      // invisibling used skills section when hovered
  document.getElementsByClassName(
    "usedskillscls"
  )[1].style.opacity = "0";

  

}
function clickedremovedcard2ofportfolio() {
  document.getElementsByClassName(
    "portfolio_div_inner_animated_div2"
  )[0].style.height = "0%";

  // invisibling the logos

  document.getElementsByClassName("gitlogoclsofportfolio")[1].style.opacity =
    "0";
  document.getElementsByClassName(
    "websitelogoclsofportfolio"
  )[1].style.opacity = "0";

  // visibling text when hover is removed
  document.getElementsByClassName(
    "cardtxtofportfolio"
  )[1].style.opacity = "1";

  // visibling usedskills section when hover is removed
  document.getElementsByClassName(
    "usedskillscls"
  )[1].style.opacity = "1";

}
// card3 hover
function clickedcard3ofportfolio() {
  document.getElementsByClassName(
    "portfolio_div_inner_animated_div3"
  )[0].style.height = "40%";

  // visibling the logos

  document.getElementsByClassName("gitlogoclsofportfolio")[2].style.opacity =
    "1";

  document.getElementsByClassName(
    "websitelogoclsofportfolio"
  )[2].style.opacity = "1";


    // invisibling text when hovered
    document.getElementsByClassName(
      "cardtxtofportfolio"
    )[2].style.opacity = "0";
    // invisibling used skills section when hovered
    document.getElementsByClassName(
      "usedskillscls"
    )[2].style.opacity = "0";
  
}
function clickedremovedcard3ofportfolio() {
  document.getElementsByClassName(
    "portfolio_div_inner_animated_div3"
  )[0].style.height = "0%";

  // invisibling the logos

  document.getElementsByClassName("gitlogoclsofportfolio")[2].style.opacity =
    "0";
  document.getElementsByClassName(
    "websitelogoclsofportfolio"
  )[2].style.opacity = "0";
  // visibling text when hover is removed
  document.getElementsByClassName(
    "cardtxtofportfolio"
  )[2].style.opacity = "1";

  // visibling usedskills section when hover is removed
  document.getElementsByClassName(
    "usedskillscls"
  )[2].style.opacity = "1";

}
// card 4 hover

function clickedcard4ofportfolio() {
  document.getElementsByClassName(
    "portfolio_div_inner_animated_div4"
  )[0].style.height = "40%";

  // visibling the logos

  document.getElementsByClassName("gitlogoclsofportfolio")[3].style.opacity =
    "1";

  document.getElementsByClassName(
    "websitelogoclsofportfolio"
  )[3].style.opacity = "1";

  // invisibling text when hovered
  document.getElementsByClassName(
    "cardtxtofportfolio"
  )[3].style.opacity = "0";

    // invisibling used skills section when hovered
    document.getElementsByClassName(
      "usedskillscls"
    )[3].style.opacity = "0";
  
}
function clickedremovedcard4ofportfolio() {
  document.getElementsByClassName(
    "portfolio_div_inner_animated_div4"
  )[0].style.height = "0%";

  // invisibling the logos

  document.getElementsByClassName("gitlogoclsofportfolio")[3].style.opacity =
    "0";
  document.getElementsByClassName(
    "websitelogoclsofportfolio"
  )[3].style.opacity = "0";
  // visibling text when hover is removed
  document.getElementsByClassName(
    "cardtxtofportfolio"
  )[3].style.opacity = "1";


  // visibling usedskills section when hover is removed
  document.getElementsByClassName(
    "usedskillscls"
  )[3].style.opacity = "1";

}
