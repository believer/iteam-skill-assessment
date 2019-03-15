import styled from '@emotion/styled'
import tag from 'clean-tag'
import {
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

export const GridColumn = styled.div`
  grid-column: 2;
`
