
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/home" className="navbar-brand">
                    Home
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/movies/list" className="nav-link">
                                List Movies
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                                Create Movie
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/login" className="nav-link" >
                                Login
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/list" className="nav-link">
                                Users list
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/create" className="nav-link">
                                Create User
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}





export default Links