// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}
  onMango = () => {
    this.setState(prevState => {
      return {mangoes: prevState.mangoes + 1}
    })
  }
  onBanana = () => {
    this.setState(prevState => {
      return {bananas: prevState.bananas + 1}
    })
  }
  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="bgCon">
        <div className="container">
          <h1 className="heading">
            {' '}
            Bob ate <span className="count">{mangoes}</span> mangoes{' '}
            <span className="count">{bananas}</span> bananas
          </h1>
          <div className="cardContainer">
            <div className="card">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png" 
                alt="mango"
              />
              <button onClick={this.onMango} className="btn"> Eat Mango</button>
            </div>
            <div className="card">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png" 
                alt="banana"
              />
              <button onClick={this.onBanana} className="btn"> Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
