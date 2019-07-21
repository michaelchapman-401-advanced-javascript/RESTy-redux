import React, { useContext } from 'react';

import { SettingsContext } from '../../context/context';

import Headers from '../headers';
import Url from '../url';
import TextArea from '../textarea';
import Methods from '../methods';

/**
 * Form class which renders the URL, Methods, TextArea, and Headers components
 */
function Form() {
  const state = useContext(SettingsContext);

  return (
    <form onSubmit={state.callAPI}>
      <section>
        
        <Url />

        <Methods />

      </section>

      <section className="deck col-2">
        
        <TextArea />

        <Headers />

      </section>
    </form>
  );
}

export default Form;