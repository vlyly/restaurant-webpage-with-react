import React, { PureComponent } from "react";
import userImage from "../img/user02.png";

class Review extends PureComponent {
  likeIncrese = () => {
    this.props.onClick(this.props.review);
  };

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
          <div className="like">
            <button className="like-button">
              <i className="far fa-heart" onClick={this.likeIncrese}></i>
            </button>
            <p className="like-count">{this.props.like}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Review;
