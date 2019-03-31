import React from 'react'
import styled from 'styled-components'

export default function Button(props) {
  return (
    <Btn {...props} />
  )
}

const Btn = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 20px;
  cursor: pointer;
  user-select: none;
  color: ${props => props.white ? '#fff' : '#000'}
`;
