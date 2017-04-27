import React from 'react';
import { Row,Spin } from 'antd';
import { connect } from 'react-redux';
import SearchList from './SearchList';


const Home = ({ searchResult }) => (
  <Row gutter={24}>
    <h2>Welcome to Fav Tracks</h2>
    <h3>Search your Favourite Tracks</h3>
    <br />
    { searchResult.length === 0 && <Spin size="large" />}
    {searchResult.map(track => <SearchList key={track.id} track={track} />)}
  </Row>
);

const mapStateToProps = state => ({
  searchResult: state.searchResult,
});

export default connect(mapStateToProps, null)(Home);
