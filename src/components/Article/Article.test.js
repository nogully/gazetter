/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Article  from './Article';

describe('Article', () => {
  it('should match its snapshot', () => {
    const mockTweet = { id: 1234,
                full_text: 'Jhun named best teacher ever', 
                entities: { urls: [{ expanded_url: 'http://wow.com'}], 
                            media: [{ media_url: 'http://awesome.com'}] }, 
                user: { screen_name: 'nytimes' }, 
                retweeted_status: 345,
                favorite_count: 456 }
    const wrapper = shallow( <Article tweet={ mockTweet } /> )
    expect(wrapper).toMatchSnapshot();
  })

})