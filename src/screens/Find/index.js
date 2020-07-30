import React, { useState } from 'react';
import { Button, Avatar, Space } from 'antd';
import { Link, Redirect } from "react-router-dom";
import { AVATAR_URL_100, AVATAR_URL_200 } from './../../utils/constants';
// Styles
import './styles.css';
import { connect } from 'react-redux';

function FindScreen(props) {
  const [isRedirect, setIsRedirect] = useState(false);
  const rivalAvatars = [];

  const { players, addRival } = props;
  const avatar = players && players.player && players.player.avatar

  for (let i = 0; i < 10; i++) {
    rivalAvatars.push(`${AVATAR_URL_100}${i}`);
  }

  rivalAvatars.push(...rivalAvatars);

  setTimeout(() => {
    setIsRedirect(true);
  }, 3000);

  if (isRedirect) {
    addRival(`${AVATAR_URL_200}${Math.floor(Math.random() * Math.floor(70))}`);
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
        src={avatar}
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

export default connect(
  state => ({
    players: state.players
  }),
  dispatch => ({
    addRival: avatar => {
      dispatch({
        type: 'ADD_RIVAL',
        payload: {
          avatar,
          rightAnswers: 0
        }
      })
    }
  }),
)(FindScreen);
