import React from 'react';

const CommentItem = (props) => (
    <ul>
        {props.comments.map( (obj) => {
            return (<li key={obj.postId}>
                 <div>{obj.email}</div>
                 <div>{obj.body}</div>
            </li>)
        }) }
    </ul>
 );

 export default CommentItem;