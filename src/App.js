import React, { useState } from 'react';
import Chart from './chart';

function App() {
  const [count, setCount] = useState(5);
  const [status, setStatus] = useState(true);
  const [theme, setTheme] = useState('light');

  const option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };


  return (
    <div style={{ height: '100vh' }}>
      <div>
        <button onClick={() => setCount(count + 1)}>height+100</button>
        <button onClick={() => setCount(count - 1)}>height-100</button>
        <button onClick={() => setStatus(!status)}>toggle</button>
        <button onClick={() => setTheme('light')}>light</button>
        <button onClick={() => setTheme('dark')}>dark</button>
      </div>

      <div style={{ height: count * 100 }}>
        {status && <Chart option={option} theme={theme} />}
      </div>
    </div>
  );
}

export default App;
