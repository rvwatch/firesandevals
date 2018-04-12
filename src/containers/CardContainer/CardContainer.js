import React from 'react';
import { connect } from 'react-redux';
import {Card} from '../../components/Card/';

const CardContainer = () => {
  const renderHouses = this.props.houses.map(house => (
    <Card {house} />
  ))
  return (
    <section>
      {renderHouses}
    </section>
  );
};

export const mapStateToProps = state => ({
  houses: state.houses
});

export default connect(mapStateToProps, null)(CardContainer)