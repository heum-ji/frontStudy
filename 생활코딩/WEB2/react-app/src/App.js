import { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import "./App.css";

class App extends Component {
  constructor(props) {
    // 생성자 : render() 보다 먼저 실행됨 - 초기화
    super(props);
    this.state = {
      // state 값 초기화
      subject: { title: "WEB", sub: "World Wide Web!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  // class 내부 함수는 Function 생략
  render() {
    return (
      // Component는 하나의 최상위 태그로 시작되어야 함
      // Create React App : JSX -> JS로 Converting 해줌
      <div className="App">
        <Subject
          title={this.state.subject.title} // 상위 컴포넌트 -> 하위 컴포넌트 state 사용
          sub={this.state.subject.sub}
        ></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content
          title="HTML"
          desc="HTML is HyperText Markup Language."
        ></Content>
      </div>
    );
  }
}

export default App;
