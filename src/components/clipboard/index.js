import React, { useContext } from 'react';

import { SettingsContext } from '../../context/context';

import ReactJson from 'react-json-view';

/**
 * ClipBoard class which renders the ReactJson for the API responses
 */
function ClipBoard() {
  const state = useContext(SettingsContext);

  return (
    <div id="json">
      <ReactJson
        name="Headers"
        enableClipboard={false}
        collapsed={true}
        src={state.header}
      />
      <ReactJson
        name="Response"
        enableClipboard={false}
        collapsed={false}
        src={state.body}
      />
    </div>
  );
}

export default ClipBoard;













