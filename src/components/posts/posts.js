import React from 'react';
import { Loader } from '../../common';
import { Container, Row, Col } from 'reactstrap';
import { PostItem } from './../postItem';

class PostsWrapper extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts: null,
            loading: false
        }
    }
    
    handleFetchLoading = () => {
        if(!this.state.posts){
            fetch('https://jsonplaceholder.typicode.com/posts').then(
                response => response.json()
            ).then(
                result => this.setState({posts: result})
            ).catch( (e) => console.log("Something went wrong !!") )
        }
    }

    componentDidMount(){
        this.handleFetchLoading();
    }

render(){
        return (
            <>
                { this.state.posts ? (
                    <Container>
                        <Row>
                            <Col md={12}>
                                { this.state.posts.map( (obj, index) => <PostItem obj={obj} key={`key${index}`} />) }
                            </Col>
                        </Row>
                    </Container>
                ) : <Loader />}
            </>
        )
    }
}

export default PostsWrapper;
