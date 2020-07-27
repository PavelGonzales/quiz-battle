import React, { useState } from 'react';
import { Button, Space, Typography, Avatar, Progress } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import './App.css';
import mock from './mocks/quiz';

console.log('mock', mock)
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightQuestions, setRightQuestions] = useState(0);
  const [timer, setTimer] = useState(30);

  return (
    <div className="App">
      <div className="timerContainer">
        <ClockCircleOutlined className="timerContainer__icon" />
        { timer }
      </div>
      <Progress
        percent={100}
        success={{ percent: 50 }}
        showInfo={false}
        status="exception"
        className="progress"
      />
      <div className="userContainer">
        <Avatar
          src={`https://api.adorable.io/avatars/100/${Math.random()}`}
          size={100}
        />
        <div className="rightQustions">{ rightQuestions }</div>
      </div>

      {
        currentQuestion < 10 ? (
          <>
            <Typography.Title level={4}>
              <div dangerouslySetInnerHTML={{ __html: mock.results[currentQuestion].question }} />
            </Typography.Title>
            
            <Space
              direction="vertical"
              style={{ width: '100%', marginTop: 'auto' }}
            >
              {
                [
                  ...mock.results[currentQuestion].incorrect_answers, 
                  mock.results[currentQuestion].correct_answer
                ].map(answer => <Button 
                  key={answer}
                  block
                  type="primary" 
                  shape="round"
                  size="large"
                  onClick={() => {setCurrentQuestion(currentQuestion + 1); setRightQuestions(currentQuestion + 1) }}
                >
                  {answer}
                </Button>)
              }
            </Space>
          </>
        ) : 'The End'
      }
    </div>
  );
}

export default App;
