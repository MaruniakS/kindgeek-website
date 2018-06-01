import React from 'react';
import { Helmet } from 'react-helmet';

export class Example extends React.Component {
  render() {
    return (
      <div className="exampleContainer">
        <Helmet>
          <title>Example</title>
          <meta name="description" content="test example" />
        </Helmet>
        <div className="example" key="1">
          Hello
        </div>
      </div>
    );
  }
}
