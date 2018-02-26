/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Welcome, mapStateToProps, mapDispatchToProps } from './Welcome';

describe('App', () => {
  it('should match snapshot', () => { 
    const wrapper = shallow(<Welcome tweets={ [] } user={ {} } logIn={ jest.fn() } populateTweets={ jest.fn() }/>);
    expect(wrapper).toMatchSnapshot();
  })

  describe('signIn', () => {
    
  })

  describe('fetchTweets', () => {

  })

  describe('mapStateToProps', () => {
    it('should define the user props for the App container via Redux', () => {
      const mockUser = { display_name: 'noragully' }
      const mockStore = { user: mockUser }
      const expectedProps = { user: { display_name: 'noragully' } }
      const mapped = mapStateToProps(mockStore)
      expect(mapped).toEqual(expectedProps)
    })

    it('should define the tweets props for the App container via Redux', () => {
      const mockTweets = [
              { text: 'Why tho, Jhun?', 
                user: { display_name: 'noragully' } }, 
              { text: 'What\'s good, fam?', 
                user: { display_name: 'yung-jhun' } }
            ]
      const mockStore = { tweets: mockTweets };
      const expectedProps = { tweets: [
              { text: 'Why tho, Jhun?', 
                user: { display_name: 'noragully' } }, 
              { text: 'What\'s good, fam?', 
                user: { display_name: 'yung-jhun' } }
            ] }
      const mapped = mapStateToProps(mockStore);
      expect(mapped).toEqual(expectedProps)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call the Redux dispatch method with logIn', () => {
      const mockDispatch = jest.fn()
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.logIn();
      expect(mockDispatch).toHaveBeenCalled();
    })

    it('should call the Redux dispatch method with populateTweets', () => {
      const mockDispatch = jest.fn()
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.populateTweets();
      expect(mockDispatch).toHaveBeenCalled();
    })
  })
})