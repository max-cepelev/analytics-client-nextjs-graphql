import { Add } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import CitySelector from '../../components/cities/CitySelector'
import DataGrid from '../../components/DataGrid'
import DistrictEditDialog from '../../components/districts/DistrictEditDialog'
import BackdropLoading from '../../components/ui/BackdropLoading'
import ColumnWrapper from '../../components/ui/ColumnWrapper'
import {
  StyledTableContainer,
  TableToolbar,
} from '../../components/ui/StyledTableComponents'
import ToolbarButtonsWrapper from '../../components/ui/ToolbarButtonsWrapper'
import { District, DistrictUncheckedCreateInput } from '../../gql/graphql'
import useDistrictsService from '../../hooks/apollo/useDistrictsService'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { selectorsActions } from '../../store/reducers/SelectorsSlice'

interface GridData {
  id: number
  name: string
  cityName: string
  cityId: number
}

export default function DistrictsPage() {
  const [state, setState] = useState<DistrictUncheckedCreateInput | null>(null)

  const {
    selectorsReducer: { currentCityId },
    userReducer: { user },
  } = useAppSelector((store) => store)
  const { setCurrentCityId } = selectorsActions
  const dispatch = useAppDispatch()

  const { districts, loading, create, update, remove } =
    useDistrictsService(currentCityId)

  const rows: GridData[] = districts.map((item) => ({
    id: item.id,
    name: item.name,
    cityName: item.city.name,
    cityId: item.cityId,
  }))

  const permission = user?.role !== 'USER'

  const handleSaveClick = (district: DistrictUncheckedCreateInput) => {
    const { id, name, cityId } = district
    id
      ? update({ variables: { id, name, cityId } })
      : create({ variables: { name, cityId } })
  }

  return (
    <ColumnWrapper>
      <BackdropLoading open={loading} />
      <StyledTableContainer>
        <TableToolbar>
          <Typography sx={{ width: '100%' }} variant="h6">
            Районы
          </Typography>
          <ToolbarButtonsWrapper>
            <CitySelector
              size="small"
              currentId={currentCityId}
              onSelect={(id) => dispatch(setCurrentCityId(id))}
            />
          </ToolbarButtonsWrapper>
          <IconButton
            color="secondary"
            disabled={!permission}
            onClick={() => setState({ name: '', cityId: currentCityId || 0 })}
          >
            <Add color="inherit" />
          </IconButton>
        </TableToolbar>
        <DataGrid<GridData>
          rows={rows}
          columns={[
            { key: 'name', title: 'Район' },
            { key: 'cityName', title: 'Город' },
          ]}
          onSelect={(row) =>
            setState({ id: row.id, name: row.name, cityId: row.cityId })
          }
        />
      </StyledTableContainer>
      <DistrictEditDialog
        open={permission && Boolean(state)}
        district={state}
        onSave={handleSaveClick}
        onClose={() => setState(null)}
        onDelete={(id) => remove({ variables: { id } })}
      />
    </ColumnWrapper>
  )
}
