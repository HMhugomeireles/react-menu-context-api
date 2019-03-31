import React from 'react'
import styled from 'styled-components'

export const Box = () => {
  return (
    <Div>
      Box
    </Div>
  )
}

const Div = styled.div`
  width: 20%;
  height: 20%;
  min-width: 120px;
  min-height: 120px;
  background: #a1a1a1;
  text-align: center;
  line-height: 120px;
`