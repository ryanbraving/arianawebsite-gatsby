import React from "react";

const defaultContextValue = {
  navbarOpen: false,
  isFarsi: false,
  handleNavbar: () => {},
  handleLanguage: () => {}
};

const { Provider, Consumer } = React.createContext(defaultContextValue);

class ContextProviderComponent extends React.Component {
  state = {
    navbarOpen: false,
    isFarsi: false
  };
  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen };
    });
  };
  handleLanguage = () => {
    this.setState(() => {
      return { isFarsi: !this.state.isFarsi };
    });
  };
  render() {
    const { navbarOpen, isFarsi } = this.state;
    const { handleNavbar, handleLanguage } = this;

    return (
      <Provider value={{ navbarOpen, isFarsi, handleNavbar, handleLanguage }}>
        {this.props.children}
      </Provider>
    );
  }
}
export { Consumer as default, ContextProviderComponent };
