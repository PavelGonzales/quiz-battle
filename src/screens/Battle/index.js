import React, { useState, useEffect } from 'react';
import { Progress, Space } from 'antd';
import { Redirect } from "react-router-dom";
// Styles
import './styles.css';
// Mocks
import mock from './../../mocks/quiz';
// Components
import Timer from './../../components/Timer';
import QustionWithAnswers from './../../components/QustionWithAnswers';
import PlayerStat from './../../components/PlayerStat';
import { connect } from 'react-redux';

function BattleScreen(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRedirect, setIsRedirect] = useState(false);
  const [percent, setPercent] = useState(50);
  const currentQuestion = mock.results[currentQuestionIndex] || {};

  const { players, setRightAnswerToPlayer, setRightAnswerToRival } = props;
  const { player = {}, rival = {} } = players;
  const playerAnswers = player.rightAnswers || 0;
  const rivalAnswers = rival.rightAnswers || 0;

  const onAnswerClick = () => {
    return (answer) => {
      if (answer === currentQuestion.correct_answer) {
        setRightAnswerToPlayer(playerAnswers + 1);
      } else {
        setRightAnswerToRival(rivalAnswers + Math.round(Math.random()));
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const calculatePercent = ({ playerAnswers, rivalAnswers }) => {
    const isBothParameterZero = playerAnswers === 0 && rivalAnswers === 0;
    const right = isNaN(playerAnswers) || isBothParameterZero ? 1 : playerAnswers;
    const wrong = isNaN(rivalAnswers) || isBothParameterZero ? 1 : rivalAnswers;

    const sum = wrong + right;
    const res = right * 100 / sum;

    return res;
  }

  useEffect(() => {
    const calcPerc = calculatePercent({ playerAnswers, rivalAnswers })

    setPercent(calcPerc);
  }, [playerAnswers, rivalAnswers])

  useEffect(() => {
    if (currentQuestionIndex === mock.results.length - 1) {
      setIsRedirect(true);
    }
  }, [currentQuestionIndex])

  if (isRedirect) {
    return <Redirect to='/finish' />;
  }

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
        <PlayerStat
          avatar={player.avatar}
          rightAnswers={playerAnswers}
        />
        <PlayerStat
          rival
          avatar={rival.avatar}
          rightAnswers={rivalAnswers}
        />
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

export default connect(
  state => ({
    players: state.players
  }),
  dispatch => ({
    setRightAnswerToPlayer: count => {
      dispatch({
        type: 'SET_RIGHT_ANSWER_TO_PLAYER',
        payload: {
          count,
        },
      })
    },
    setRightAnswerToRival: count => {
      dispatch({
        type: 'SET_RIGHT_ANSWER_TO_RIVAL',
        payload: {
          count,
        },
      })
    }
  }),
)(BattleScreen);
