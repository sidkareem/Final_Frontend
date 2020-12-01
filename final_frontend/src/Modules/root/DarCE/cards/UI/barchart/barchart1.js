import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', prev: 4000, curr: 200, amt: 400,
  }
];

export default class Barchart1 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
       
      <BarChart
        width={170}
        height={150}
        data={data}
        
        margin={{
          top: 10, left:2, bottom: 5,
        }}
      >
           <p><b>ACTIVITY</b></p>
        
        
        <Tooltip />
        <Legend />
        <Bar dataKey="prev" fill=
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
    boxShadow='0 4px 10px 0 rgba(0,0,0,.25)' barSize={40}  />
        <Bar dataKey="curr" fill="#636e65" barSize={40}/>
      </BarChart>
    );
  }
}
