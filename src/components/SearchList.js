import React from 'react';
import { Col, Card, Button, Tooltip } from 'antd';
import { connect } from 'react-redux';

import { addTrack } from '../actions';

const styles = {
  button: {
    float: 'right',
  },
};
const text = 'add to fav!';

const SearchList = ({ track, addTrack }) => (
  <Col span={6}>
    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
      <div className="custom-image">
        <Tooltip placement="topLeft" title={text}>
          <Button
            onClick={() => addTrack(track)}
            style={styles.button}
            type="primary"
            shape="circle"
            icon="plus"
          />
        </Tooltip>
        <img alt="example" width="100%" src={track.album.images[0].url} />
      </div>
      <div className="custom-card">
        <h4>{track.name}</h4>
        <h4>{track.artists[0].name}</h4>
        <a rel="noopener noreferrer" target="_blank" href={`https://play.spotify.com/track/${track.id}`}> Spotify Link </a>
      </div>
    </Card>
    <br />
    <br />
  </Col>
);

const mapDispatchToProps = dispatch => ({
  addTrack: track => dispatch(addTrack(track)),
});

export default connect(null, mapDispatchToProps)(SearchList);
