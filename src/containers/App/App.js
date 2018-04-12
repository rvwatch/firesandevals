import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import {getHouses} from '../../ApiCalls/getHouses';
import CardContainer from '../CardContainer/CardContainer';
class App extends Component {

  async componentDidMount() {
    const houses = await getHouses();
    //this.props.addHouses(houses);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
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

const mapStateToProps = ({ houses }) => ({ houses });
const mapDispatchToProps = dispatch => ({ addHouses:
  (houses) => dispatch(addHouses(houses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
