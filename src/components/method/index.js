import React, { useContext } from 'react';

import { SettingsContext } from '../../context/context';

/**
 * Method class which renders simple input field for onChange event
 */
function Method(props) {
  const state = useContext(SettingsContext);


  return (
    <input
      type="radio"
      name="method"
      value={props.requestMethod}
      onChange={state.handleChange}
    />
  );
}

export default Method;






