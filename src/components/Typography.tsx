import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'

type H1Props = SpaceProps

export const H1 = styled.h1<H1Props>(
  {
    fontFamily: "'Fjalla One', sans-serif",
  },
  space
)

export const Paragraph = styled.p<SpaceProps>(
  {
    lineHeight: 2,
  },
  space
)
