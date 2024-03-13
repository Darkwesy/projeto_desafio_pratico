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
      <h1>Cronometro</h1>
      <span>{second}</span>
      <p>Segundos</p>
    </div>
  )
}

export default Cronometro