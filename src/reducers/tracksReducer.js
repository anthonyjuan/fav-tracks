import { ADD_TRACK, DELETE_TRACK, EDIT_TRACK } from '../actions/constants';

const initialState = [];

const deleteTrack = (state, trackId) => {
  const newState = state.filter(track => track.id !== trackId);
  return newState;
};

const editTrack = (state, updatedTrack) => {
  const newState = state.map((track) => {
    if (track.id === updatedTrack.id) {
      return {
        ...track,
        title: updatedTrack.title,
        artist: updatedTrack.artist,
      };
    }
    return track;
  });
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
    case EDIT_TRACK: {
      const newState = editTrack(state, action.payload);
      return newState;
    }
    default: return state;

  }
};

export default tracksReducer;
