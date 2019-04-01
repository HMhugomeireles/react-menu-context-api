import React from 'react'
import styled from 'styled-components'
import { Theme } from './theme/globalStyle'

export const TitleH1 = (props) => {
    return (
        <Title>{props.titleH1}</Title>
    )
} 


export const TitleH2 = (props) => {
    return (
        <SubTitle>{props.titleH2}</SubTitle>
    )
}

const Title = styled.h1`
    font-size: ${Theme.global.typographic.title}
    font-family: ${Theme.global.typographic.fontSecondary}
`

const SubTitle = styled.h1`
    font-size: ${Theme.global.typographic.subTitle}
    font-family: ${Theme.global.typographic.fontPrimary}
`