/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { News, mapStateToProps } from './News';

describe('News', () => {
  it('should match its snapshot', () => {
    const mockTweets = [
              { text: 'Why tho, Jhun?', 
                user: { display_name: 'noragully'}, 
                id: 1234 }, 
              { text: 'What\'s good, fam?', 
                user: { display_name: 'yung-jhun'}, 
                id: 5678 } 
            ]
    const wrapper = shallow(<News tweets={ mockTweets } />)
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should define the tweets props for the News container via Redux', () => {
      const mockTweets = [
              { text: 'Why tho, Jhun?', 
                user: { display_name: 'noragully'}, 
                id: 1234 }, 
              { text: 'What\'s good, fam?', 
                user: { display_name: 'yung-jhun'}, 
                id: 5678 } 
            ]
      const mockStore = { tweets: mockTweets };
      const expectedProps = { tweets: [
              { text: 'Why tho, Jhun?', 
                user: { display_name: 'noragully'}, 
                id: 1234 }, 
              { text: 'What\'s good, fam?', 
                user: { display_name: 'yung-jhun'}, 
                id: 5678 } 
            ] }
      const mapped = mapStateToProps(mockStore);
      expect(mapped).toEqual(expectedProps)
    })
  })

})