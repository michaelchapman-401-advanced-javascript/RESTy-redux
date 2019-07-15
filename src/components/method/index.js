import React from 'react';

/**
 * Method class which renders simple input field for onChange event
 */
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






