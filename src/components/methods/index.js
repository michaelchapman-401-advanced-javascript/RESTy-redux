import React from 'react';

import Method from '../method';


let REQUEST_METHODS = ['get', 'post', 'put', 'delete'];

/**
 * Methods class which renders a list of Method components
 */
export default class Methods extends React.Component {
  render() {
    return (
      <div id="methods">
        {REQUEST_METHODS.map(requestMethod => (
          <label>
            <Method 
              checked={this.props.methods === requestMethod ? true : false}
              methods={this.props.methods}
              requestMethod={requestMethod}
              handleChange={this.props.handleChange}
            />
            <span>{requestMethod.toUpperCase()}</span>
          </label>
        ))}
        <label>
          <button type="submit">Go!</button>
        </label>
      </div>
    );
  }
}