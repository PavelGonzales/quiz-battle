import React, { useState } from 'react';
import { Button, Space, Typography, Avatar } from 'antd';
import './App.css';
import mock from './mocks/quiz';

console.log('mock', mock)
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightQuestions, setRightQuestions] = useState(0);

  return (
    <div className="App">
      <Space
        direction="vertical"
        align="center"
        style={{ width: '100%' }}
      >
        <Avatar
          src={`https://api.adorable.io/avatars/100/${Math.random()}`}
          size={100}
        />
        <div>{ currentQuestion } / 10</div>
        <div className="rightQustions">{ rightQuestions }</div>

      </Space>
      
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
            onClick={() => {setCurrentQuestion(currentQuestion + 1); setRightQuestions(currentQuestion + 1) }}
          >
            {answer}
          </Button>)
        }
      </Space>
    </div>
  );
}

export default App;
