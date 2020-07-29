import React from 'react';
import { Button, Avatar, Space } from 'antd';
import { Link } from "react-router-dom";
import { AVATAR_URL_200 } from './../../utils/constants';
// Styles
import './styles.css';

function MainScreen() {
  const avatarSrc = `${AVATAR_URL_200}${Math.random()}`;

  return (
    <Space
      direction="vertical"
      align="center"
      className="find-screen"
      size={40}
    >
      <Avatar
        src={avatarSrc}
        size={100}
      />

      <Button size="large">
        <Link to="/find">Play</Link>
      </Button>
    </Space>
  );
}

export default MainScreen;
