import React from 'react';


export default class Method extends React.Component {
  render() {
    return (
      <input
        type="radio"
        name="method"
        value={this.props.requestMethod}
        onChange={this.props.handleChange}
      />
    );
  }
}






