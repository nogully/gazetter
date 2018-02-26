import React from 'react';
import './Article.css'

const Article = ({tweet}) => {
  return (
    <article className="tweet" key={tweet.id}>
      { tweet.entities.media ? <img src={tweet.entities.media[0].media_url} alt="tweet"/> : null }
      <h2>{tweet.user.name}</h2> 
      <p>{tweet.full_text}</p> 
      <section >
      { tweet.entities.urls.length ? 
        <a className="article-link" href={ tweet.entities.urls[0].expanded_url } target="_blank">
          <i className="fas fa-newspaper"></i> Read
        </a> : null }
      <h5 className="favorite"><i className="fas fa-heart"></i> {tweet.favorite_count}</h5>
      </section>
    </article>

  )
}

export default Article;