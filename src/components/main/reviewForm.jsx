import React, { PureComponent } from "react";

class ReviewForm extends PureComponent {
  formRef = React.createRef();
  nameRef = React.createRef();
  textRef = React.createRef();

  handleInput = (event) => {
    event.preventDefault();
    let newUser = this.nameRef.current.value;
    let newComment = this.textRef.current.value;

    if (newUser === "") {
      alert("이름을 입력해주세요.");
      return false;
    }

    if (newComment === "") {
      alert("리뷰를 입력해주세요.");
      return false;
    }

    this.props.onPush(newUser, newComment);
    this.formRef.current.reset();
  };
  render() {
    console.log("reviewFrom");
    return (
      <form
        name="submitReview"
        ref={this.formRef}
        action="#"
        method="GET"
        onSubmit={this.handleInput}
        spellCheck={false}
        autoComplete={false}
        className="submit-form"
      >
        <input
          name="userName"
          ref={this.nameRef}
          className="user-name"
          type="text"
          spellCheck="false"
          maxLength="5"
          placeholder="이름"
        />
        <textarea
          name="userCommnet"
          ref={this.textRef}
          className="user-commnet"
          spellCheck="false"
          maxLength="200"
          placeholder="따뜻하고 솔직한 리뷰를 남겨주세요. (최대 200자)"
        />
        <button
          name="submitButton"
          className="submit-button"
          type="submit"
          title="입력하기"
        >
          입력
        </button>
      </form>
    );
  }
}

export default ReviewForm;
