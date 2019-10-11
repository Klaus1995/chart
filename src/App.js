import React, { useState } from 'react';
import Chart from './chart';

function App() {
  const [count, setCount] = useState(5);

  return (
    <div style={{ height: '100vh' }}>
      <button onClick={() => setCount(count + 1)} >height+100</button>
      <button onClick={() => setCount(count - 1)} >height-100</button>
      <div style={{ height: count * 100 }}>
        <Chart count={count} />
      </div>
    </div>
  );
}

export default App;
