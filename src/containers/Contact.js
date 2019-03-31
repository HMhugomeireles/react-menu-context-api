import React, { Component } from 'react'
import styled from 'styled-components'

export default class Contact extends Component {
  render() {
    return (
      <Div>
        <h1>Contacts baby!</h1>     
      </Div>
    )
  }
}

const Div = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #4444;
`