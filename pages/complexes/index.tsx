import React, { useState } from 'react'
import { Button, IconButton, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import { Complex, ComplexUncheckedCreateInput } from '../../gql/graphql'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { selectorsActions } from '../../store/reducers/SelectorsSlice'
import useComplexesService from '../../hooks/apollo/useComplexesService'
import ColumnWrapper from '../../components/ui/ColumnWrapper'
import BackdropLoading from '../../components/ui/BackdropLoading'
import {
  StyledTableContainer,
  TableToolbar,
} from '../../components/ui/StyledTableComponents'
import ToolbarButtonsWrapper from '../../components/ui/ToolbarButtonsWrapper'
import CitySelector from '../../components/cities/CitySelector'
import DistrictSelector from '../../components/districts/DistrictSelector'
import GroupsSelector from '../../components/groups/GroupsSelector'
import DataGrid, { GridColumn } from '../../components/DataGrid'
import ComplexEditDialog from '../../components/complexes/ComplexEditDialog'
import { excludeFields } from '../../utils/excludeFields'

interface GridData extends Complex {
  groupName: string
}

const newComplex: ComplexUncheckedCreateInput = {
  name: '',
  shortName: null,
  website: null,
  info: null,
  domRfId: null,
  domClickId: null,
  cityId: 0,
  districtId: 0,
  groupId: 0,
}

export default function ComplexesPage() {
  const [state, setState] = useState<ComplexUncheckedCreateInput | null>(null)

  const { currentGroupId, currentCityId, districtId } = useAppSelector(
    (store) => store.selectorsReducer
  )
  const { setCurrentGroupId, setDistrictId, setCurrentCityId } =
    selectorsActions
  const dispatch = useAppDispatch()

  const { complexes, create, update, remove, loading } = useComplexesService({
    groupId: currentGroupId,
    districtId,
    cityId: currentCityId,
  })

  const rows: GridData[] = complexes.map((item) => ({
    ...item,
    groupName: item.group.name,
  }))

  const columns: GridColumn<GridData>[] = [
    { key: 'name', title: 'Наименование' },
    { key: 'shortName', title: 'Сокращенное наименование' },
    { key: 'groupName', title: 'Застройщик' },
    {
      key: 'website',
      title: 'Сайт',
      isLink: true,
    },
    {
      key: 'info',
      title: 'Описание',
    },
  ]

  const handleReset = () => {
    dispatch(setDistrictId(null))
    dispatch(setCurrentGroupId(null))
  }

  const handleSelect = (complex: Complex) => {
    const state = excludeFields(complex, [
      '__typename',
      '_count',
      'buildings',
      'createdAt',
    ])
    setState(state)
  }

  const handleSaveClick = (complex: ComplexUncheckedCreateInput) => {
    const {
      id,
      name,
      shortName,
      website,
      info,
      domRfId,
      domClickId,
      cityId,
      districtId,
      groupId,
    } = complex
    id
      ? update({
          variables: {
            id,
            input: {
              name: { set: name },
              shortName: { set: shortName },
              info: { set: info },
              website: { set: website },
              domRfId: { set: domRfId },
              domClickId: { set: domClickId },
              cityId: { set: cityId },
              districtId: { set: districtId },
              groupId: { set: groupId },
            },
          },
        })
      : create({ variables: { input: complex } })
  }
  return (
    <ColumnWrapper>
      <BackdropLoading open={loading} />
      <StyledTableContainer>
        <TableToolbar>
          <Typography sx={{ width: '100%' }} variant="h6">
            Жилые комплексы
          </Typography>
          <ToolbarButtonsWrapper>
            <Button onClick={handleReset}>Сбросить</Button>
            <CitySelector
              size="small"
              currentId={currentCityId}
              onSelect={(id) => dispatch(setCurrentCityId(id))}
            />
            <DistrictSelector
              size="small"
              currentId={districtId}
              cityId={currentCityId}
              nullSelect
              onSelect={(id) => dispatch(setDistrictId(id))}
            />
            <GroupsSelector
              nullSelect={true}
              size="small"
              currentId={currentGroupId}
              onSelect={(id) => dispatch(setCurrentGroupId(id))}
            />
          </ToolbarButtonsWrapper>
          <IconButton color="secondary" onClick={() => setState(newComplex)}>
            <Add />
          </IconButton>
        </TableToolbar>
        <DataGrid
          rows={rows}
          columns={columns}
          onSelect={handleSelect}
          stickyHeader
        />
      </StyledTableContainer>
      <ComplexEditDialog
        complex={state}
        onSave={handleSaveClick}
        onClose={() => setState(null)}
        onDelete={(id) => remove({ variables: { id } })}
      />
    </ColumnWrapper>
  )
}
