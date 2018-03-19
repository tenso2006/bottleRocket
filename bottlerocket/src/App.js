import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import previous from './Cuts/ic_webBack@2x.png';
import refresh from './Cuts/ic_webRefresh@2x.png';
import next from './Cuts/ic_webForward@2x.png';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import grouppic from './grouppic.jpg';
import grp1 from './grp1.png';
import group1 from './group1.jpg';
import mainPic from './main-pic.png';
import bottleRocketLogo from './bottleRocketLogo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='top-nav'>
          <div className='control-button'>
            <i className="fa fa-angle-left fa-3x"></i>
            <i className="fa fa-rotate-left fa-2x"></i>
            <i className="fa fa-angle-right fa-3x"></i>
          </div>
        </div>
        <div className='head-nav'>
          <div className='hambugger-icon'>
            <i className="fa fa-bars"></i>
          </div>
          <div className='contact'>contact</div>
          <div className='brand-logo'>
            <img src={bottleRocketLogo} />
          </div>
        </div>
        <div className='main-body'>
          <div className='main-pic'>
            <div className='back-image' style={{backgroundImage: 'url(' + mainPic + ')'}}>
              {/*<img src={grouppic} className='grouppic' alt='group pictures' style={width:'128px', height:'128px'}/>*/}
              <div>we look forward to hearing from you</div>
            </div>
          </div>
          <div className='body-content'>
            <div className='body-content-head'><h4>Let us know how we can help!</h4></div>

            <p className='body-content-detail'>If you are interested in hiring Bottle Rocket for your mobile project, please visit our hire us page.
            </p>
            <hr />
          </div>
        </div>
        <div className='footer'>I am footer
        </div>
      </div>
    );
  }
}

export default App;
