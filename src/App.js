import React, { useState } from 'react';
import Chart from './chart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ height: '100vh' }}>
      <button onClick={() => setCount(count + 1)} >+1</button>
      <div style={{ height: 'calc(100% - 25px)' }}>
        <Chart count={count} />
      </div>
    </div>
  );
}

export default App;
