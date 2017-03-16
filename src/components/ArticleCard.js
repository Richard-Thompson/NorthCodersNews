import React from 'react';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p>Upvotes:</p>
          {props.votes}
        </div>
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'>{props.title}</h3>
            <h3 className='title is-5'>{props.created_by}</h3>
            <h3 className='title is-5'>{props.comments + ' comments'}</h3>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ArticleCard;

