import React, { Component } from "react";
import Introduce from "./components/introduce";
import ReviewForm from "./components/reviewForm";
import Review from "./components/review";
import "./style/style.css";
import "./style/reset.css";

class App extends Component {
  state = {
    reviews: [],
  };

  handleInput = (newUser, newComment) => {
    let reviews = [...this.state.reviews].map((review) => review);
    const newReview = {
      id: new Date().getTime(),
      name: newUser,
      date: new Date().toLocaleTimeString(),
      text: newComment,
      like: 0,
    };
    reviews.unshift(newReview);
    this.setState({ reviews });

    console.log(this.state);
  };

  likeIncrease = (review) => {
    let reviews = [...this.state.reviews].map((item) => {
      if (item.id === review.id) {
        return { ...review, like: review.like + 1 };
      }
      return item;
    });

    this.setState({ reviews });
  };

  render() {
    console.log("app");

    return (
      <React.StrictMode>
        <div className="wrapper">
          <Introduce />
          <ReviewForm onPush={this.handleInput} />
          <ul className="review-list">
            {this.state.reviews.map((review) => (
              <Review
                review={review}
                id={review.id}
                name={review.name}
                date={review.date}
                text={review.text}
                like={review.like}
                onClick={this.likeIncrease}
              />
            ))}
          </ul>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
