import PropTypes from 'prop-types';

export const propPlayers = {
  players: PropTypes.shape({
    player: PropTypes.object,
    rival: PropTypes.object,
  }).isRequired,
};

export const propStat = {
  rival: PropTypes.bool,
  rightAnswers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};

export const propQuestions = {
  question: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswer: PropTypes.string.isRequired,
  onAnswerClick: PropTypes.func.isRequired,
};
