import React from 'react';
import { Button, Avatar, Space } from 'antd';
import { Link } from "react-router-dom";
import { AVATAR_URL_200 } from './../../utils/constants';
// Styles
import './styles.css';
import { connect } from 'react-redux';

function MainScreen(props) {
  const { players, addPlayer } = props;
  const avatar = players && players.player && players.player.avatar

  if (!avatar) {
    addPlayer(`${AVATAR_URL_200}${Math.floor(Math.random() * Math.floor(70))}`)
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

      <Button size="large">
        <Link to="/find">Play</Link>
      </Button>
    </Space>
  );
}

export default connect(
  state => ({
    players: state.players
  }),
  dispatch => ({
    addPlayer: avatar => {
      dispatch({
        type: 'ADD_PLAYER',
        payload: {
          avatar,
          rightAnswers: 0
        }
      })
    }
  }),
)(MainScreen);
