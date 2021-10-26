import React, { PureComponent } from "react";

class Introduce extends PureComponent {
  render() {
    console.log("introduce");
    return (
      <div className="container">
        <div className="contents">
          <img
            className="title-img"
            src="http://127.0.0.1:8080/img/restaurant.jpg"
            alt="restaurant"
          />
          <div className="info">
            <h3 className="restaurant-name">포레스트(For Rest)</h3>
            <p className="restaurant-comment">당신의 휴식을 곁들인 식사</p>
            <address>
              <a className="phone" href="tel:+82311234567">
                031-123-4567
              </a>
            </address>
            <p className="location">경기도 풀잎시 낙엽구 은행로 145</p>
            <a className="insta" href="https://www.instagram.com/#">
              www.instagram.com/for-rest
            </a>
            <p className="hours">
              Tue ~ Sun <br /> 17:00 ~ 23:00
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduce;
