
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
      volume: 0
    }
  }

  surfboard() {
    let volume = this.state.volume
    const MODEL_BOARD = [
      {id: 1, length: "5’8″" , width: "19.25″", thickness: "2.25″", cl: 26.05},
      {id: 2, length: "5’9″", width: "19.38″", thickness: "2.32″", cl: 27.42},
      {id: 3, length: "5’10″", width: "19.50″", thickness: "2.38″", cl: 28.74},
      {id: 4, length: "5’11″", width: "19.75″", thickness: "2.44″", cl: 30.28},
      {id: 5, length: "6’0″", width: "20.00″", thickness: "2.5″", cl: 31.79},
      {id: 6, length: "6’1″", width: "20.25″", thickness: "2.56″", cl: 33.27},
      {id: 7, length: "6’2″", width: "20.50″", thickness: "2.63″", cl: 35.24},
      {id: 8, length: "6’3″", width: "20.75″", thickness: "2.63″", cl: 36.23},
      {id: 9, length: "6’4″", width: "21.00″", thickness: "2.75″", cl: 38.8}
    ]

    for(var i = 0; i < MODEL_BOARD.length; i++) {
      if (MODEL_BOARD[i].cl <= volume && Math.ceil(MODEL_BOARD[i].cl) >= volume) {
        console.log(MODEL_BOARD[i].cl)
        console.log(Math.ceil(MODEL_BOARD[i].cl))
        console.log(MODEL_BOARD[i].length)
      } else {
        console.log("No have")
      }
    }
  }

  surfAlgo2000() {
    let levelFitnessAverage = (this.state.sliderLevel + this.state.sliderFitness) / 2
    let magicNumber = 0

    if (levelFitnessAverage >= 80) {
      magicNumber = 0.34
    }

    if (levelFitnessAverage < 80 && levelFitnessAverage >= 60) {
      magicNumber = 0.36
    }

    if (levelFitnessAverage < 60 && levelFitnessAverage >= 40) {
      magicNumber = 0.37
    }

    if (levelFitnessAverage < 40 && levelFitnessAverage >= 20) {
      magicNumber = 0.39
    }

    if (levelFitnessAverage < 20) {
      magicNumber = 0.42
    }

    this.surfboard()
    return (Math.round(this.state.sliderWeight * magicNumber))
  }

  level() {
    if(this.state.sliderLevel === 0) {
      return "Kook"
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
                    change={e => this.setState({sliderLevel: Number(e.target.value), volume: this.surfAlgo2000()})}
                    slideStop={e => this.setState({sliderLevel: Number(e.target.value), volume: this.surfAlgo2000()})}
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
                    change={e => this.setState({sliderFitness: Number(e.target.value), volume: this.surfAlgo2000()})}
                    slideStop={e => this.setState({sliderFitness: Number(e.target.value), volume: this.surfAlgo2000()})}
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
                    change={e => this.setState({sliderWeight: Number(e.target.value), volume: this.surfAlgo2000()})}
                    slideStop={e => this.setState({sliderWeight: Number(e.target.value), volume: this.surfAlgo2000()})}
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
            <span className="result--highlight"> {this.state.volume} </span>litres something like
            <span className="result--highlight"> 6.0 </span>ft long,
            <span className="result--highlight"> 19 3/4 </span> inches wide and
            <span className="result--highlight"> 2 3/8 </span> inches thick.
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
