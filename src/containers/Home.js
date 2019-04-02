import React, { Component } from 'react'
import styled from 'styled-components'

import { Box } from './../components'

export default class Home extends Component {
  render(props) {
    return (
      <Div>
        <Box 
          minW={{ min: '250px' }}
          minH={{ min: '250px' }}
        />        
      </Div>
    )
  }
}

const Div = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #333;
`