import React from "react";

export default class Banner extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="banner">
        <h1>{this.props.title}</h1>
        <div></div>
        <p>{this.props.subtitle}</p>
        {this.props.children}
      </div>
    );
  }
}
