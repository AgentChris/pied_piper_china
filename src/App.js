import React, { Component } from 'react';
import cd from './assets/cd-animated-gif-11.gif';
import piedpiper_violet from './assets/piedpiper-violet.svg';
import piedpiper_green from './assets/piedpiper-green.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={cd} className="cd-img" alt="logo" />
          <h1 className="banner-title">COMING SOONE</h1>
          <img src={cd} className="cd-img" alt="logo" />
        </header>
        <main>
          <section className="sidebar">
            <div className="sidebar-side-logo animated-chinese-sidebar-text">
              <img src={piedpiper_violet} className="sidebar-side-logo-image"/>
            </div>
            <div className="sidebar-side-logo-text">
              <div className="logo-text pied-logo-text">pied</div>
              <div className="logo-text piper-logo-text">piper</div>
            </div>
            <div className="sidebar-side-logo-text-shiny animated-chinese-sidebar-text">敬臟颶待</div>
          </section>
          <section className="main-content">
            <div className="main-content-children">
            </div>
            <div className="live-count-container">
              The page has been visited <span className="count">0002112</span> times!
            </div>
          </section>
          <section className="sidebar">
            <div className="sidebar-side-logo animated-chinese-sidebar-text-invert">
              <img src={piedpiper_green} className="sidebar-side-logo-image"/>
            </div>
            <div className="sidebar-side-logo-text">
              <div className="logo-text pied-logo-text">pied</div>
              <div className="logo-text piper-logo-text">piper</div></div>
            <div className="sidebar-side-logo-text-shiny animated-chinese-sidebar-text-invert">敬臟颶待</div>
          </section>
        </main>
        <footer>
          <div className="comming-soon">
            <span className="comming-soon-text">comming soone!</span>
            <span className="comming-soon-text">comming soone!</span>
            <span className="comming-soon-text">comming soone!</span>
            <span className="comming-soon-text">comming soone!</span>
            <span className="comming-soon-text">comming soone!</span>
          </div>
          <div className="chinese-text-container">
            <div className="chinese-text-children animated-chinese-footer-text-green">互臟廳眈忨囀忨</div>
            <div className="chinese-text-children animated-chinese-footer-text">互臟廳眈忨囀忨</div>
            <div className="chinese-text-children animated-chinese-footer-text-green">互臟廳眈忨囀忨</div>
            <div className="chinese-text-children animated-chinese-footer-text">互臟廳眈忨囀忨</div>
          </div>
          <div className="pied-pier-footer-img">
          </div>
          <div className="copyright-container">
            <div>
              <div className="privacy-policy">privacy policy</div>
            </div>
            <div>
              <span>copyright 2018</span>
              <span className="footer-pied-piper-name">PiedPieperChina</span>
              <span>homepage</span>
            </div>
            <span>terms of use</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
