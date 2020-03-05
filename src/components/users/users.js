import React from 'react';
import { Loader } from '../../common';
import { Container, Row, Col } from 'reactstrap';
import { UserItem } from './../userItem';

class UserWrapper extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: null,
            loading: false
        }
    }
    
    handleFetchLoading = () => {
        if(!this.state.posts){
            fetch('https://jsonplaceholder.typicode.com/users').then(
                response => response.json()
            ).then(
                result => this.setState({users: result})
            ).catch( e => console.log(e, "Something went wrong !!")
            )
        }
        else {
            return null
        }
    }

    componentWillMount(){
        this.handleFetchLoading();
    }

    render(){
        
        return (
            <>
                { this.state.users ? (
                    <Container>
                        <Row>
                            <Col md={12}>
                                { this.state.users.map( (obj, index) => <UserItem obj={obj} key={`key${index}`} />) }
                            </Col>
                        </Row>
                    </Container>
                ) : <Loader />}
            </>
        )
    }
}

export default UserWrapper;
