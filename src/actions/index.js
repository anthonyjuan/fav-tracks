import { SEARCH_KEYWORD, ADD_TRACK, DELETE_TRACK, EDIT_TRACK } from './constants';

export const searchSuccess = value => ({
  type: SEARCH_KEYWORD,
  payload: value,
});

export const searchTracks = keyword => (
    dispatch => (
      fetch(`https://api.spotify.com/v1/search?q=${keyword}&type=track`)
        .then(res => res.json())
        .then(data => dispatch(searchSuccess(data.tracks)))
    )
  );

export const addTrack = (track) => {
  const newTrack = {
    id: track.id,
    title: track.name,
    artist: track.artists[0].name,
    url: `https://play.spotify.com/track/${track.id}`,
  };

  return {
    type: ADD_TRACK,
    payload: newTrack,
  };
};

export const deleteTrack = trackId => ({
  type: DELETE_TRACK,
  payload: trackId,
});

export const editTrack = track => ({
  type: EDIT_TRACK,
  payload: track,
});
