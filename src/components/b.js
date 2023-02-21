import React, { useState, Component } from 'react';


export default class B extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  HandleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }


  render() {
    return (
      <div>

        <p>You click: {this.state.count}</p>
        <br />
        <button onClick={this.HandleClick} style={{ padding: '10px 20px' }}>OK</button>

      </div >
    );

  }

}
