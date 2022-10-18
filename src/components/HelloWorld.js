import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HelloWorld() {

  const [message, getMessage] = useState('');
  const [location, getLocation] = useState('');

  useEffect(() => {
    getMessageFromApi();
  }, []);

  const getMessageFromApi = () => {
    const api = 'https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/hello';
    axios.get(api)
      .then(res => {
        console.log(res);
        const message = res.data.message;
        getMessage(message);
        const location = res.data.location;
        getLocation(location);
        
        // const message = res.message;
        // this.setState({ message });
      });
  }

  return (
    <div>
      <p>Hello World!</p>
      <p>Message: {message}</p>
      <p>Location: {location}</p>
    </div>
  );
}