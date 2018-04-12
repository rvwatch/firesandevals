import React from 'react';
import {shallow} from 'enzyme';
import {CardContainer} from './CardContainer';
import * as mock from '../../MockData/MockData';
describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<CardContainer houses={mock.mockHouses} />);
    expect(wrapper).toMatchSnapshot();
  });
});