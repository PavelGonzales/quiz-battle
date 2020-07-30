import React from 'react';
import { Button, Avatar, Space } from 'antd';
import { Link, Redirect } from "react-router-dom";
import { AVATAR_URL_100 } from './../../utils/constants';
// Styles
import './styles.css';
import { connect } from 'react-redux';
import { findRival } from './../../actions/players';

function FindScreen(props) {
  const { players, findRival } = props;
  const { player = {}, rival = {} } = players;
  const rivalAvatars = [];

  for (let i = 0; i < 10; i++) {
    rivalAvatars[i] =  `${AVATAR_URL_100}${i}`;
    rivalAvatars[i + 10] =  `${AVATAR_URL_100}${i}`;
  }

  if (rival.avatar) {
    return <Redirect to='/battle' />;
  } else {
    findRival();
  }

  return (
    <Space
      direction="vertical"
      align="center"
      className="find-screen"
      size={40}
    >
      <Avatar
        src={player.avatar}
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

const mapStateToProps = ({ players }) => ({
  players,
});

const mapDispatchToProps = dispatch => ({
  findRival: () => {
    dispatch(findRival());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FindScreen);
