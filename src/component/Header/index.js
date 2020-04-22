import React from 'react';
import Navigation from './Navigation/Navigation.js';
import Hello from './Hello/Hello.js';

export default (props) => {
  return (
    <div>
      <Navigation />
      <Hello {...props}/>
    </div>
  );
};
