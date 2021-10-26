import React, { Component } from "react";

class Review extends Component {
  render() {
    console.log("review");

    return (
      <li>
        <div className="comment-box">
          <img
            className="avatar"
            src="http://127.0.0.1:8080/img/user02.png"
            alt="user"
          />
          <div className="comment">
            <strong className="comment-user-name">{this.props.name}</strong>
            <p className="time">{new Date().toLocaleTimeString()}</p>
            <p className="text">{this.props.text}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Review;
