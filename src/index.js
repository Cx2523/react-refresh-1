import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box.js';

const style = {
  height: '100px',
  width:'100px',
  backgroundColor:'blue'
}

ReactDOM.render(
  <div>
    <h1>React</h1>
    <Box style={style} />
  </div>
  , document.getElementById('root'));
