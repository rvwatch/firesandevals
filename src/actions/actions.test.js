import * as Actions from './index';
import * as mock from '../MockData/MockData';

describe('addHouses', () => {
  it('should create an addHouses action object', () => {
    const houses = mock.mockHouse;
    const expected = {
      type: 'ADD_HOUSES',
      houses
    };
    expect(Actions.addHouses(houses)).toEqual(expected);
  });
});


describe('addSwornMembers', () => {
  it('should create an addSwornMembers action object', () => {
    const sworn = mock.mockSwornMembers;
    const expected = {
      type: 'ADD_SWORN_MEMBERS',
      sworn
    };
    expect(Actions.addSwornMembers(sworn)).toEqual(expected);
  })
})