// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {tossImage: 'heads', total: 0, heads: 0, tails: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({total: prevState.total + 1}))
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        tossImage: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        tossImage: 'tails',
      }))
    }
  }

  render() {
    const {tossImage, total, heads, tails} = this.state
    const imgUrl =
      tossImage === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="toss-result" />
          <button type="button" className="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
