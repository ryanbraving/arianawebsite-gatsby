import React from "react";

const defaultContextValue = {
  navbarOpen: false,
  isFarsi: false,
  btnVisible: true,
  handleNavbar: () => {},
  handleLanguage: () => {},
  setFarsi: () => {},
  setEnglish: () => {},
  setLanguageVisible: () => {},
  setLanguageInvisible: () => {}
};

const { Provider, Consumer } = React.createContext(defaultContextValue);

class ContextProviderComponent extends React.Component {
  state = {
    navbarOpen: false,
    isFarsi: true,
    btnVisible: true
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
  setFarsi = () => {
    this.setState(() => {
      return { isFarsi: true };
    });
  };
  setEnglish = () => {
    this.setState(() => {
      return { isFarsi: false };
    });
  };

  setLanguageVisible = () => {
    this.setState(() => {
      return { btnVisible: true };
    });
  };

  setLanguageInvisible = () => {
    this.setState(() => {
      return { btnVisible: false };
    });
  };

  render() {
    const { navbarOpen, isFarsi, btnVisible } = this.state;
    const {
      handleNavbar,
      handleLanguage,
      setFarsi,
      setEnglish,
      setLanguageVisible,
      setLanguageInvisible
    } = this;

    return (
      <Provider
        value={{
          navbarOpen,
          isFarsi,
          btnVisible,
          setFarsi,
          setEnglish,
          handleNavbar,
          handleLanguage,
          setLanguageVisible,
          setLanguageInvisible
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { Consumer as default, ContextProviderComponent };
