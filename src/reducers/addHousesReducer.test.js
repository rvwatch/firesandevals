import addHousesReducer from "./addHousesReducer";
import {addHouses} from '../actions/'

describe('addHousesReducer', () => {
  it('should return default state', () => {
    const expected = [];
    expect(addHousesReducer(undefined, [])).toEqual(expected)
  });

  
});