import React from 'react';
import { Button, Avatar, Space } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AVATAR_URL_200 } from './../../utils/constants';
import { propPlayers } from './../utils/propValidation';
// Styles
import './styles.css';

function MainScreen(props) {
  const { players, addPlayer } = props;
  const avatar = players && players.player && players.player.avatar;

  if (!avatar) {
    addPlayer(`${AVATAR_URL_200}${Math.floor(Math.random() * Math.floor(70))}`);
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
};

MainScreen.propTypes = propPlayers;

const mapStateToProps = ({ players }) => ({
  players,
});

const mapDispatchToProps = dispatch => ({
  addPlayer: avatar => {
    dispatch({
      type: 'ADD_PLAYER',
      payload: {
        avatar,
        rightAnswers: 0,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
