import React from "react"

const defaultContextValue = {
  navbarOpen: false,
  isFarsi: true,
  btnVisible: true,
  aboutArianaTabNo: 0,
  landingDone: false,
  handleNavbar: () => {},
  closeNavbar: () => {},
  handleLanguage: () => {},
  setFarsi: () => {},
  setEnglish: () => {},
  setLanguageVisible: () => {},
  setLanguageInvisible: () => {},
  setAboutArianaTabNo: () => {},
  handleLanding: () => {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class ContextProviderComponent extends React.Component {
  state = {
    navbarOpen: false,
    isFarsi: true,
    btnVisible: true,
    aboutArianaTabNo: 0,
    landingDone: false,
  }
  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }
  closeNavbar = () => {
    this.setState(() => {
      return { navbarOpen: false }
    })
  }
  handleLanguage = () => {
    this.setState(() => {
      return { isFarsi: !this.state.isFarsi }
    })
  }
  setFarsi = () => {
    this.setState(() => {
      return { isFarsi: true }
    })
  }
  setEnglish = () => {
    this.setState(() => {
      return { isFarsi: false }
    })
  }

  setLanguageVisible = () => {
    this.setState(() => {
      return { btnVisible: true }
    })
  }

  setLanguageInvisible = () => {
    this.setState(() => {
      return { btnVisible: false }
    })
  }

  setAboutArianaTabNo = tabNo => {
    this.setState(() => {
      return { aboutArianaTabNo: tabNo }
    })
  }

  handleLanding = () => {
    this.setState(() => {
      return { landingDone: true }
    })
  }

  render() {
    const {
      navbarOpen,
      isFarsi,
      btnVisible,
      aboutArianaTabNo,
      landingDone,
    } = this.state
    const {
      handleNavbar,
      closeNavbar,
      handleLanguage,
      setFarsi,
      setEnglish,
      setLanguageVisible,
      setLanguageInvisible,
      setAboutArianaTabNo,
      handleLanding,
    } = this

    return (
      <Provider
        value={{
          navbarOpen,
          isFarsi,
          btnVisible,
          aboutArianaTabNo,
          landingDone,
          setFarsi,
          setEnglish,
          handleNavbar,
          closeNavbar,
          handleLanguage,
          setLanguageVisible,
          setLanguageInvisible,
          setAboutArianaTabNo,
          handleLanding,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}
export { Consumer as default, ContextProviderComponent }
