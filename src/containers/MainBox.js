import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    content: <Profile />
  }

  handlePage = (pageName) => {
    if (pageName === "Profile") {
      this.setState({
        content: <Profile />
      })
    } else if (pageName === "Photos") {
      this.setState({
        content: <Photos />
      })
    } else if (pageName === "Cocktails") {
      this.setState({
        content: <Cocktails />
      })
    } else if (pageName === "Pokemon") {
      this.setState({
        content: <Pokemon />
      })
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>{this.state.content}</div>

    return (
      <div>
        <MenuBar handlePage={this.handlePage}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
