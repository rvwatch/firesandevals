import addHousesReducer from "./addHousesReducer";
import {addHouses} from '../actions/';
import * as mock from '../MockData/MockData';

describe('addHousesReducer', () => {
  it('should return default state', () => {
    const expected = [];
    expect(addHousesReducer(undefined, [])).toEqual(expected);
  });

  it('should add houses to state', () => {
    const expected = mock.mockHouse;
    const houses = mock.mockHouse;
    expect(addHousesReducer(undefined, addHouses(houses))).toEqual(expected);
  });
  
});