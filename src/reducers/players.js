const initialState = {}

export default function reducer(state = initialState, action) {
  if (action.type === 'ADD_PLAYER') {
    return {
      ...state,
      player: {
        ...action.payload,
      }
    }
  }
  if (action.type === 'ADD_RIVAL') {
    return {
      ...state,
      rival: {
        ...action.payload,
      }
    }
  }
  if (action.type === 'SET_RIGHT_ANSWER_TO_PLAYER') {
    return {
      ...state,
      player: {
        ...state.player,
        rightAnswers: action.payload.count,
      }
    }
  }
  if (action.type === 'SET_RIGHT_ANSWER_TO_RIVAL') {
    return {
      ...state,
      rival: {
        ...state.rival,
        rightAnswers: action.payload.count,
      }
    }
  }
  return state;
}
