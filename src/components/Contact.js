import React, { Component } from 'react';
import LiftAPI from '../services/AcquiaLiftPublicApi';

class Contact extends Component {

  state = {
    showStaticElement: true,
    showDynamicElement: true
  }

  toggleDynamicElement = () => {
    let currentDynamicState = this.state.showDynamicElement;
    this.setState({ showDynamicElement: !currentDynamicState });
    // Re-Personalize the shown element.
    if (!currentDynamicState) {
      LiftAPI.personalize();
    }
  }

  toggleStaticElement = () => {
    let currentStaticState = this.state.showStaticElement;
    this.setState({ showStaticElement: !currentStaticState });
  }

  render() {

    let dynamicElement = '';
    let staticClassName = this.state.showStaticElement ? 'static-element show' : 'static-element hide';
    let staticElement = (
      <div className={staticClassName}>
        <h3>Static Element</h3>
      </div>
    );
    if (this.state.showDynamicElement) {
      dynamicElement = (
        <div className="dynamic-element">
          <h3>Dynamic element</h3>
        </div>
      );
    }

    return (
      <div className="App-Content-Contact">
        <h1>Contact</h1>
        <section>
          <button onClick={this.toggleDynamicElement}>
            Toggle Dynamic Element
          </button>
          {dynamicElement}
        </section>
        <section>
          <button onClick={this.toggleStaticElement}>
            Toggle Static Element
          </button>
          {staticElement}
        </section>
      </div>
    );
  }
}

export default Contact;
