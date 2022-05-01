import { Component } from "react";

class TOC extends Component {
  render() {
    let lists = [];
    const data = this.props.data;
    let i = 0;

    while (i < data.length) {
      lists.push(
        // list의 항목들은 'key' props를 가지고 있어야 함 - React 내부적 필요
        <li key={data[i].id}>
          <a href={"/content/" + data[i].id}>{data[i].title}</a>
        </li>
      );
      i += 1;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
