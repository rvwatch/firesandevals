import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';
import * as mock from '../../MockData/MockData';

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<CardContainer houses={mock.mockHouses} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should add houses to props', () => {
      const houses = mock.mockHouse;
      const expected = mock.mockHouse;
      const mockState = {houses};
      const mapped = mapStateToProps(mockState);
      expect(mapped.houses).toEqual(expected);
    });

    it('should add swornMembers to props', () => {
      const swornMembers = [{"died": "", "house": "House Dayne of Starfall", "name": "Allyria Dayne"}];
      const expected = swornMembers;
      const mockState = {swornMembers};
      const mapped = mapStateToProps(mockState);
      expect(mapped.swornMembers).toEqual(expected);
    });
  });

});
