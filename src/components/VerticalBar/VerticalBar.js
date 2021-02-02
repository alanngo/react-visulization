import React from 'react';

import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
const generateData = () =>
{
  let program = [
    "Bootup", 
    "Photoshop", 
    "GTA V", 
    "Premiere", 
    "Cyberpunk 2077",
    "Excel",
    "Chrome",
    "Shutdown"
  ]
  let ret = []
  program.forEach(elem => 
  {
    let time = Math.random() *100
    let data = 
    {
      name: elem, 
      hdd: time, 
      sshd: time*3/4, 
      ssd: time/2, 
      nvme: time/4
    }
    ret.push(data)
  })
  return ret
}
const VerticalBar = () =>
(
  <div className="VerticalBar">
      <BarChart
      width={1800}
      height={800}
      data={generateData()}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}
    >
      <XAxis dataKey="name" />
      <YAxis label={{ value: 'Load Time', angle: -90, position: 'insideLeft' }}/>
      <Tooltip />
      <Legend />
      <Bar dataKey="hdd" fill="#32a852" />
      <Bar dataKey="sshd" fill="#deb409" />
      <Bar dataKey="ssd" fill="#c72a2a" />
      <Bar dataKey="nvme" fill="#2a80c7" />
    </BarChart>

  </div>
)

export default VerticalBar;