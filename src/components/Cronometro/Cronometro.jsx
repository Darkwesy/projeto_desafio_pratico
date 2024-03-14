import './Cronometro_style.css'
import { useState, useEffect } from 'react';

function Cronometro () {
  const [second, SetSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetSeconds(prevSeconds => prevSeconds + 1)
    }, 1000);
    return () => { clearInterval(intervalId); };
  }, []);

  return (
    <div className="cronometro">
      <h2>Cronometro</h2>
      <h1>{second}</h1>
      <h3>Segundos</h3>
    </div>
  )
}

export default Cronometro