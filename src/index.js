import React from 'react';
import ReactDOM from 'react-dom';
import BubbleChart from './Components/BubbleChart.js'
import Square from './Components/Square.js'


const skillData = [
  {
    name: "Javascript",
    value:9
  },
  {
    name: "C#",
    value:7
  },
  {
    name: ".Net",
    value:7
  },
  {
    name: "React",
    value:6
  },
  {
    name: "Angular",
    value:4
  },
  {
    name: "SQL",
    value:5
  },
  {
    name: "SQL Server",
    value:2
  },
  {
    name: "Node",
    value:5
  }
];


ReactDOM.render(<BubbleChart skills={skillData} />, document.getElementById('root'));
