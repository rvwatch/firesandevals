import {addSwornMembers} from '../actions/';
import * as mock from '../MockData/MockData';
import addSwornMembersReducer from "./addSwornMembersReducer";

describe('addSwornMembersReducer', () => {
  it('should return default state', () => {
    const expected = [];
    expect(addSwornMembersReducer(undefined, [])).toEqual(expected);
  });

  it('should add houses to state', () => {
    const expected = mock.mockHouse;
    const houses = mock.mockHouse;
    expect(addSwornMembersReducer(undefined, addSwornMembers(houses))).toEqual(expected);
  });
  
});