import React, { Component } from "react";
import "./Card.css";
// const style for card



class card extends Component {
  render(props) {
    return (
      <div className="maindivofcardcompo">
        <div className="cardbox" >
          <img src={this.props.cardimage} alt="card" />
          <h1 >{this.props.cardtopic}</h1>
          <h4 className="cardnamecls">{this.props.cardinfo}</h4>
        </div>
      </div>
    );
  }
}

export default card;
