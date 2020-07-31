import React, { useState, useEffect } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import './styles.css';

function Timer() {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(seconds => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="timerContainer">
      <ClockCircleOutlined className="timerContainer__icon" />
      <span className="timerContainer__seconds">{ timer }</span>
    </div>
  );
}

export default Timer;
