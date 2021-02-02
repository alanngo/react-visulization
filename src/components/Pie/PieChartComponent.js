import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const data01 = [
  { name: 'Harry Potter', value: 2 }, 
  { name: 'Spongebob',value: 2.5 },
  { name: 'Linus Tech Tips', value: 6 }, 
  { name: 'SQL', value:5.1 },
  { name: 'Tom and Jerry', value: 3}, 
  { name: 'Fortnite', value: 4.8 },
];


const PieChartComponent = () => 
(
  <div  align="center" className="PieChartComponent">
      <PieChart width={1800} height={800}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <Pie 
      dataKey="value" 
      isAnimationActive={true} 
      data={data01} 
      cx={200} 
      cy={200} 
      outerRadius={80} 
      fill="#2a80c7" label />
      <Tooltip />
    </PieChart>
  </div>
)



export default PieChartComponent;