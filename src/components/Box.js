import React from 'react'
import styled from 'styled-components'

export const Box = (props) => {
  return (
    <Div>
      Box
    </Div>
  )
}

const Div = styled.div`
  min-width: ${props => console.log(props) || props.minW};
  min-height: ${props => props.minH};
  background: #f1f1f1;
  text-align: center;
  line-height: 120px;
`