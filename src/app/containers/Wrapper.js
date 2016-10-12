
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
      sliderLevel: 50,
      sliderFitness: 50,
      sliderWeight: 72,
    }
  }

  level() {
    if(this.state.sliderLevel === 0) {
      return "Kook"
      //return value + ' ' + this.id;
    }
    if(this.state.sliderLevel === 25) {
      return "You find me in the white water"
    }
    if(this.state.sliderLevel === 50) {
      return "Avreage Joe"
    }
    if(this.state.sliderLevel === 75) {
      return "Pro"
    }
    if(this.state.sliderLevel === 100) {
      return "World champ"
    }
    else {
      return 'Inbetweener'
    }
  }

  fitness() {
    if(this.state.sliderFitness === 0) {
      return "Never worked out in my life"
    }
    if(this.state.sliderFitness === 25) {
      return "Not really"
    }
    if(this.state.sliderFitness === 50) {
      return "Pretty Ok"
    }
    if(this.state.sliderFitness === 75) {
      return "Waterman"
    }
    if(this.state.sliderFitness === 100) {
      return "Paddling machine"
    }
    else {
      return 'Inbetweener'
    }
  }

  weight() {
    var lbs = Math.ceil(this.state.sliderWeight * 2.2046)
    return this.state.sliderWeight + ' kg / ' + lbs + ' lbs'
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
                  <ReactBootstrapSlider
                    value={this.state.sliderLevel}
                    change={e => this.setState({sliderLevel: Number(e.target.value)})}
                    slideStop={e => this.setState({sliderLevel: Number(e.target.value)})}
                    step={25}
                    max={100}
                    min={0}
                    reverse={true}
                    tooltip='always'
                    tooltip_position='bottom'
                    handle='square'
                    formatter={() => this.level()}
                  />
              </div>
            </div>
          </div>
          <div className="input fitness">
            <div className="input__icon fitness__icon"></div>
            <div className="input__container">
                <div className="input__slider-text">Are you in shape?</div>
                <div className="input__slider">
                  <ReactBootstrapSlider
                    value={this.state.sliderFitness}
                    change={e => this.setState({sliderFitness: Number(e.target.value)})}
                    slideStop={e => this.setState({sliderFitness: Number(e.target.value)})}
                    step={25}
                    max={100}
                    min={0}
                    reverse={true}
                    tooltip='always'
                    tooltip_position='bottom'
                    handle='square'
                    formatter={() => this.fitness()}
                  />
                </div>
            </div>
          </div>
          <div className="input weight">
            <div className="input__icon weight__icon"></div>
            <div className="input__container">
                <div className="input__slider-text">You weight?</div>
                <div className="input__slider">
                  <ReactBootstrapSlider
                    value={this.state.sliderWeight}
                    change={e => this.setState({sliderWeight: Number(e.target.value)})}
                    slideStop={e => this.setState({sliderWeight: Number(e.target.value)})}
                    step={1}
                    max={120}
                    min={25}
                    reverse={true}
                    tooltip='always'
                    tooltip_position='bottom'
                    handle='square'
                    formatter={() => this.weight()}
                  />
                </div>
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="result">
          <div className="result__icon"></div>
          <div className="result__container">
            <div className="result__text">Your board should be about
            <span className="result--highlight"> 32-40 </span>litres
            something like <span className="result--highlight"> 6.0 </span>ft
            long, <span className="result--highlight"> 19 3/4 </span> inches wide
            and <span className="result--highlight"> 2 3/8 </span>inches thick.
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="surfboard-suggestions-wrapper">
          <div className="surfboard-suggestions--highlight">
            These sticks might suit you!
          </div>
          <div className="surfboard-suggestions">
            <div className="surfboard-suggestion">
              <div className="surfboard-suggestion__manufacturer">Firewire</div>
              <div className="surfboard-suggestion__board-name"><span className="surfboard-suggestion--highlight">Spitfire</span></div>
              <div className="surfboard-suggestion__dimensions">6.2, 19 3/4, 2 3/8</div>
              <div className="surfboard-suggestion__image spitfire__image"></div>
            </div>
            <div className="surfboard-suggestion">
              <div className="surfboard-suggestion__manufacturer">Firewire</div>
              <div className="surfboard-suggestion__board-name"><span className="surfboard-suggestion--highlight">Dominator</span></div>
              <div className="surfboard-suggestion__dimensions">6.0, 20 2/4, 2 3/8</div>
              <div className="surfboard-suggestion__image dominator__image"></div>
            </div>
            <div className="surfboard-suggestion">
              <div className="surfboard-suggestion__manufacturer">Firewire</div>
              <div className="surfboard-suggestion__board-name"><span className="surfboard-suggestion--highlight">Potatonator</span></div>
              <div className="surfboard-suggestion__dimensions">5.10, 21 2/4, 2 6/8</div>
              <div className="surfboard-suggestion__image potatonator__image"></div>
            </div>
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
