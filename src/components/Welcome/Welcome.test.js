/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Welcome, mapStateToProps, mapDispatchToProps } from './Welcome';
import { auth, provider } from '../../firebase';


describe('App', () => {
  it('should match snapshot', () => { 
    const wrapper = shallow(<Welcome tweets={ [] } user={ {} } logIn={ jest.fn() } populateTweets={ jest.fn() }/>);
    expect(wrapper).toMatchSnapshot();
  })

  describe('signIn', () => {
    let wrapper;

    beforeEach(() => {
      let mockTweets = [
              { id: 1234,
                full_text: 'Jhun named best teacher ever', 
                entities: { urls: [] }, 
                user: { screen_name: 'nytimes' }, 
                retweeted_status: 345,
                favorite_count: 456 }, 
              { id: 4567, 
                full_text: 'What\'s good, fam?', 
                entities: { urls: [] }, 
                user: { screen_name: 'yung-jhun' }, 
                retweeted_status: 0,
                favorite_count: 2  }
      ]
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () =>
            Promise.resolve(mockTweets)
        })
      })
      let mockUser = { display_name: 'noragully' }
    })

    it('component should start with a default state of loading: false', () => {
      wrapper = shallow(<Welcome tweets={ [] } user={ {} } logIn={ jest.fn() }
                                 populateTweets={ jest.fn() } />);
      expect(wrapper.state()).toEqual({loading: false});
    })

    it('should set state to loading: true', () => {
      wrapper = shallow(<Welcome tweets={ [] } user={ {} } logIn={ jest.fn() } 
                                 populateTweets={ jest.fn() } 
                                 history={[]}/>);
      expect(wrapper.state()).toEqual({loading: false})
      wrapper.instance().signIn();
      wrapper.update();
      expect(wrapper.state()).toEqual({loading: true})
    })

    it('should authenticate with Firebase, which returns a promised user', () => {
      wrapper = shallow(<Welcome tweets={ [] } user={ {} } logIn={ jest.fn() } 
                                 populateTweets={ jest.fn() } 
                                 history={[]}/>);
      auth.signInWithPopup = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () =>
            Promise.resolve(mockUser)
        })
      })
      wrapper.instance().signIn();
      expect(auth.signInWithPopup).toHaveBeenCalledWith(provider);
    })
  })

  describe('fetchTweets', () => {
    it('should call an api', () => {
      
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