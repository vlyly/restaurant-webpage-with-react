import React, { Component } from "react";
import Calendar from "react-calendar";
import ReservationForm from "./reservationForm";
import "./calendar.css";
import "../style/reset.css";
import "../style/reservation.css";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.renderState(),
      userSelected: "",
    };
  }

  renderState = () => {
    let list = [];
    const today = new Date();

    for (let i = 1; i < 31; i++) {
      let day = new Date(today.getTime() + 86400000 * i);
      list.push({
        year: `${day.getFullYear()}년`,
        month: `${day.getMonth() + 1}`,
        date: `${day.getDate()}일`,
      });
    }
    return list;
  };

  confirmReserve = (obj) => {
    let index = this.state.list.findIndex((item) => item.date === obj.selected);
    const selectedDay = this.state.list.filter(
      (item) => item.date === obj.selected
    );
    console.log(obj.selected);
    console.log(this.state.list[3]);
    const list = this.state.list.map((item) => {
      if (item.date === obj.selected) {
        const newReservation = {
          name: obj.name,
          people: obj.people,
        };
        console.log(selectedDay);
        console.log(selectedDay[0].first);
        return { ...this.state.list[index], [obj.time]: newReservation };
      }
      return item;
    });

    this.setState({ list });

    console.log(selectedDay);
    console.log(obj.time);
    console.log(obj);
  };

  render() {
    console.log(this.state);
    const tomorrow = new Date(new Date().getTime() + 86400000);
    const month = new Date(new Date().getTime() + 2592000000);
    return (
      <div className="wrapper">
        <h3 className="reservation-title">Reservation</h3>
        <Calendar
          calendarType={"US"}
          minDate={tomorrow}
          maxDate={month}
          tileDisabled={({ activeStartDate, date, view }) =>
            date.getDay() === 1
          }
          defaultActiveStartDate={tomorrow}
          showNeighboringMonth={false}
          onClickDay={(value, event) => {
            let userSelected = event;
            this.setState({ userSelected });
            console.log(event);
          }}
          prev2Label={null}
          next2Label={null}
        />
        <ReservationForm
          list={this.state.list}
          userSelected={this.state.userSelected}
          onClick={this.confirmReserve}
        />
      </div>
    );
  }
}

export default Reservation;
