import React, { Component } from 'react';
import ReactGA from 'react-ga';
import cd from './assets/cs_image.png';
import piedpiper_gray from './assets/piedpier-gray.png';
import song from './assets/Abba - Super Trouper.mp3';
import piedpiper_red from './assets/piedpiper-red.png';
import piedpiper_violet from './assets/piedpiper-violet.svg';
import piedpiper_green from './assets/piedpiper-green.png';
import cool from './assets/bad ass.gif';
import showIsGoneSrc from './assets/isgone.gif';
import showIsOcasionSrc from './assets/ocasion.gif';
import handshakeSrc from './assets/rad.gif';
import antoanSrc from './assets/5b8a2866de7c0325233531.gif';
import ericDeatchSrc from './assets/erichdeath.gif';
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
  constructor(props) {
    super(props);
    this.state = {
      showCool: false,
      showIsGone: false,
      showPipa: false,
      atLeastOneshowIsGone: false,
      atLeastOneshowCool: false,
      atLeastOneshowsOcasion: false,
      message: false,
      optionAnswer: false,
      ericDeatch: false,
      click4times: 0,
      answer: "",
      showIsOcasion: false,
      showCongrats: false,
    };
  }

  componentDidMount() {
    console.log("there is a contest the first person who will find the secret 'hidden message' and have twitter post with the " +
      "message: #newpiedpiper #piedpiper http://newpiedpiper.com/ 'hidden message' ");
    console.log("click pied piper * 4");
    ReactGA.initialize('UA-125025103-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  showBadASs = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.setState((state) => ({ showCool: !state.showCool, atLeastOneshowCool: true }));
    ReactGA.event({
      category: 'play',
      action: 'bad'
    });
  };

  changeAnswer = (e) => {
    this.setState({ answer: e.target.value });
    ReactGA.event({
      category: 'play',
      action: 'almostanswer'
    });
  };

  showPipa = () => {
    this.setState((state) => ({ click4times: state.click4times + 1 }));
    if (this.state.click4times > 3) {
      this.setState({ optionAnswer: true, ericDeatch: true });
    }
    ReactGA.event({
      category: 'play',
      action: 'pipa'
    });
  };

  checkAnswer = () => {
    const { answer } = this.state;
    if (answer === "the best pied pipa") {
      this.setState({ showCongrats: true, });
      ReactGA.event({
        category: 'play',
        action: 'finalfinal'
      });
    } else {
      this.setState({ message: true });
    }
    ReactGA.event({
      category: 'play',
      action: 'final'
    });
  };

  showIsGone = () => {
    this.setState((state) => ({ showIsGone: !state.showIsGone, atLeastOneshowIsGone: true }));
    ReactGA.event({
      category: 'play',
      action: 'gone'
    });
  };
  showIsOcasion = (val) => {
    this.setState((state) => ({ showIsOcasion: val, atLeastOneshowsOcasion: true }));
    ReactGA.event({
      category: 'play',
      action: 'ocasion'
    });
  };

  render() {
    const {
      showCool, showIsGone, showIsOcasion, answer, showCongrats, atLeastOneshowIsGone,
      atLeastOneshowCool, atLeastOneshowsOcasion, message, optionAnswer, ericDeatch
    } = this.state;
    return (
      <div className="App">
        <header className="header">
          <img src={cd} className="cd-img" alt="logo" />
          <span className="banner-title"><h1>COMING SOONE</h1></span>
          <img src={cd} className="cd-img" alt="logo" onMouseEnter={() => {
            this.showIsOcasion(true);
          }} />
          {showIsOcasion ? <span className="z-index-top"><img src={showIsOcasionSrc} onMouseLeave={() => {
            this.showIsOcasion(false);
          }} />"pied"</span> : false}
        </header>
        <main>
          <section className="sidebar">
            <div className="sidebar-side-logo animated-chinese-sidebar-text">
              <img src={piedpiper_violet} className="sidebar-side-logo-image" />
            </div>
            <div className="sidebar-side-logo-text" onClick={this.showPipa}>
              <div className="logo-text pied-logo-text">pied</div>
              <div className="logo-text piper-logo-text">piper</div>
            </div>
            <div className="sidebar-side-logo-text-shiny animated-chinese-sidebar-text">敬臟颶待</div>
          </section>
          <section className="main-content">
            <div>
              <div className="main-content-children">
                {showCool ? <span><img src={cool} />"the"</span> : false}
                <div className="main-content-title">
                  <div className="main-content-title-pied">pied</div>
                  <div className="main-content-title-piper">piper</div>
                </div>
                <img src={piedpiper_green} className="big-piper" onClick={this.showBadASs} />
                <img src={piedpiper_gray} onClick={this.showBadASs} className="big-piper big-piper-animation" />
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
              {ericDeatch ? <span className="z-index-top"><img src={ericDeatchSrc} />"pipa"</span> : null}
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
            <div className="chinese-text-children animated-chinese-footer-text-green">互臟廳眈忨<span
              onClick={this.showIsGone}>囀</span>忨
            </div>
            <div className="chinese-text-children animated-chinese-footer-text">互臟廳眈忨囀忨</div>
          </div>
          {showIsGone ? <span><img src={showIsGoneSrc} />"best"</span> : false}
          <div className="pied-pier-footer-img">
            {renderPiper()}
          </div>
          <div className="custom-code">
            {optionAnswer && atLeastOneshowCool && atLeastOneshowsOcasion && atLeastOneshowIsGone ?
              <div>
                <label>Enter answer to joine pied pipa china</label>
                <input type="text" value={answer} onChange={this.changeAnswer} placeholder="check answer" />
                {message && !showCongrats ? <span><img src={antoanSrc} />"nope try again"</span> : null}
                <button onClick={this.checkAnswer}>checku</button>
                {showCongrats ? <img src={handshakeSrc} /> : null}
              </div>
              : null
            }
            <div>
              <div>We are a community of developers who want to build all silicon valley TV series apps. To continue to
                develop
                this types of projects we need donations.
              </div>
              <div>Also if you donate you will get the chance to appear on the website as a top investor. We want to
                build "Not a hot dog app" any amount of money will help.
              </div>
            </div>
            <div>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="7XTME784VNVTY" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0"
                       name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1"
                     height="1" />
              </form>
              <div>Money raised: 200$ out of 1000$ for "not a hot dog app".</div>
            </div>
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
          <audio controls autoPlay loop controlsList="nodownload">
            <source
              src={song}
              type="audio/mpeg" />
          </audio>
        </footer>
      </div>
    );
  }
}

export default App;
