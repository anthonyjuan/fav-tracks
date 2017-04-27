import { ADD_TRACK, DELETE_TRACK } from '../actions/constants';

const initialState = [];

const deleteTrack = (state, trackId) => {
  const newState = state.filter(track => track.id !== trackId);
  return newState;
};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACK: {
      const newState = [...state, action.payload];
      return newState;
    }
    case DELETE_TRACK: {
      const newState = deleteTrack(state, action.payload);
      return newState;
    }
    default: return state;

  }
};

export default tracksReducer;
