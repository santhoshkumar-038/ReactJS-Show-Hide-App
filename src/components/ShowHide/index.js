// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstCard = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastCard = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button
            className="button btn-2"
            type="button"
            onClick={this.firstCard}
          >
            Show/Hide Firstname
          </button>
          {firstName ? <p className="name-container">Joe</p> : ''}
          <button
            className="button btn-1"
            type="button"
            onClick={this.lastCard}
          >
            Show/Hide Lastname
          </button>
          {lastName ? <p className="name-container">Jonas</p> : ''}
        </div>
      </div>
    )
  }
}

export default ShowHide
