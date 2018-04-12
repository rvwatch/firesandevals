import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';

export const CardContainer = props => {

  const renderHouses = props.houses.length ? props.houses.map(house => (
    <Card key={Date.now()} {...house} />
  )) : null;
  return (
    <section className='Container'>
      {renderHouses}
    </section>
  );
};

export const mapStateToProps = state => ({
  houses: state.houses
});

export default connect(mapStateToProps, null)(CardContainer);
