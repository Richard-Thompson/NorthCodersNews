import * as types from '../actions/types';

const initialState = {
 comments: [],
  loading: false,
  error: null
  };

function commentsReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.FETCH_COMMENTS_REQUEST) {
    newState.loading = true;

  }
  if (action.type === types.FETCH_COMMENTS_SUCCESS) {
    newState.comments = action.data;
    newState.loading = false;
  } 
  if (action.type === types.FETCH_COMMENTS_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }

  if(action.type === types.COMMENT_VOTE_REQUEST){
    newState.loading=true;
  }
  if(action.type === types.COMMENT_VOTE_SUCCESS){
    newState.articles = newState.comments.map(function (comment){
           if (comment._id === action.commentId) {
               if (action.vote === '?vote=up') {
                   comment.votes++;
                   return comment;
               } else {
                   comment.votes--;
                   return comment;
               }
           }
           return comment;
       });
    
    
    newState.loading = false;
  }
  if(action.type === types.COMMENT_VOTE_ERROR){
    newState.error = action.data;
    newState.loading = false;
  }

  return newState;
}

export default commentsReducer;
