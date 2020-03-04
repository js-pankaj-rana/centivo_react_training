import React from 'react';

const PostItem = (props) => (
        <ol>
        {props.posts.map( (obj) => {
                return (<li key={obj.userId}>
                            <div>{obj.title}</div>
                            <div>{obj.body}</div>
                        </li>
                    )
                
        })
    }
    </ol>
)

export default PostItem;