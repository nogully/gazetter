import * as actions from './actions'

describe ('actions', () => {

  describe('logIn', () => {
    it('should take a user object and return an action obj with user as the payload', () => {
      const mockUser = { display_name: 'noragully', followers: 1000000 };
      const expected = { type: 'LOG_IN', 
                         user: { display_name: 'noragully', followers: 1000000 } }
      expect(actions.logIn(mockUser)).toEqual(expected)
    })
  })

  describe('logOut', () => {
    it('should take a user object and return an action obj with an empty user as the payload', () => {
      const expected = { type: 'LOG_OUT'
                       }
      expect(actions.logOut()).toEqual(expected)
    })
  })


  describe('populateTweets', () => {
    it('should take the tweets array and return an action obj with the tweets as payload', () => {
      const mockTweets = [{ 
        created_at:"Wed Feb 21 18:40:53 +0000 2018", 
        text: "Sometimes the news feels like a Mad Libs", 
        id:966382231261499400, 
        user: {
          id:56510427,
          id_str:"56510427",
          name:"Motherboard",
          screen_name:"motherboard",
          location:"Brooklyn",
          description:"The future is wonderful. The future is terrifying.",
          url:"https://t.co/Vvuz9y6ekY"
        }
      }]
      const expected = { type: 'POPULATE_TWEETS', 
                         tweets: mockTweets }
      expect(actions.populateTweets(mockTweets)).toEqual(expected)
    })
  })
})