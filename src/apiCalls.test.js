import * as apiCalls from './apiCalls';

describe('apiCalls', () => {
  
  describe('getTweets', () => {
    beforeAll(() => {
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
    })

    it('should make an api call to an exp ress server via fetch', () => {
      const expectedUrl = 'http://localhost:3001/api/gettweets'
      apiCalls.getTweets();
      expect(window.fetch).toHaveBeenCalledWith(expectedUrl)
    })

    it('should return a cleaned array of only news tweets', async () => {
      const expected = [
              { id: 1234,
                full_text: 'Jhun named best teacher ever', 
                entities: { urls: [] }, 
                user: { screen_name: 'nytimes' }, 
                retweeted_status: 345,
                favorite_count: 456 }
            ]
      const result = await apiCalls.getTweets();
      expect(result).toEqual(expected);
    })

    it('returns an error if the request is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve( { status: 500 } ) 
      })
      const expected = Error("Error getting tweets")
      const result = apiCalls.getTweets();
      expect(result).rejects.toEqual(expected)
    })
  })

  describe('cleanTweets', () => {
    it('should return a cleaned array of news tweets sorted by favorite_count', () => {
      const mockTweets = [
              { id: 1234,
                full_text: 'Leta unseats Jhun for title of best teacher ever', 
                entities: { urls: [] }, 
                user: { screen_name: 'letakeane' }, 
                retweeted_status: 345,
                favorite_count: 456 }, 
              { id: 7890,
                full_text: 'Peace declared in unified Korea', 
                entities: { urls: [] }, 
                user: { screen_name: 'denverpost' }, 
                retweeted_status: 345,
                favorite_count: 46 },
              { id: 4567, 
                full_text: 'Donald Trump impeached', 
                entities: { urls: [] }, 
                user: { screen_name: 'washingtonpost' }, 
                retweeted_status: 0,
                favorite_count: 6000000000  }
      ]
      const expected = [
              { id: 4567, 
                full_text: 'Donald Trump impeached', 
                entities: { urls: [] }, 
                user: { screen_name: 'washingtonpost' }, 
                retweeted_status: 0,
                favorite_count: 6000000000  }, 
              { id: 7890,
                full_text: 'Peace declared in unified Korea', 
                entities: { urls: [] }, 
                user: { screen_name: 'denverpost' }, 
                retweeted_status: 345,
                favorite_count: 46 }
            ]
      const result = apiCalls.cleanTweets(mockTweets);
      expect(result).toEqual(expected);
    })

  })
})