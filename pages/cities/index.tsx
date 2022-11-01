import { Add } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import CityEditDialog from '../../components/cities/CityEditDialog'
import DataGrid from '../../components/DataGrid'
import RegionsSelector from '../../components/regions/RegionsSelector'
import BackdropLoading from '../../components/ui/BackdropLoading'
import ColumnWrapper from '../../components/ui/ColumnWrapper'
import {
  StyledTableContainer,
  TableToolbar,
} from '../../components/ui/StyledTableComponents'
import ToolbarButtonsWrapper from '../../components/ui/ToolbarButtonsWrapper'
import { CityUncheckedCreateInput } from '../../gql/graphql'
import useCitiesService from '../../hooks/apollo/useCitiesService'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { selectorsActions } from '../../store/reducers/SelectorsSlice'

type GridRow = { id: number; name: string; region: string; regionId: number }

export default function CitiesPage() {
  const [state, setState] = useState<CityUncheckedCreateInput | null>(null)

  const {
    selectorsReducer: { currentRegionId },
    userReducer: { user },
  } = useAppSelector((store) => store)
  const { setCurrentRegionId } = selectorsActions
  const dispatch = useAppDispatch()

  const { cities, create, update, remove, loading } =
    useCitiesService(currentRegionId)

  const rows: GridRow[] = cities.map((city) => ({
    id: city.id,
    name: city.name,
    region: city.region.name,
    regionId: city.regionId,
  }))

  const handleSaveClick = (city: CityUncheckedCreateInput) => {
    const { id, name, regionId } = city
    id
      ? update({ variables: { id, name, regionId } })
      : create({ variables: { name, regionId } })
  }

  return (
    <ColumnWrapper>
      <BackdropLoading open={loading} />
      <StyledTableContainer>
        <TableToolbar>
          <Typography sx={{ width: '100%' }} variant="h6">
            Города
          </Typography>
          <ToolbarButtonsWrapper>
            <RegionsSelector
              size="small"
              currentId={currentRegionId}
              onSelect={(id) => dispatch(setCurrentRegionId(id))}
            />
          </ToolbarButtonsWrapper>
          <IconButton
            color="secondary"
            disabled={user?.role === 'USER'}
            onClick={() =>
              setState({ name: '', regionId: currentRegionId ?? 0 })
            }
          >
            <Add />
          </IconButton>
        </TableToolbar>
        <DataGrid<GridRow>
          rows={rows}
          columns={[
            { key: 'name', title: 'Наименование' },
            { key: 'region', title: 'Регион' },
          ]}
          onSelect={(row) =>
            setState({ id: row.id, name: row.name, regionId: row.regionId })
          }
        />
      </StyledTableContainer>
      <CityEditDialog
        open={user?.role !== 'USER' && Boolean(state)}
        city={state}
        onSave={handleSaveClick}
        onClose={() => setState(null)}
        onDelete={(id) => remove({ variables: { id } })}
      />
    </ColumnWrapper>
  )
}
