
/*
A wrapper component.
Renders all the underlying subcomponents.
*/

import React, {Component} from 'react'
import $ from 'jquery'
import Bootstrap from 'bootstrap'
//import {connect} from 'react-redux'

class Wrapper extends Component {
  // Adding some example Basket Items and Users to state.
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // Renders the main components.
  render() {
    return (
      <div className="app">
        <div className="input-fields">
          <div className="input">
            <div className="input__icon"></div>
            <div className="input__container">
                <div className="input__slider-text">How well do you surf?</div>
                <div className="input__slider"></div>
            </div>
          </div>
          <div className="input">
            <div className="input__icon"></div>
            <div className="input__container">
                <div className="input__slider-text">Are you in shape?</div>
                <div className="input__slider"></div>
            </div>
          </div>
          <div className="input">
            <div className="input__icon"></div>
            <div className="input__container">
                <div className="input__slider-text">You weight?</div>
                <div className="input__slider"></div>
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
          <div className="surfboard-suggestion">
            <div className="surfboard-suggestion__manufacturer">Firewire</div>
            <div className="surfboard-suggestion__board-name">Spitfire</div>
            <div className="surfboard-suggestion__dimensions">6.2, 19 3/4, 2 3/8</div>
            <div className="surfboard-suggestion__image"></div>
          </div>
          <div className="surfboard-suggestion">
            <div className="surfboard-suggestion__manufacturer">Firewire</div>
            <div className="surfboard-suggestion__board-name">Dominator</div>
            <div className="surfboard-suggestion__dimensions">6.0, 20 2/4, 2 3/8</div>
            <div className="surfboard-suggestion__image"></div>
          </div>
          <div className="surfboard-suggestion">
            <div className="surfboard-suggestion__manufacturer">Firewire</div>
            <div className="surfboard-suggestion__board-name">Potatonator</div>
            <div className="surfboard-suggestion__dimensions">5.10, 21 2/4, 2 6/8</div>
            <div className="surfboard-suggestion__image"></div>
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

export default Wrapper
//export default connect(mapStateToProps)(Wrapper)
