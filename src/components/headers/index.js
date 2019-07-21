import React, { useContext } from 'react';

import { SettingsContext } from '../../context/context';

/**
 * Headers class which renders the Headers input forms
 */
function Headers(props) {
  const state = useContext(SettingsContext);

  return (
    <div id="headers">
      <button onClick={state.toggleHeaders}>
        Headers
      </button>
      <div className={'visible-' + state.headersVisible}>
        <h2>Basic Authorization</h2>
        <input
          onChange={state.handleChange}
          name="username"
          placeholder="Username"
          value={state.username}
        />
        <input
          onChange={state.handleChange}
          name="password"
          type="password"
          placeholder="Password"
          value={state.password}
        />
      </div>
      <div className={'visible-' + state.headersVisible}>
        <h2>Bearer Token</h2>
        <input
          onChange={state.handleChange}
          type="text"
          className="wide"
          name="token"
          placeholder="Token"
          value={state.token}
        />
      </div>
    </div>
  );
}

export default Headers;