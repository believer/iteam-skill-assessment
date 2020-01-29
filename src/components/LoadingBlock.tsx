import styled from '@emotion/styled'
import {
  borderRadius,
  BorderRadiusProps,
  color,
  height,
  HeightProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from 'styled-system'

type LoadingBlockProps =
  | HeightProps
  | WidthProps
  | SpaceProps
  | BorderRadiusProps
  | { color?: string; bg?: string }

export const LoadingBlock = styled.div<LoadingBlockProps>(
  borderRadius,
  color,
  height,
  space,
  width
)

LoadingBlock.defaultProps = {
  bg: 'hsl(210, 12%, 90%)',
  borderRadius: '3px',
  width: '100%',
}
