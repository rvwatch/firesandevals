import React from 'react';
import {shallow} from 'enzyme';
import {Card} from './Card';
import * as mock from '../../MockData/MockData';

describe('Card', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Card houses={mock.mockHouses} />);
    expect(wrapper).toMatchSnapshot();
  });
})