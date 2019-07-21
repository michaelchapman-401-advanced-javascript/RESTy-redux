import React, { useContext } from 'react';

import { SettingsContext } from '../../context/context';

import Method from '../method';


let REQUEST_METHODS = ['get', 'post', 'put', 'delete'];

/**
 * Methods class which renders a list of Method components
 */
function Methods(props) {
  const state = useContext(SettingsContext);

  return (
    <div id="methods">
      {REQUEST_METHODS.map((requestMethod, index) => (
        <label key={index}>
          <Method 
            checked={state.methods === requestMethod ? true : false}
            requestMethod={requestMethod}
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

export default Methods;