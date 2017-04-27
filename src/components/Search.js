import React from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { searchTracks } from '../actions';

const SearchComponent = ({ searchTracks }) => {
  const Search = Input.Search;
  return (
    <Search
      placeholder="Search tracks"
      style={{ width: 150 }}
      onSearch={value => (searchTracks(value))}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  searchTracks: value => dispatch(searchTracks(value)),
});


export default connect(null, mapDispatchToProps)(SearchComponent);
