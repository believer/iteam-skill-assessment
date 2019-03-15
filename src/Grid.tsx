import styled from '@emotion/styled'
import tag from 'clean-tag'
import {
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
  display,
  DisplayProps,
  gridColumnGap,
  GridColumnGapProps,
  gridRowGap,
  GridRowGapProps,
  gridTemplateColumns,
  GridTemplatesColumnsProps,
  space,
  SpaceProps,
} from 'styled-system'

type GridProps = SpaceProps &
  DisplayProps &
  GridTemplatesColumnsProps &
  GridColumnGapProps &
  GridRowGapProps

export const Grid = styled(tag.div)<GridProps>`
  ${display}
  ${gridColumnGap}
  ${gridRowGap}
  ${gridTemplateColumns}
  ${space}
`

Grid.defaultProps = {
  display: 'grid',
  gridColumnGap: ['0', '40px'],
  gridTemplateColumns: ['20px 1fr 20px', '1fr 960px 1fr'],
}

type GridColumnProps = SpaceProps & ColorProps & BorderRadiusProps

export const GridColumn = styled(tag.div)<GridColumnProps>`
  ${borderRadius}
  ${color}
  ${space}

  grid-column: 2;
`
