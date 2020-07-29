import React from 'react';
import { Button, Typography } from 'antd';
import './styles.css';

function shuffleAnswers(answers = []) {
  if (!answers) {
    return [];
  }

  return answers.sort(() => Math.random() - 0.5);
}

function QustionWithAnswers(props) {
  const { question, incorrectAnswers = [], correctAnswer } = props;
  const answers = shuffleAnswers([...incorrectAnswers, correctAnswer]);

  if (!question || answers.length < 1) {
    return ''
  }

  return (
    <>
      <Typography.Title level={4}>
        <div dangerouslySetInnerHTML={{ __html: question }} />
      </Typography.Title>
      
      <div className="qustion-with-answers__buttons-wrap">
        {
          answers.map(answer => <Button 
            key={answer}
            block
            type="primary" 
            shape="round"
            size="large"
            className="qustion-with-answers__buttons"
            onClick={() => { props.onAnswerClick(answer) }}
          >
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </Button>)
        }
      </div>
    </>
  );
}

export default QustionWithAnswers;
