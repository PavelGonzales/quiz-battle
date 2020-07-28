import React, { useState } from 'react';
import { Button, Avatar, Space } from 'antd';
import { Link, Redirect } from "react-router-dom";

// Styles
import './styles.css';

function FindScreen() {
  const [isRedirect, setIsRedirect] = useState(false);
  const avatarSrc = `https://api.adorable.io/avatars/200/${Math.random()}`;
  const rivalAvatars = [];

  for (let i = 0; i < 10; i++) {
    rivalAvatars.push(`https://api.adorable.io/avatars/100/${i}`);
  }

  rivalAvatars.push(...rivalAvatars);

  setTimeout(() => {
    setIsRedirect(true);
  }, 3000);

  if (isRedirect) {
    return <Redirect to='/battle' />;
  }

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
          rivalAvatars.map((src, index) => <Avatar className="find-screen__slider-item" src={src} size={50} key={`${src}-${index}`} />)
        }
      </div>

      Find rival...

      <Button size="large">
        <Link to="/">Cancel</Link>
      </Button>
    </Space>
  );
}

export default FindScreen;
