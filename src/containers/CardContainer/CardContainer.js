import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';
import { array } from 'prop-types';

export const CardContainer = props => {
  const renderHouses = props.houses
    ? props.houses.map(house => <Card selectHouse={props.selectHouse} key={house.name} {...house} />)
    : null;
  return <section className="Container">{renderHouses}</section>;
};

export const mapStateToProps = state => ({
  houses: state.houses
});



CardContainer.propTypes = {
  houses: array
};

export default connect(mapStateToProps, null)(CardContainer);
