import React from 'react';
import { Avatar, Space } from 'antd';
// Styles
import './styles.css';

function FindScreen() {
  const avatarSrc = `https://api.adorable.io/avatars/200/${Math.random()}`;
  const rivalAvatars = [];

  for (let i = 0; i < 10; i++) {
    rivalAvatars.push(`https://api.adorable.io/avatars/100/${i}`)
  }

  return (
    <Space
      direction="vertical"
      align="center"
      className="find-wrap"
    >
      <Avatar
        src={avatarSrc}
        size={100}
      />

      <div className="vs">VS</div>

      <div className="slider">
        <div className="slider__inner">
          {
            rivalAvatars.map(src => <Avatar className="slider__item" src={src} size={50} key={src} />)
          }
        </div>
      </div>

      <div className="find-rival">Find rival...</div>
    </Space>
  );
}

export default FindScreen;
