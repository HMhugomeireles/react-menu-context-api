import React, { Component } from 'react'
import styled from 'styled-components'

export default class Home extends Component {
  render(props) {
    return (
      <Div>
        <h1>Hugo <span>Meireles</span></h1>
        
      </Div>
    )
  }
}

const Div = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #1111;
`