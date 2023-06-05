// Write your code here
import {Component} from 'react'
import './index.css'

const statusConstants = {
  register: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {ha: props.whether}
  }

  componentDidUpdate(prevProps) {
    const {whether} = this.props
    if (prevProps.whether !== whether) {
      this.setState({ha: whether})
    }
  }

  Registered = () => (
    <div className="hlo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="log"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  closed = () => (
    <div className="hlo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="im"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registration very soon!</p>
    </div>
  )

  yetToRegister = () => (
    <div className="hlo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="iii"
      />
      <p className="pppp">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall today in love with the
        beautiful form art form.
      </p>
      <button type="button" className="but">
        Register here
      </button>
    </div>
  )

  render() {
    const {ha} = this.state
    console.log(ha)
    switch (ha) {
      case statusConstants.register:
        return this.Registered()
      case statusConstants.registrationClosed:
        return this.closed()
      case statusConstants.yetToRegister:
        return this.yetToRegister()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
