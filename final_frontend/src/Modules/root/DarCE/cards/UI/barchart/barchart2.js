import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', prev: 3000, curr: 6400, amt: 2400,
  }
];

export default class Barchart2 extends PureComponent {
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
      <Cell/>
        
        <Tooltip />
        <Legend />
        <Bar dataKey="prev" fill="#6bd184" barSize={40}  />
        <Bar dataKey="curr" fill="#636e65" barSize={40}/>
      </BarChart>
    );
  }
}
