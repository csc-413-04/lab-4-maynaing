import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      banner: 'hello',
      isOpen: false,
      bgColor: "",
    };
    this.textHandler = this.textHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this)
  }

  buttonHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  textHandler(e) {
    this.setState({
      banner: e.target.value,
    });
  }

  bgHandler = (e) => {
    this.setState({
      bgColor: "green"
    })
  }
  
  render() {
    let myVariable = <h2>May</h2>
    let myBanner;
    if (this.state.isOpen) {
      myBanner = <Header banner={this.state.banner}/>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Test
          </p>
          {myBanner}
          {
            this.state.isOpen &&
            <Header banner={this.state.banner}/>
          }
          <input value={this.state.banner} onChange={this.textHandler}/>
          <button onClick={this.buttonHandler} onChange={this.bgHandler}>Click Me</button>
          
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
