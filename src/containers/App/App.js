import React, { Component } from 'react';
import { array, func } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import { fetchData } from '../../ApiCalls/fetchData';
import {swornData} from '../../ApiCalls/swornData';
import CardContainer from '../CardContainer/CardContainer';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const houses = await fetchData();
      this.props.addHouses(houses);

      const swornUrls = this.props.houses.map(house => house.swornMembers);
      const swornMembers = await swornData(swornUrls);

      this.setState({ loading: false });
    } catch (errs) {
      this.setState({
        error: errs
      });
    }
  }

  render() {
    const loading = this.state.loading ? <div className="wolf" /> : null;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className="Display-info">
          {loading}
          <CardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  houses: array,
  addHouses: func.isRequired
};

export const mapStateToProps = ({ houses }) => ({ houses });
export const mapDispatchToProps = dispatch => ({
  addHouses: houses => dispatch(addHouses(houses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
