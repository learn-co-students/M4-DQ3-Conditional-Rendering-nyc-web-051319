import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    page: "Profile"
  }

  activateProfile = () => {
    this.setState({
      page: "Profile"
    }, () => {
      console.log(this.state)
    })
  }

  activatePhotos = () => {
    this.setState({
      page: "Photos"
    }, () => {
      console.log(this.state)
    })
  }

  activateCocktails = () => {
    this.setState({
      page: "Cocktails"
    }, () => {
      console.log(this.state)
    })
  }

  activatePokemon = () => {
    this.setState({
      page: "Pokemon"
    }, () => {
      console.log(this.state)
    })
  }

  choosePage = () => {
    if (this.state.page === "Profile") {
      return <Profile />
    } else if (this.state.page === "Photos") {
      return <Photos />
    } else if (this.state.page === "Cocktails") {
      return <Cocktails />
    } else if (this.state.page === "Pokemon") {
      return <Pokemon />
    }
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar activateProfile={this.activateProfile} activatePhotos={this.activatePhotos} activateCocktails={this.activateCocktails} activatePokemon={this.activatePokemon} />
        {this.choosePage()}
      </div>
    )
  }

}

export default MainBox
