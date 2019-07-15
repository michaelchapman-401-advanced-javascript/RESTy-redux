import React from 'react';

/**
 * Url class which renders basic text input field
 */
export default class Url extends React.Component {
  render() {
    return (
      <input
        type="text"
        className="wide"
        name="url"
        placeholder="URL"
        value={this.props.url}
        onChange={this.props.handleChange}
        // onChange={this.props.handleUrlChange}
      />
    );
  }
}