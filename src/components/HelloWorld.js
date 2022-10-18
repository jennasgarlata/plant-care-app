import React from 'react';
import axios from 'axios';

class HelloWorld extends React.Component {

  componentDidMount() {
    const api = 'https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/hello';
    axios.get(api)
      .then(res => {
        console.log(res);
        // const message = res.message;
        // this.setState({ message });
      });
  }

  render() {
    return (
      <div>
        <p>Hello World!</p>
      </div>
    );
  }
}



export default HelloWorld;