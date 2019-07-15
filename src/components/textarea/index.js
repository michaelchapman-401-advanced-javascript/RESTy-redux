import React from 'react';

export default class TextArea extends React.Component {
  render() {
    return (
      <div id="body">
        <textarea
          placeholder="Raw JSON Body"
          name="requestBody"
          onChange={this.props.handleChange}
          value={this.props.requestBody}
          disabled={
            this.props.method.match(/get|delete/) ? true : false
          }
        />
    </div>
    );
  }
}