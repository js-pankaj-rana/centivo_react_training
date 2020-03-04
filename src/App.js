import React from 'react';
import CommentItem from './CommontItem';
import PostItem from './PostItem'; 
const BASE_API = 'https://jsonplaceholder.typicode.com/';

class Comment extends React.Component{
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
            result => this.setState({[apiType]: result})
        ).catch(e => console.log(e, "error"))
    }

    render(){

        return (
            <div className="tabs">
                <button onClick={ () => this.fetchingComments('comments') }>Show comments</button>
                <button onClick={ () => this.fetchingComments('posts') }>Show Posts</button>
                {this.state.comments && <CommentItem comments={this.state.comments} />} 
                {this.state.posts && <PostItem posts={this.state.posts} />} 
            </div>
        )
    }
}


// import React from 'react';
// import './App.css';
// import Comment from './Comment';

// class App extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//         count: 0,
//         rendering: false
//     }
//   }

//   handleIncrement = () => {
//     // this.state.count += 1; 
//     this.setState( (prevState) => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }

//   handleDecrement = () => {
//     this.setState( (prevState) => {
//       return {
//         count:  prevState.count - 1
//       }
//     })
//   }


//   render(){
//       return (
//         <>
//           <Comment />
//           {/* <center>
//           <div className="counter-view">{this.state.count}</div>
//           <button type="button" className="btn btn-primary" onClick={this.handleIncrement}>Count +</button>
//           <button type="button" className="btn btn-secondary" onClick={this.handleDecrement}>Count -</button>
//           </center> */}
//         </>
//       )
//   }
// }



 export default Comment;
