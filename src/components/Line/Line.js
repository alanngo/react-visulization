import React from 'react';
import { CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis, Line } from 'recharts';
const generateData = (amt) =>
{
  let ret = []
  for (let i =0; i<=amt; i++)
  {
    let data = 
    {
      name: `${i}s`,
      cpu: (Math.random() *100).toFixed(2),
      gpu: (Math.random() *100).toFixed(2),
      disk:(Math.random() *100).toFixed(2),
      ram: (Math.random() *100).toFixed(2)
    }
    ret.push(data)
  }
  return ret
}

const LineGraph = () => 
{
  return (
    <div className="Line">
        <LineChart
        width={1800}
        height={800}
        data={generateData(100)}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: '% Usage', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cpu" stroke="#2a80c7" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="gpu" stroke="#32a852" activeDot={{ r: 8 }}/>
        <Line type="monotone" dataKey="ram" stroke="#deb409" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="disk" stroke="#c72a2a" activeDot={{ r: 8 }}/>
      </LineChart>
    </div>
  )
}


export default LineGraph;