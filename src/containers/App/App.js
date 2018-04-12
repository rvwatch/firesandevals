import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import { fetchData } from '../../ApiCalls/fetchData';
import CardContainer from '../CardContainer/CardContainer';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    };
  }

  async componentDidMount() {
    try {
      const houses = await fetchData();
      this.props.addHouses(houses);
    } catch (errs) {
      this.setState({
        error: errs
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>
          <button
            onClick={() => {
              this.props.fakeAction();
              alert(this.props.fake);
            }}
          >
            {' '}
            FAKE ACTION
          </button>
        </div>
        <div className="Display-info">
          <CardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  houses: shape({ houses: string }),
  addHouses: func.isRequired
};

export const mapStateToProps = ({ houses }) => ({ houses });
export const mapDispatchToProps = dispatch => ({
  addHouses: houses => dispatch(addHouses(houses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
