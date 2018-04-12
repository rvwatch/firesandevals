import React from 'react';
import {shallow} from 'enzyme';
import App from './App';


describe('App', () => {

  it('should match the snapshot', () => {
    const store = {};
    
    const wrapper = shallow(<App store={store} />, {disableLifeCycleMethods: true});
    expect(wrapper).toMatchSnapshot();
  })
})