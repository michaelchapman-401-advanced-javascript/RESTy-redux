import React from 'react';

export default class Url extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="text"
        className="wide"
        name="url"
        placeholder="URL"
        value={this.props.url}
        onChange={this.props.handleChange}
      />
    );
  }
}