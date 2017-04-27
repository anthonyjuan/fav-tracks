import React from 'react';
import { Row } from 'antd';
import { connect } from 'react-redux';
import SearchList from './SearchList';

const Home = ({ searchResult }) => (
  <Row gutter={24}>
    {searchResult.map(track => <SearchList key={track.id} track={track} />)}
  </Row>
);

const mapStateToProps = state => ({
  searchResult: state.searchResult,
});

export default connect(mapStateToProps, null)(Home);
