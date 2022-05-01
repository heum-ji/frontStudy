import { Component } from "react";

class Subject extends Component {
    render() {
      // class 내부 함수는 Function 생략
      return (
        // Component는 하나의 최상위 태그로 시작되어야 함
        <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;