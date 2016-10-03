
/*
A wrapper component.
Renders all the underlying subcomponents.
*/

import React, {Component} from 'react'
//import {connect} from 'react-redux'

class Page extends Component {
  // Adding some example Basket Items and Users to state.
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // Renders the main components.
  render() {
    return (
      <div className="page">
        <header className="header">
          <div className="header__logo_1"></div>
          <div className="header__plus_letter">+</div>
          <div className="header__logo_2"></div>
        </header>
        <main className="main">
          <div className="input">
            <div className="level">
            </div>
            <div className="fitness">
            </div>
            <div className="weight">
            </div>
          </div>
        </main>
      </div>
    )
  }
}

/*
function mapStateToProps(state) {
  return {
    basketItems: state.basketItems
  }
}
*/

export default Page
//export default connect(mapStateToProps)(Wrapper)
