import { Component } from "react";

class Content extends Component {
    render() {
      return (
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
  }

  export default Content; // 외부에서 사용할 수 있게 설정