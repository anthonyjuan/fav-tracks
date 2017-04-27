import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SearchComponent from './components/Search';
import FavTracks from './components/FavTracks';


const { Header, Sider, Content } = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo">
                <SearchComponent />
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="home" />
                  <Link to="/"><span className="nav-text">Home</span></Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="play-circle-o" />
                  <Link to="/favtrack"><span className="nav-text">Fav Tracks</span></Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0, height: '80px' }}>
                <img src={logo} className="App-logo" alt="logo" />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 680 }}>
                <h2>Welcome to Fav Tracks</h2>
                <h3>Search your Favourite Tracks</h3>
                <Route exact path="/" component={Home} />
                <Route path="/favtrack" component={FavTracks} />
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
