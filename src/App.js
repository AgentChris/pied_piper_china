import React, { Component } from 'react';
import ReactGA from 'react-ga';
import cd from './assets/cs_image.png';
import piedpiper_gray from './assets/piedpier-gray.png';
import piedpiper_red from './assets/piedpiper-red.png';
import piedpiper_violet from './assets/piedpiper-violet.svg';
import piedpiper_green from './assets/piedpiper-green.png';
import './App.css';

const renderPiper = () => {
  let result = [];
  let leftSize = 80;
  for (let i = 0; i <= 100; i++) {
    if (i % 2) {
      result.push(
        <img src={piedpiper_red} className="footer-image-piper-red" style={{ left: leftSize * i }} />,
        <img src={piedpiper_green} className="footer-image-piper-green footer-image-piper"
             style={{ left: leftSize * i }} />
      );
    } else {
      result.push(
        <img src={piedpiper_red} className="footer-image-piper-red footer-image-piper"
             style={{ left: leftSize * i }} />,
        <img src={piedpiper_green} className="footer-image-piper-green footer-image-piper-invert"
             style={{ left: leftSize * i }} />
      );
    }
  }
  return result;
};

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-124884503-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={cd} className="cd-img" alt="logo" />
          <span className="banner-title"><h1>COMING SOONE</h1></span>
          <img src={cd} className="cd-img" alt="logo" />
        </header>
        <main>
          <section className="sidebar">
            <div className="sidebar-side-logo animated-chinese-sidebar-text">
              <img src={piedpiper_violet} className="sidebar-side-logo-image" />
            </div>
            <div className="sidebar-side-logo-text">
              <div className="logo-text pied-logo-text">pied</div>
              <div className="logo-text piper-logo-text">piper</div>
            </div>
            <div className="sidebar-side-logo-text-shiny animated-chinese-sidebar-text">敬臟颶待</div>
          </section>
          <section className="main-content">
            <div>
              <div className="main-content-children">
                <div className="main-content-title">
                  <div className="main-content-title-pied">pied</div>
                  <div className="main-content-title-piper">piper</div>
                </div>
                <img src={piedpiper_green} className="big-piper" />
                <img src={piedpiper_gray} className="big-piper big-piper-animation" />
              </div>
              <div className="live-count-container">
                The page has been visited <span className="count">0001934</span> times!
              </div>
            </div>
          </section>
          <section className="sidebar">
            <div className="sidebar-side-logo animated-chinese-sidebar-text-invert">
              <img src={piedpiper_green} className="sidebar-side-logo-image" />
            </div>
            <div className="sidebar-side-logo-text">
              <div className="logo-text pied-logo-text">pied</div>
              <div className="logo-text piper-logo-text">piper</div>
            </div>
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
            {renderPiper()}
          </div>
          <div className="custom-code">
            <div>
              <div>We are community of dev who want to build all silicon valley TV series apps.</div>
              <div>To continue to develop this types of projects we need donations.</div>
              <div>We want to build "Not a hot dog app" any amount of money will help.</div>
            </div>
            <button  onClick={()=>{
              console.log("go");
              console.log(ReactGA);
              ReactGA.event({
                category: 'Donate',
                action: 'Hover over donate',
              });
            }}>ba</button>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="7XTME784VNVTY" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0"
                     name="submit" alt="PayPal - The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1"
                   height="1" />
            </form>
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
            <span className="footer-terms">terms of use
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
