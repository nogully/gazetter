/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { auth } from '../../firebase';

describe('App', () => {
  it('should match snapshot', () => { 
    const wrapper = shallow(<App tweets={ [] } user={ {} } logOut={ jest.fn() } populateTweets={ jest.fn() }/>);
    expect(wrapper).toMatchSnapshot();
  })

  describe('signOut', () => {  
    it('should sign out using Firebase', () => {
      const wrapper = shallow(<App tweets={ [] } user={ {} } logOut={ jest.fn() } populateTweets={ jest.fn() }/>);
      auth.signOut = jest.fn()
      wrapper.instance().logOut();
      expect(auth.signOut).toHaveBeenCalled()
    })
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
    it('should call the Redux dispatch method with logOut', () => {
      const mockDispatch = jest.fn()
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.logOut();
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
