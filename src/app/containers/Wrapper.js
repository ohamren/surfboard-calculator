
/*
A wrapper component.
Renders all the underlying subcomponents.
*/

import React, {Component} from 'react'
import ReactBootstrapSlider from 'react-bootstrap-slider'
//import {connect} from 'react-redux'

class Wrapper extends Component {
  // Adding some example Basket Items and Users to state.
  constructor(props) {
    super(props)
    this.state = {
      sliderLevel: 25,
      sliderFitness: 25,
      sliderWeight: 25
    }
  }

  // Renders the main components.
  render() {
    return (
      <div className="app">
        <div className="input-fields">
          <div className="input level">
            <div className="input__icon level__icon"></div>
            <div className="input__container">
                <div className="input__slider-text">How well do you surf?</div>
                <div className="input__slider">
                  <input
                    className="input--slider"
                    type="range"
                    min="0"
                    max="50"
                    value={this.state.sliderLevel}
                    step="5"
                    onChange={e => this.setState({sliderLevel: Number(e.target.value)})}
                    />
                </div>
                <div className="input__slider">
                  <input
                    className="input--slider_description_text"
                    type="range"
                    min="0"
                    max="50"
                    value={this.state.sliderLevel}
                    step="5"
                    />
                </div>
                <ReactBootstrapSlider
                    value={this.state.sliderLevel}
                    change={e => this.setState({sliderLevel: Number(e.target.value)})}
                    slideStop={e => this.setState({sliderLevel: Number(e.target.value)})}
                    step={10}
                    max={100}
                    min={0}
                    reverse={true}
                    />
            </div>
          </div>
          <div className="input fitness">
            <div className="input__icon fitness__icon"></div>
            <div className="input__container">
                <div className="input__slider-text">Are you in shape?</div>
                <div className="input__slider">
                  <input
                    className="input--slider"
                    type="range"
                    min="0"
                    max="50"
                    value={this.state.sliderFitness}
                    step="5"
                    onChange={e => this.setState({sliderFitness: e.target.value})}
                    />
                </div>
            </div>
          </div>
          <div className="input weight">
            <div className="input__icon weight__icon"></div>
            <div className="input__container">
                <div className="input__slider-text">You weight?</div>
                <div className="input__slider">
                  <input
                    className="input--slider"
                    type="range"
                    min="0"
                    max="50"
                    value={this.state.sliderWeight}
                    step="5"
                    onChange={e => this.setState({sliderWeight: e.target.value})}
                    />
                </div>
            </div>
          </div>
        </div>
        <div className="result">
          <div className="result__icon"></div>
          <div className="result__text">Your board should be about
          <span className="result--highlight"> 32-40 </span>litres
          something like <span className="result--highlight"> 6.0 </span>ft
          long, <span className="result--highlight"> 19 3/4 </span> inches wide
          and <span className="result--highlight"> 2 3/8 </span>inches thick.
          </div>
        </div>
        <div className="surfboard-suggestions">
          <div className="surfboard-suggestions--highlight">
            These sticks might suit you!
          </div>
          <div className="surfboard-suggestion">
            <div className="surfboard-suggestion__manufacturer">Firewire</div>
            <div className="surfboard-suggestion__board-name"><span className="surfboard-suggestion--highlight">Spitfire</span></div>
            <div className="surfboard-suggestion__dimensions">6.2, 19 3/4, 2 3/8</div>
            <div className="surfboard-suggestion__image"></div>
          </div>
          <div className="surfboard-suggestion">
            <div className="surfboard-suggestion__manufacturer">Firewire</div>
            <div className="surfboard-suggestion__board-name"><span className="surfboard-suggestion--highlight">Dominator</span></div>
            <div className="surfboard-suggestion__dimensions">6.0, 20 2/4, 2 3/8</div>
            <div className="surfboard-suggestion__image"></div>
          </div>
          <div className="surfboard-suggestion">
            <div className="surfboard-suggestion__manufacturer">Firewire</div>
            <div className="surfboard-suggestion__board-name"><span className="surfboard-suggestion--highlight">Potatonator</span></div>
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
