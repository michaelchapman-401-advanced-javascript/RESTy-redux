import React, { useContext, useEffect } from 'react';

import { SettingsContext } from '../../context/context';

/**
 * ClipBoard class which renders the ReactJson for the API responses
 */
function History(props) {
  const state = useContext(SettingsContext);

  useEffect(() => {
    try {
      let history = JSON.parse(localStorage.getItem('history'));
      if(history) state.saveHistory(history);
    } catch (e) {
      console.error(e);
    };
  }, []);
  
  return (
    <aside>
      <h2>History</h2>
      <ul id="history">
        {state.history &&
          Object.keys(state.history).map(key => (
            <li key={key} id={key} onClick={this.resetFormFromHistory}>
              <span>
                <strong>{state.history[key].method}</strong>
              </span>
              <span>{state.history[key].host}</span>
              <span>{state.history[key].path}</span>
            </li>
          ))}
      </ul>
    </aside>
  );
}

export default History;