import React from 'react';
import './Article.css';
import { object, func } from 'prop-types';


const Article = ({tweet, handleClick }) => {
  const link = tweet.entities.urls[0].expanded_url;

  const goToLink = () => { 
    window.open(link, "_blank")
  }

  return (
    <article className="tweet" key={tweet.id}>
      { tweet.entities.media ? <img src={tweet.entities.media[0].media_url} onClick={ goToLink } alt="tweet"/> : null }
      <h2 onClick={ goToLink }>{tweet.user.name}</h2> 
      <p onClick={ goToLink }>{tweet.full_text}</p> 
      <section >
        { tweet.entities.urls.length ? 
          <p className="article-link" id={tweet.id} onClick={ handleClick }>
            <i className="fas fa-newspaper"></i> Bookmark
          </p> : null }
        <h5 className="favorite"><i className="fas fa-heart"></i> {tweet.favorite_count}</h5>
      </section>
    </article>
  );
};

Article.propTypes = {
  tweet: object.isRequired, 
  handleClick: func.isRequired
};

export default Article;