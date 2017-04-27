import React from 'react';
import { Col, Card } from 'antd';

const SearchList = (props) => (
  <Col span={6}>
    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
      <div className="custom-image">
        <img alt="example" width="100%" src={props.track.album.images[0].url} />
      </div>
      <div className="custom-card">
        <h3>Europe Street beat</h3>
        <p>www.instagram.com</p>
      </div>
    </Card>
    <br />
    <br />
  </Col>
);

export default SearchList;
