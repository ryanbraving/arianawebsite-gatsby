import React, { Component } from "react";

export default class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ open: props.isFarsi });
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  // state = {
  //   isFarsi: true
  // };

  // handleLanguage = () => {
  //   this.setState(() => {
  //     return { isFarsi: !this.state.isFarsi };
  //   });
  // };

  // someFn = () => {
  //   const listInfo = this.handleLanguage;
  //   this.props.callbackFromParent(listInfo);
  // };
  render() {
    return <div open={this.state.open} />;
  }
  // render() {
  //   return (
  //     <div>
  //       <h1 onClick={this.someFn}>Language Component Imported</h1>

  //     </div>
  //   );
  // }
}
