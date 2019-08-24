import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h2',
})``

const Container = styled.div.attrs({
    className: 'container',
})`
    display: flex;
    justify-content: center;
    //border: 1px solid #000;
`

const Wrapper = styled.div.attrs({
    className: 'form-group col-12 col-md-4',
})`
    margin-top: 30px;
    text-align: center;
    //border: 1px solid #000;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`
const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            password: '',
        }
    }

    handleChangeInputUser = async event => {
        const user = event.target.value
        this.setState({ user })
    }

    handleChangeInputPassword = async event => {
        const password = event.target.validity.valid
            ? event.target.value
            : this.state.password

        this.setState({ password })
    }

    handleIncludeUser = async () => {
        const { user, password } = this.state
        const payload = { user, password }

        await api.login(payload).then(res => {
            window.alert(`User Logged In`)
            /*this.setState({
                name: '',
                rating: '',
                time: '',
            })*/
        })
    }

    render() {
        const { user, password } = this.state
        return (
            <Container>
            <Wrapper>
                <Title>Inicia sesión</Title>
                <Label>Usuario: </Label>
                <InputText
                    type="text"
                    value={user}
                    onChange={this.handleChangeInputUser}
                />
                <Label>Password: </Label>
                <InputText
                    type="password"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />
                <Button onClick={this.handleIncludeUser}>Login</Button>
            </Wrapper>
            </Container>
        )
    }
}

export default MoviesLogin