import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate, Home, MoviesLogin, UsersList,UsersUpdate,UsersInsert } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/style.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route path="/movies/update/:id" exact component={MoviesUpdate}/>
                
                <Route path="/users/list" exact component={UsersList} />
                <Route path="/users/update/:id" exact component={UsersUpdate} />
                <Route path="/users/create" exact component={UsersInsert} />

                <Route path="/login" exact component={MoviesLogin} />
                <Route path="/home" exact component={Home} />
            </Switch>
        </Router>
    )
}

export default App