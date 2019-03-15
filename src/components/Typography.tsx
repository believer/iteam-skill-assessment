import tag from 'clean-tag'
import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'

type H1Props = SpaceProps

export const H1 = styled(tag.h1)<H1Props>`
  ${space}

  font-family: 'Fjalla One', sans-serif;
`

export const Paragraph = styled(tag.p)<H1Props>`
  ${space}

  line-height: 2;
`
