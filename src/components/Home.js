import React from 'react';
import { Row, Spin } from 'antd';
import { connect } from 'react-redux';
import SearchList from './SearchList';


const Home = ({ searchResult }) => (
  <div>
    <h2>Welcome to Fav Tracks</h2>
    <h3>Search your Favourite Tracks</h3>
    { searchResult.length === 0 && <Spin size="large" />}
    <Row gutter={24} type="flex" justify="space-around" align="middle">
      {searchResult.map(track => <SearchList key={track.id} track={track} />)}
    </Row>
  </div>
);

const mapStateToProps = state => ({
  searchResult: state.searchResult,
});

export default connect(mapStateToProps, null)(Home);
