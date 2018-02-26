import tweets from './tweetReducer'
import user from './userReducer'

describe('Reducers', () => {
  describe('tweetReducer', () =>{
    const mockState = [];
    const mockAction = {
        type: 'POPULATE_TWEETS', 
        tweets: [
              { text: 'Why tho, Jhun?', 
                user: { display_name: 'noragully' } }, 
              { text: 'What\'s good, fam?', 
                user: { display_name: 'yung-jhun' } }
            ]
      }

    it('will return current state by default', () => {
      const expected = [];
      expect(tweets(mockState, {})).toEqual(expected)
    })

    it('will accept a POPULATE_TWEETS action and redefine the value of tweets in the Redux store', () => {
      const expected = [
              { text: 'Why tho, Jhun?', 
                user: { display_name: 'noragully' } }, 
              { text: 'What\'s good, fam?', 
                user: { display_name: 'yung-jhun' } }
            ]
      expect(tweets(mockState, mockAction)).toEqual(expected)
    })
  })

  describe('userReducer', () => {
    const mockState = {};
    const mockAction = {
        type: 'LOG_IN', 
        user: { display_name: 'yung-jhun' }
    }

    it('will return current state by default', () => {
      const expected = {};
      expect(user(mockState, {})).toEqual(expected)
    })

    it('should accept a LOG_IN action and define the value of the user in the Redux store', () => {
      const expected = { display_name: 'yung-jhun' };
      expect(user(mockState, mockAction)).toEqual(expected);
    })

    it('should accept a LOG_OUT action and clear out the value of the user in the Redux store', () => {
      const mockState = { display_name: 'yung-jhun' };
      const mockAction = {
        type: 'LOG_OUT'    
      }
      const expected = {};
      expect(user(mockState, mockAction)).toEqual(expected);
    })
  })
})