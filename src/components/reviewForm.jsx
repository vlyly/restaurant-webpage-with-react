import React, { PureComponent } from "react";

class ReviewForm extends PureComponent {
  formRef = React.createRef();
  nameRef = React.createRef();
  textRef = React.createRef();

  handleInput = (event) => {
    event.preventDefault();
    let newUser = this.nameRef.current.value;
    let newComment = this.textRef.current.value;
    newUser && newComment && this.props.onPush(newUser, newComment);
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
        className="submit-review"
        onSubmit={this.handleInput}
      >
        <input
          name="userName"
          ref={this.nameRef}
          className="user-name"
          type="text"
          spellCheck="false"
          placeholder="이름"
        />
        <textarea
          name="userCommnet"
          ref={this.textRef}
          className="user-commnet"
          spellCheck="false"
          placeholder="따뜻하고 솔직한 리뷰를 남겨주세요."
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
