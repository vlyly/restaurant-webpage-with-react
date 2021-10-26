import React, { Component } from "react";

class Review extends Component {
  render() {
    console.log("review");

    return (
      <li>
        <div className="comment-box">
          <img className="avatar" src="./img/user02.png" alt="user" />
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
