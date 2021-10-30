import React, { Component } from "react";
import Review from "./review";

class Reviews extends Component {
  likeIncrease = (review) => {
    this.props.onClick(review);
  };
  render() {
    return (
      <ul className="review-list">
        {this.props.reviews.map((review) => (
          <Review
            review={review}
            id={review.id}
            key={review.id}
            name={review.name}
            date={review.date}
            text={review.text}
            like={review.like}
            onClick={this.likeIncrease}
            clicked={review.clicked && "#dc143c"}
          />
        ))}
      </ul>
    );
  }
}

export default Reviews;
