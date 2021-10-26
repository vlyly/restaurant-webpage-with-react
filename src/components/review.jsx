import React, { Component } from "react";
import userImage from "../img/user02.png";

class Review extends Component {
  render() {
    console.log("review");

    return (
      <li>
        <div className="comment-box">
          <img className="avatar" src={userImage} alt="user" />
          <div className="comment">
            <strong className="comment-user-name">{this.props.name}</strong>
            <p className="time">{this.props.date}</p>
            <p className="text">{this.props.text}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Review;
