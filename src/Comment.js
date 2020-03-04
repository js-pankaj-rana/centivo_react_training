import React from 'react';
import CommentItem from './CommontItem';

const BASE_API = 'https://jsonplaceholder.typicode.com/';

export default class Comment extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            posts: null,
            comments: null,
            albums: null,
            photos: null,
            isFetching: false
        }
        this.fetchingComments = this.fetchingComments.bind(this);

      }
  
    
    fetchingComments = (apiType) => {

        fetch(BASE_API + apiType).then(
            response => response.json()             
        ).then(
            result => this.setState({apiType: result})
        ).catch(e => console.log(e, "error"))
    }

    render(){

        return (
            <div className="tabs">
                <button onClick={ () => this.fetchingComments('comments') }>Show comments</button>
                {this.state.comments && <CommentItem comments={this.state.comments} />} 
            </div>
        )
    }

}