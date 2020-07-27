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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [rightQuestions, setRightQuestions] = useState(0);
  const currentQuestion = mock.results[currentQuestionIndex] || {};

  const onAnswerClick = () => {
    return (answer) => {
      if (answer === currentQuestion.correct_answer) {
        setRightQuestions(rightQuestions + 1) 
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

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

      <QustionWithAnswers
        question={currentQuestion.question}
        incorrectAnswers={currentQuestion.incorrect_answers}
        correctAnswer={currentQuestion.correct_answer}
        onAnswerClick={onAnswerClick(currentQuestionIndex)}
      />
    </div>
  );
}

export default App;
