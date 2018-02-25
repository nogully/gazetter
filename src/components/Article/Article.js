import React from 'react';

const Article = ({tweet}) => {
  return (
    <article className="tweet" key={tweet.id}>
      { tweet.entities.media ? <img src={tweet.entities.media[0].media_url} alt="tweet"/> : null }
      <h2>{tweet.user.name}</h2> 
      <p>{tweet.full_text}</p> 
      { tweet.entities.urls.length ? <a href={tweet.entities.urls[0].expanded_url} target="_blank">Read</a> : null}
      <h5><i className="fas fa-heart"></i> {tweet.favorite_count}</h5>
    </article>

  )
}

export default Article;