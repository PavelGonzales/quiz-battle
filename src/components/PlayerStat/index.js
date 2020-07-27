import React, { useState } from 'react';
import { Avatar } from 'antd';
import './styles.css';

function PlayerStat(props) {
  const { rightQuestions = 0, rival } = props;
  const [avatarSrc] = useState(`https://api.adorable.io/avatars/200/${Math.random()}`)
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
