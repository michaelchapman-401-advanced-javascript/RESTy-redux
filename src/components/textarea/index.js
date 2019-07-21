import React from 'react';

/**
 * TextArea class which handles rendering a basic textArea form input field
 */
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