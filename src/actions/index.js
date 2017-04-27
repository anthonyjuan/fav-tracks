import { SEARCH_KEYWORD } from './constants';

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
