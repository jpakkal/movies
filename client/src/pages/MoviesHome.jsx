import React, { Component } from 'react'
import api from '../api'
import movie from '../assets/movies.jpeg'

import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    classname: 'form-group col-4',
})`
    margin-top: 30px;
    text-align: center;
    border: 1px solid #000;
`

class MoviesHome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rating: '',
            time: '',
        }
    }

    render() {
        const { name, rating, time } = this.state
        return (
            <image>
                <img src={movie}/>
            </image>
        )
    }
}

export default MoviesHome