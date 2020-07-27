import React, { useState, useEffect } from 'react';
import { Progress, Space } from 'antd';
// Styles
import './styles.css';
// Mocks
import mock from './../../mocks/quiz';
// Components
import Timer from './../../components/Timer';
import QustionWithAnswers from './../../components/QustionWithAnswers';
import PlayerStat from './../../components/PlayerStat';

function MainScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [rightQuestions, setRightQuestions] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState(0);
  const [percent, setPercent] = useState(50);
  const currentQuestion = mock.results[currentQuestionIndex] || {};

  const onAnswerClick = () => {
    return (answer) => {
      if (answer === currentQuestion.correct_answer) {
        setRightQuestions(rightQuestions + 1);
      } else {
        setWrongQuestions(wrongQuestions + Math.round(Math.random()));
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const calculatePercent = ({ rightQuestions, wrongQuestions }) => {
    const isBothParameterZero = rightQuestions === 0 && wrongQuestions === 0;
    const right = isNaN(rightQuestions) || isBothParameterZero ? 1 : rightQuestions;
    const wrong = isNaN(wrongQuestions) || isBothParameterZero ? 1 : wrongQuestions;

    const sum = wrong + right;
    const res = right * 100 / sum;

    return res;
  }

  useEffect(() => {
    const calcPerc = calculatePercent({ rightQuestions, wrongQuestions })

    setPercent(calcPerc);
  }, [rightQuestions, wrongQuestions])

  return (
    <>
      <Timer />

      <Progress
        percent={100}
        success={{ percent }}
        showInfo={false}
        status="exception"
        className="progress"
      />

      <Space
        style={{ justifyContent: 'space-around' }}
      >
        <PlayerStat rightQuestions={rightQuestions} />
        <PlayerStat rival rightQuestions={wrongQuestions} />
      </Space>
      
      <QustionWithAnswers
        question={currentQuestion.question}
        incorrectAnswers={currentQuestion.incorrect_answers}
        correctAnswer={currentQuestion.correct_answer}
        onAnswerClick={onAnswerClick(currentQuestionIndex)}
      />
    </>
  );
}

export default MainScreen;
