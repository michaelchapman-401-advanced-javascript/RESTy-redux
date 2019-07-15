import React from 'react';
import ReactJson from 'react-json-view';

export default class ClipBoard extends React.Component {
  render() {
    return (
      <div id="json">
        <ReactJson
          name="Headers"
          enableClipboard={false}
          collapsed={true}
          src={this.props.header}
        />
        <ReactJson
          name="Response"
          enableClipboard={false}
          collapsed={false}
          src={this.props.body}
        />
      </div>
    );
  }
}













