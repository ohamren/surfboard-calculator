
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
        <div className="input">
          <div className="level">
            <div className="level__icon"></div>
            <div className="input-container">
                <div className="slider-text">How well do you surf?</div>
                <div className="slider"></div>
            </div>
          </div>
          <div className="fitness">
            <div className="fitness__icon"></div>
            <div className="input-container">
                <div className="slider-text">Are you in shape?</div>
                <div className="slider"></div>
            </div>
          </div>
          <div className="weight">
            <div className="weight__icon"></div>
            <div className="input-container">
                <div className="slider-text">You weight?</div>
                <div className="slider"></div>
            </div>
          </div>
        </div>
        <div className="result">
          <div className="result__icon"></div>
          <div className="result--text">Your board should be about 32-40 litres
          something like 6.0ft long, 19 3/4 inches wide and 2 3/8 inches thick.
          </div>
        </div>
        <div className="surfboard-suggestions">
          <div className="surfboard-suggestions__introduction">
            These sticks might suit you!
          </div>
          <div className="surfboard-suggestion-1">
            <div className="surfboard-suggestion-1__manufacturer">Firewire</div>
            <div className="surfboard-suggestion-1__board-name">Spitfire</div>
            <div className="surfboard-suggestion-1__dimensions">6.2, 19 3/4, 2 3/8</div>
            <div className="surfboard-suggestion-1__image"></div>
          </div>
          <div className="surfboard-suggestion-2">
            <div className="surfboard-suggestion-2__manufacturer">Firewire</div>
            <div className="surfboard-suggestion-2__board-name">Dominator</div>
            <div className="surfboard-suggestion-2__dimensions">6.0, 20 2/4, 2 3/8</div>
            <div className="surfboard-suggestion-2__image"></div>
          </div>
          <div className="surfboard-suggestion-3">
            <div className="surfboard-suggestion-3__manufacturer">Firewire</div>
            <div className="surfboard-suggestion-3__board-name">Potatonator</div>
            <div className="surfboard-suggestion-3__dimensions">5.10, 21 2/4, 2 6/8</div>
            <div className="surfboard-suggestion-3__image"></div>
          </div>
        </div>
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
