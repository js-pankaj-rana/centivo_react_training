import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle
     } from 'reactstrap';
import { Link } from 'react-router-dom';

export const PostItem = (props) => {
    let {userId, id, title, body} = props.obj;

    return (
        <Card id={id}>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{body}</CardText>
                <Link to={`/posts?postId=${userId}`} className="link-style">Show More</Link>
            </CardBody>
        </Card>
    )

} 