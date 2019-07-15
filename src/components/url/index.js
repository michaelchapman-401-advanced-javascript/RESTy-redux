import React from 'react';

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