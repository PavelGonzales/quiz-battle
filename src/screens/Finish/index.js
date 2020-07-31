import React from 'react';
import { Button, Avatar, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { propPlayers } from './../utils/propValidation';
// Styles
import './styles.css';

const { Title } = Typography;

function Finishcreen(props) {
  const { players } = props;
  const { player = {}, rival = {} } = players;
  const title = player.rightAnswers > rival.rightAnswers ? 'Win!' : 'Lose!';

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
          src={player.avatar}
          size={75}
          className="player-info__avatar"
        />
        <div className="player-info__stats">
          <div className="">Right answers: { player.rightAnswers }</div>
          <div className="">Wrong answers: { player.wrongAnswers }</div>
        </div>
      </div>

      <div className="finish-screen__player-info">
        <Avatar
          src={rival.avatar}
          size={75}
          className="player-info__avatar"
        />
        <div className="player-info__stats">
          <div className="">Right answers: { rival.rightAnswers }</div>
          <div className="">Wrong answers: { rival.wrongAnswers }</div>
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

Finishcreen.propTypes = propPlayers;

const mapStateToProps = ({ players }) => ({
  players,
});

export default connect(mapStateToProps)(Finishcreen);
