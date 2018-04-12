import React from 'react';
import {shallow} from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import * as Actions from '../../actions/';
import * as mock from '../../MockData/MockData.js';

describe('App', () => {

  it('should match the snapshot', () => {
    const addHouses = jest.fn()
    const wrapper = shallow(<App addHouses={addHouses} />);
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
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with correct params for addHouses', () => {
      const mockDispatch = jest.fn();
      const expected = Actions.addHouses(mock.mockHouse);
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.addHouses(mock.mockHouse);
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    }); 
  });
});

