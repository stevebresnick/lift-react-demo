import { Component } from 'react';
import LiftAPI from '../services/AcquiaLiftPublicApi';

class Personalize extends Component {

  componentDidUpdate() {
    LiftAPI.personalize();
  }

  render() {
    return this.props.children
  }
}

export default Personalize;
