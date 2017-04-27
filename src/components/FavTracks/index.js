import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';
import Track from './Track';

const FavTracks = ({ tracks }) => (
  <div>
    <h3>Your Fav Tracks List</h3>
    <Row gutter={12} type="flex" justify="space-around" align="middle">
      { tracks.map(track => <Track key={track.id} track={track} />)}
    </Row>
  </div>
);


const mapStateToProps = state => ({
  tracks: state.tracks,
});

export default connect(mapStateToProps, null)(FavTracks);
