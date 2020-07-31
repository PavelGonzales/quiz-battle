import { AVATAR_URL_200 } from './../utils/constants';

export const findRival = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: 'ADD_RIVAL',
      payload: {
        avatar: `${AVATAR_URL_200}${Math.floor(Math.random() * Math.floor(70))}`,
        rightAnswers: 0,
      },
    });
  }, 3000);
};
