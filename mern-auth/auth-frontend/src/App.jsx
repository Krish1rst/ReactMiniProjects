import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/data')
      .then(res => setData(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Backend Data:</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
