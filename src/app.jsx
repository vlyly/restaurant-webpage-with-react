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
      recommand: 0,
    };
    reviews.unshift(newReview);
    this.setState({ reviews });
    console.log(this.state);
  };

  render() {
    console.log("app");

    return (
      <React.StrictMode>
        <div className="wrapper">
          <Introduce />
          <ReviewForm onPush={this.handleInput} />
          <ul>
            {this.state.reviews.map((review) => (
              <Review
                id={review.id}
                name={review.name}
                date={review.date}
                text={review.text}
                recommand={review.recommand}
              />
            ))}
          </ul>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
