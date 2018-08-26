import React from 'react';
import LoadingPage from './index.js';
import { shallow } from 'enzyme';

describe('LoadingPage', () => {
  it('should match the snaphot', () => {
    let wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should return a div with the matching cardType if it is people', () => {
    let cardTypeMock = 'people';
    let wrapper = shallow(<LoadingPage cardType={cardTypeMock}/>);
    expect(wrapper.find('div').hasClass('loading-page-people'));
  });

  it('should return a div with the matching cardType if it is planets', () => {
    let cardTypeMock = 'planets';
    let wrapper = shallow(<LoadingPage cardType={cardTypeMock}/>);
    expect(wrapper.find('div').hasClass('loading-page-planets'));
  });

  it('should return a div with the matching cardType if it is vehicles', () => {
    let cardTypeMock = 'vehicles';
    let wrapper = shallow(<LoadingPage cardType={cardTypeMock}/>);
    expect(wrapper.find('div').hasClass('loading-page-vehicles'));
  });
});