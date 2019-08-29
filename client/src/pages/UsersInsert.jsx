import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
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

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class UsersInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            user_type: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }

    handleChangeInputUserType = async event => {
        const user_type = event.target.value
        this.setState({ user_type })
    }

    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleIncludeUser = async () => {
        const { name, email, user_type, password } = this.state
        const payload = { name, email, user_type, password }

        await api.insertUser(payload).then(res => {
            window.alert(`User inserted successfully`)
            this.setState({
                name: '',
                email: '',
                user_type: '',
                password:'',
            })
        })
    }

    render() {
        const { name, email, user_type, password } = this.state
        return (
            <Wrapper>
                <Title>Create User</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Email: </Label>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />

                <Label>Password: </Label>
                <InputText
                    type="password"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />

                <Label>User Type: </Label>
                <InputText
                    type="text"
                    value={user_type}
                    onChange={this.handleChangeInputUserType}
                />

                <Button onClick={this.handleIncludeUser}>Add User</Button>
                <CancelButton href={'/users/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default UsersInsert