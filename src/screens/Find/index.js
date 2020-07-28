import React from 'react';
import { Button, Avatar, Space } from 'antd';
// Styles
import './styles.css';

function FindScreen() {
  const avatarSrc = `https://api.adorable.io/avatars/200/${Math.random()}`;
  const rivalAvatars = [];

  for (let i = 0; i < 10; i++) {
    rivalAvatars.push(`https://api.adorable.io/avatars/100/${i}`);
  }

  rivalAvatars.push(...rivalAvatars);

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

      <div className="find-screen__vs">VS</div>

      <div className="find-screen__slider">
        {
          rivalAvatars.map(src => <Avatar className="find-screen__slider-item" src={src} size={50} key={src} />)
        }
      </div>

      Find rival...

      <Button size="large">
        Cancel
      </Button>
    </Space>
  );
}

export default FindScreen;
