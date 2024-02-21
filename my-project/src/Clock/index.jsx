import React, { useState, useEffect } from 'react';

function Index() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(rotation => (rotation + 5) % 360);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex items-center justify-center bg-gray-300 h-screen'>
      <div
        className={`h-64 w-64 rounded-full bg-slate-500 border border-slate-700 p-5 hover:border-transparent hover:text-white transition-colors relative flex justify-center`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
       
        <div className={` h-1/2 w-1 bg-white`}></div>
      </div>
      
    </section>
  );
}

export default Index;
