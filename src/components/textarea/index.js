import React, { useContext } from 'react';

import { SettingsContext } from '../../context/context';

/**
 * TextArea class which handles rendering a basic textArea form input field
 */
function TextArea(props) {
  const state = useContext(SettingsContext);

  return (
    <div id="body">
      <textarea
        placeholder="Raw JSON Body"
        name="requestBody"
        onChange={state.handleChange}
        value={state.requestBody}
        disabled={
          state.method.match(/get|delete/) ? true : false
        }
      />
  </div>
  );
}

export default TextArea;