import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle, 
    CardSubtitle
     } from 'reactstrap';
import { Link } from 'react-router-dom';

export const UserItem = props => {
    let {username, name, email, id} = props.obj;

 return  (<Card id={id}>
        <CardBody>
            <CardTitle>{username}</CardTitle>
            <CardSubtitle>{name}</CardSubtitle>
            <CardText>{email}</CardText>
            <Link to={`/users?id=${id}`} className="link-style">Show More</Link>
        </CardBody>
    </Card>
    )
}
    
    
