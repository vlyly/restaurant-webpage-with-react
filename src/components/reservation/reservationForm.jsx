import React, { Component } from "react";
import "../style/reset.css";
import "../style/reservation.css";

class ReservationForm extends Component {
  rv_formRef = React.createRef();
  rv_nameRef = React.createRef();
  rv_timeRef = React.createRef();
  rv_peopleRef = React.createRef();

  handleInput = (event) => {
    event.preventDefault();
    const name = this.rv_nameRef.current.value;
    const time = this.rv_timeRef.current.value;
    const people = this.rv_peopleRef.current.value;
    const selected = this.props.userSelected.target.innerText;
    if (name === "") {
      alert("이름을 입력하세요.");
      return false;
    }
    if (time === "") {
      alert("예약 시간을 설정해주세요.");
      return false;
    }
    if (people === "") {
      alert("예약 인원을 설정하세요.");
      return false;
    }

    this.rv_formRef.current.reset();
    this.props.onClick({ name, time, people, selected });
  };

  render() {
    return (
      <form
        name="submitReservation"
        ref={this.rv_formRef}
        action="#"
        method="GET"
        className="reservation-form"
        onSubmit={this.handleInput}
        spellCheck={false}
      >
        <div>
          <label htmlFor="name">이름</label>
          <input
            ref={this.rv_nameRef}
            id="name"
            className="reservation-name"
            type="text"
            maxLength="5"
          />
        </div>
        <div>
          <label htmlFor="time">시간</label>
          <select ref={this.rv_timeRef} id="time" className="reservation-time">
            <option value="" hidden={true}></option>
            <option value="first">17시</option>
            <option value="second">18시</option>
            <option value="third">19시</option>
            <option value="fourth">20시</option>
            <option value="fifth">21시</option>
          </select>
        </div>
        <div>
          <label>예약인원</label>
          <select ref={this.rv_peopleRef} id="people" className="visit-people">
            <option value="" hidden={true}></option>
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
          </select>
        </div>
        <button
          name="submitButton"
          className="reservation-submit-button"
          type="submit"
          title="예약하기"
        >
          예약하기
        </button>
      </form>
    );
  }
}

export default ReservationForm;
