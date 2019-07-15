import React from 'react';

import Headers from '../headers';
import Url from '../url';
import TextArea from '../textarea';
import Methods from '../methods';

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.callAPI}>
        <section>
          
          <Url 
            handleUrlChange={this.props.handleUrlChange}
            handleChange={this.props.handleChange}
            url={this.props.url}
          />

          <Methods 
            methods={this.props.methods}
            handleChange={this.props.handleChange}
          />

        </section>

        <section className="deck col-2">
         
         <TextArea 
           handleChange={this.props.handleChange}
           method={this.props.method}
           requestBody={this.props.requestBody}
         />

          <Headers 
            toggleHeaders={this.props.toggleHeaders}
            handleChange={this.props.handleChange}
            headersVisible={this.props.headersVisible}
            username={this.props.username}
            password={this.props.password}
            token={this.props.token}
          />

        </section>
      </form>
    );
  }
}