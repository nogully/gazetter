import * as apiCalls from './apiCalls';

describe('apiCalls', () => {
  
  describe('getTweets', () => {
    beforeAll(() => {
      let mockTweets = [
              { text: 'Why tho, Jhun?', 
                user: { display_name: 'noragully' } }, 
              { text: 'What\'s good, fam?', 
                user: { display_name: 'yung-jhun' } }
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

    it('should return a parsed array of tweet objects', async () => {
      const expected = [
              { text: 'Why tho, Jhun?', 
                user: { display_name: 'noragully' } }, 
              { text: 'What\'s good, fam?', 
                user: { display_name: 'yung-jhun' } }
            ]
      const result = await apiCalls.getTweets();
      expect(result).toEqual(expected);
    })

    it('returns an error if the request is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject( { status: 500 } ) 
      })
      const expected = Error("Error in getTweets")
      const result = apiCalls.getTweets();
      expect(result).rejects.toEqual(expected)
    })
  })
})