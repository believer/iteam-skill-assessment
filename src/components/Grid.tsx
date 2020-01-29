import styled from '@emotion/styled'
import {
  borderRadius,
  BorderRadiusProps,
  color,
  display,
  DisplayProps,
  gridColumnGap,
  GridColumnGapProps,
  gridRowGap,
  GridRowGapProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  space,
  SpaceProps,
} from 'styled-system'

type GridProps =
  | SpaceProps
  | DisplayProps
  | GridTemplateColumnsProps
  | GridColumnGapProps
  | GridRowGapProps

export const Grid = styled.div<GridProps>(
  display,
  gridColumnGap,
  gridRowGap,
  gridTemplateColumns,
  space
)

Grid.defaultProps = {
  display: 'grid',
  gridColumnGap: ['0', '40px'],
  gridTemplateColumns: ['20px 1fr 20px', '1fr 960px 1fr'],
}

type GridColumnProps = SpaceProps | BorderRadiusProps | { bg?: string }

export const GridColumn = styled.div<GridColumnProps>(
  {
    gridColumn: 2,
  },
  borderRadius,
  color,
  space
)
