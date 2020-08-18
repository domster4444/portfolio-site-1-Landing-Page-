import React, { Component } from "react";
import "./Skills.css";

import htmllogo from "../icons/skills_used_icons/html.png";
import csslogo from "../icons/skills_used_icons/css.png";
import javascriptlogo from "../icons/skills_used_icons/javascript.png";
import reactlogo from "../icons/skills_used_icons/react.png";
import wordpresslogo from "../icons/skills_used_icons/wordpress.png";

class Skills extends Component {
  render() {
    return (
      <div className="mainskillcontainer">
        <p className="skillpara">
          I am familiar with following set of technologies
        </p>
        <div className="logoclsofskills">
        <img src={htmllogo} alt='logo of html' className='logoofskillsjs'/>
        <img src={csslogo} alt='logo of css' className='logoofskillsjs'/>
        <img src={javascriptlogo} alt='logo of javascript' className='logoofskillsjs'/>
        <img src={reactlogo} alt='logo of react' className='logoofskillsjs'/> 
          <img src={wordpresslogo} alt='logo of wordpress' className='logoofskillsjs' />
        </div>
      </div>
    );
  }
}

export default Skills;
