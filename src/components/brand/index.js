import React from 'react'
import styled from 'styled-components';
import { Theme } from './../theme/globalStyle'

const Logo = styled.div`
  font-size: 3rem;
  display: inline-block;
  padding: 10px;
  background: ${props => props.white ? '#fff' : ''};

  i {
    flex-direction: column;
    display: flex;
  
    div {
      font-weight: bold;
      color: ${Theme.global.colors.blueSoft};
      background: ${Theme.global.colors.white};
    }

    span {
      font-weight: bold;
      background: ${Theme.global.colors.blueSoft};
      color: ${Theme.global.colors.white};
      padding: 1px;
      margin-left: 6px;
    }
    p {
      color: #fff;
      margin-top: 2px;
      text-align: center;
      font-size: 0.8rem;
      text-decoration: underline;
    }
  }
`;


const Brand = (props) => {
  return (
    <Logo>
      <i>
        <div>
          H<span>M</span>
        </div>
        <p>Hugo Meireles</p>
      </i>
    </Logo>
  )
}

export default Brand;
