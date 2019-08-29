import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'


const Contenedor = styled.div.attrs({
    classname: 'form-group col-4',
})`
    margin-top: 0px;
    text-align: center;
`

 class Home extends Component {
  render() {
        return (
            <Contenedor className="container-fluid home d-flex justify-content-center">

                <div className="col-3 img">
                    <img src={logo} alt="cinefilos.com" className="img-fluid" />
                </div>
            </Contenedor>
        )
    }

    

}



export default Home