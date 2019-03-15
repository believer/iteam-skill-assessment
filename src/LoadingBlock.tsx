import styled from '@emotion/styled'
import tag from 'clean-tag'
import {
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
  height,
  HeightProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from 'styled-system'

type LoadingBlockProps = HeightProps &
  WidthProps &
  ColorProps &
  SpaceProps &
  BorderRadiusProps

export const LoadingBlock = styled(tag.div)<LoadingBlockProps>`
  ${borderRadius}
  ${color}
  ${height}
  ${space}
  ${width}
`

LoadingBlock.defaultProps = {
  bg: 'hsl(210, 12%, 90%)',
  borderRadius: '3px',
  width: '100%',
}
