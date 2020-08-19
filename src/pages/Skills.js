import React, { Component } from "react";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <>
        <div className='formouterdiv'>
        <h1 className='contactustxt'>CONTACT <span style={{color:'white'}}>US</span></h1>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Yours Name"></input>
          <br />
          <label>Emali</label>
          <input type='email'></input>
          <br />

          <label >Number</label>
          <input type='number'></input>
          <br />
          <label>Message</label>
          <textarea type='text'></textarea>
          <button className='contactformbtn' type='submit'>Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default Skills;
