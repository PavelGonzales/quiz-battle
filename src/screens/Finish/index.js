import React from 'react';
import { Button, Avatar } from 'antd';
import { Typography } from 'antd';
import { Link } from "react-router-dom";
import { AVATAR_URL_200 } from './../../utils/constants';
// Styles
import './styles.css';

const { Title } = Typography;

function Finishcreen() {
  const avatarSrc = `${AVATAR_URL_200}${Math.random()}`;
  const isWin = true;
  const title = isWin ? 'Win!' : 'Lose!';

  return (
    <div
      direction="vertical"
      align="center"
      className="finish-screen"
      size={40}
    >
      <Title
        level={1}
        className="finish-screen__title"
      >
        { title }
      </Title>

      <div className="finish-screen__player-info">
        <Avatar
          src={avatarSrc}
          size={75}
          className="player-info__avatar"
        />
        <div className="player-info__stats">
          <div className="">Right answers: { 88 }</div>
          <div className="">Wrong answers: { 14 }</div>
        </div>
      </div>

      <div className="finish-screen__player-info">
        <Avatar
          src={avatarSrc}
          size={75}
          className="player-info__avatar"
        />
        <div className="player-info__stats">
          <div className="">Right answers: { 14 }</div>
          <div className="">Wrong answers: { 88 }</div>
        </div>
      </div>
  
      <Button
        size="large"
        className="finish-screen__button"
      >
        <Link to="/find">Play again</Link>
      </Button>
    </div>
  );
}

export default Finishcreen;
