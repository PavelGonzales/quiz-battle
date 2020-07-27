import React from 'react';
import { Avatar } from 'antd';
import './styles.css';

const avatarSrc = `https://api.adorable.io/avatars/200/${Math.random()}`;

function PlayerStat(props) {
  const { rightQuestions = 0 } = props;
  
  return (
    <div className="userContainer">
      <Avatar
        src={avatarSrc}
        size={100}
      />
      <div className="rightQustions">{ rightQuestions }</div>
    </div>
  );
}

export default PlayerStat;
