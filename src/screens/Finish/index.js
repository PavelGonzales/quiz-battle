import React from 'react';
import { Button, Avatar, Space } from 'antd';
import { Typography } from 'antd';
import { Link } from "react-router-dom";
// Styles
import './styles.css';

const { Title } = Typography;

function Finishcreen() {
  const avatarSrc = `https://api.adorable.io/avatars/200/${Math.random()}`;
  const isWin = true;
  const title = isWin ? 'Win!' : 'Lose!';

  return (
    <Space
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

      <Space>
        <Avatar
          src={avatarSrc}
          size={75}
        />
        <div>
          <div className="">Right answers: { 88 }</div>
          <div className="">Wrong answers: { 14 }</div>
        </div>
      </Space>

      <Space>
        <Avatar
          src={avatarSrc}
          size={75}
        />
        <div>
          <div className="">Right answers: { 14 }</div>
          <div className="">Wrong answers: { 88 }</div>
        </div>
      </Space>
  
      <Button size="large">
        <Link to="/find">Play again</Link>
      </Button>
    </Space>
  );
}

export default Finishcreen;
