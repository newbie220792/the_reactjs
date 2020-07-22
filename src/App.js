import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Menu from './Components/menu';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Menu></Menu>
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    );
  };
}

export default App;
