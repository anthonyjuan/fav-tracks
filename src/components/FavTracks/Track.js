import React from 'react';
import { Col, Card, Button } from 'antd';
import { connect } from 'react-redux';
import { deleteTrack } from '../../actions';

const Track = ({ track,deleteTrack }) => (
  <Col span={6}>
    <Card title={track.title} style={{ width: 240, padding: 0 }}>
      <p>Artist: {track.artist}</p>
      <a rel="noopener noreferrer" target="_blank" href={`https://play.spotify.com/track/${track.id}`}> Spotify Link </a>
      <br />
      <br />
      <Button onClick={() => deleteTrack(track.id)} shape="circle" type="danger" icon="delete" />
      <Button shape="circle" type="info" icon="edit" />
    </Card>
    <br />
    <br />
  </Col>
);

const mapDispatchToProps = dispatch => ({
  deleteTrack: trackId => dispatch(deleteTrack(trackId)),
});

export default connect(null, mapDispatchToProps)(Track);
