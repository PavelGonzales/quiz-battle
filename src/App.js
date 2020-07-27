import React, { useState } from 'react';
import { Progress } from 'antd';
// Styles
import './App.css';
// Mocks
import mock from './mocks/quiz';
// Components
import Timer from './components/Timer';
import QustionWithAnswers from './components/QustionWithAnswers';
import PlayerStat from './components/PlayerStat';

console.log('mock', mock)
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightQuestions, setRightQuestions] = useState(0);

  return (
    <div className="App">
      <Timer />
      <Progress
        percent={100}
        success={{ percent: 50 }}
        showInfo={false}
        status="exception"
        className="progress"
      />
      <PlayerStat rightQuestions={rightQuestions} />

      {
        currentQuestion < 10 ? (
          <>
            <QustionWithAnswers
              question={mock.results[currentQuestion].question}
              incorrectAnswers={mock.results[currentQuestion].incorrect_answers}
              correctAnswer={mock.results[currentQuestion].correct_answer}
              onAnswerClick={() => {setCurrentQuestion(currentQuestion + 1); setRightQuestions(currentQuestion + 1) }}
            />
          </>
        ) : 'The End'
      }
    </div>
  );
}

export default App;
