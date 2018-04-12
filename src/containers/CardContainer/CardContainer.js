import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';
import { array } from 'prop-types';

export const CardContainer = props => {
  const renderHouses = props.houses
    ? props.houses.map(house => {
      const swornMembers = props.swornMembers.filter(
        member => member.house === house.name
      );
      return (
        <Card
          swornMembers={swornMembers}
          key={house.name}
          {...house}
        />
      );
    })
    : null;
  return <section className="Container">{renderHouses}</section>;
};

export const mapStateToProps = state => ({
  houses: state.houses,
  swornMembers: state.swornMembers
});

CardContainer.propTypes = {
  houses: array
};

export default connect(mapStateToProps, null)(CardContainer);
