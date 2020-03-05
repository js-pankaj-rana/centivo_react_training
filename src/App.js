import React from 'react';
import { 
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './components/dashboard';
import PostsWrapper from './components/posts';
import UserWrapper from './components/users';

const styleMargin = {
    marginLeft: '10px'
}


const msg =  "Hello World";

function MyComponent() {

    return (<>
            <Router>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler />
                        <Nav className="mr-auto" navbar>
                            <NavItem style={styleMargin}>
                                <Link to="/">DashBoard</Link>
                            </NavItem>
                            <NavItem style={styleMargin}>
                                <Link to="/posts">Posts</Link>
                            </NavItem>
                            <NavItem style={styleMargin}>
                                <Link to="/users">Users</Link>
                            </NavItem>
                        </Nav>
                </Navbar>

                <Switch>
                    <Route exact path="/">
                        <DashBoard />
                    </Route>
                    <Route exact path="/posts">
                        <PostsWrapper />
                    </Route>
                    <Route exact path="/users">
                        <UserWrapper />
                    </Route>
                    </Switch>
            </Router>
            </>
        )
    }
    

export default MyComponent;