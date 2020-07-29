import React, { useState } from 'react';
import { Avatar } from 'antd';
import { AVATAR_URL_200 } from './../../utils/constants';
import './styles.css';

function PlayerStat(props) {
  const { rightQuestions = 0, rival } = props;
  const [avatarSrc] = useState(`${AVATAR_URL_200}${Math.random()}`)
  const classesRightQuestions = ['rightQustions']

  if (rival) {
    classesRightQuestions.push('rightQustions_rival');
  }
  
  return (
    <div className="userContainer">
      <Avatar
        src={avatarSrc}
        size={100}
      />
      <div className={classesRightQuestions.join(' ')}>{ rightQuestions }</div>
    </div>
  );
}

export default PlayerStat;
