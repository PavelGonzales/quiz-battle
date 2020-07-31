import React from 'react';
import { Avatar } from 'antd';
import { propStat } from './../utils/propValidation';
import './styles.css';

function PlayerStat(props) {
  const { rightAnswers = 0, rival, avatar } = props;
  const classesRightAnswers = ['rightAnswers'];

  if (rival) {
    classesRightAnswers.push('rightAnswers_rival');
  }

  return (
    <div className="userContainer">
      <Avatar
        src={avatar}
        size={100}
      />
      <div className={classesRightAnswers.join(' ')}>{ rightAnswers }</div>
    </div>
  );
}

PlayerStat.propTypes = propStat;

export default PlayerStat;
