import React from 'react';
import './Article.css';
import { object, func } from 'prop-types';


const Article = ({tweet, handleClick, bookmark }) => {
  let link;
  if (tweet.entities.urls.length) {
    link = tweet.entities.urls[0].expanded_url;
  }

  const goToLink = () => { 
    if (link) {
      window.open(link, "_blank")
    }
  }

  return (
    <article className={'tweet ' + bookmark }  key={tweet.id}>
      { tweet.entities.media ? <img src={tweet.entities.media[0].media_url} onClick={ goToLink } alt="tweet"/> : null }
      <h2 id={bookmark} onClick={ goToLink }>{tweet.user.name}</h2> 
      <p onClick={ goToLink }>{tweet.full_text}</p> 
      <section > 
          <p className="article-link" id={tweet.id} onClick={ handleClick }>
            <i className="fas fa-plus-circle"></i> Bookmark
          </p> 
        <h5 className="favorite">
          <i className="fas fa-retweet" id="twitter-icons"></i> {tweet.retweet_count}
          <i className="fas fa-heart" id="twitter-icons"></i> {tweet.favorite_count}</h5>
      </section>
    </article>
  );
};

Article.propTypes = {
  tweet: object.isRequired, 
  handleClick: func.isRequired
};

export default Article;

