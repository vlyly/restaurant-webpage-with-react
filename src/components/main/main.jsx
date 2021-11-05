import React, { Component } from "react";
import Introduce from "./introduce";
import ReviewForm from "./reviewForm";
import Reviews from "./reviews";
import "../style/main.css";
import "../style/reset.css";

class Main extends Component {
  state = {
    // reviews: [],
    reviews: [
      {
        id: 1,
        name: "노제",
        date: "오후 4:45:15",
        text: "헤이마마~",
        like: 12,
        clicked: true,
      },
      {
        id: 2,
        name: "허니제이",
        date: "오후 4:47:00",
        text: "안녕 나는 홀리뱅의 꿀제이!",
        like: 5,
        clicked: false,
      },
      {
        id: 3,
        name: "효진초이",
        date: "오후 4:50:49",
        text: "고생만 죽어라 하고 작렬히 전사...",
        like: 28,
        clicked: true,
      },
      {
        id: 4,
        name: "모니카",
        date: "오후 4:55:31",
        text: "참신함을 모르는 당신이 불쌍해!",
        like: 15,
        clicked: false,
      },
    ],
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
        review.clicked = true;
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
          <Reviews reviews={this.state.reviews} onClick={this.likeIncrease} />
        </div>
      </React.StrictMode>
    );
  }
}

export default Main;
