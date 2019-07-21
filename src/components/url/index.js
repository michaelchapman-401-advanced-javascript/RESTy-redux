import React, { useContext } from 'react';

import { SettingsContext } from '../../context/context';

/**
 * Url class which renders basic text input field
 */
function Url(props) {
  const state = useContext(SettingsContext);
  
  return (
    <input
      type="text"
      className="wide"
      name="url"
      placeholder="URL"
      value={state.url}
      onChange={state.handleChange}
    />
  );
}

export default Url;