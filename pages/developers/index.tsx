import { Add } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import React, { useMemo, useState } from 'react'
import DataGrid, { GridColumn } from '../../components/DataGrid'
import DeveloperEditDialog from '../../components/developers/DeveloperEditDialog'
import GroupsSelector from '../../components/groups/GroupsSelector'
import BackdropLoading from '../../components/ui/BackdropLoading'
import ColumnWrapper from '../../components/ui/ColumnWrapper'
import {
  StyledTableContainer,
  TableToolbar,
} from '../../components/ui/StyledTableComponents'
import ToolbarButtonsWrapper from '../../components/ui/ToolbarButtonsWrapper'
import { Developer, DeveloperUncheckedCreateInput } from '../../gql/graphql'
import useDevelopersService from '../../hooks/apollo/useDevelopersService'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { selectorsActions } from '../../store/reducers/SelectorsSlice'
import { excludeFields } from '../../utils/excludeFields'

interface GridData extends Developer {
  groupName: string
}

const newDeveloper: DeveloperUncheckedCreateInput = {
  name: '',
  fullName: '',
  legalAddress: null,
  actualAddress: null,
  inn: '',
  kpp: null,
  ogrn: null,
  email: null,
  phone: null,
  manager: null,
  website: null,
  info: null,
  groupId: 0,
}

export default function DevelopersPage() {
  const [state, setState] = useState<DeveloperUncheckedCreateInput | null>(null)

  const {
    selectorsReducer: { currentGroupId },
    userReducer: { user },
  } = useAppSelector((store) => store)
  const { setCurrentGroupId } = selectorsActions
  const dispatch = useAppDispatch()

  const { developers, create, update, remove, loading } =
    useDevelopersService(currentGroupId)

  const rows: GridData[] = useMemo(
    () =>
      developers.map((item) => ({
        ...item,
        groupName: item.group.name,
        manager: item.manager || 'не указан',
        phone: item.phone || 'не указан',
      })),
    [developers]
  )
  const columns: GridColumn<GridData>[] = [
    { key: 'groupName', title: 'Группа компаний' },
    { key: 'name', title: 'Наименование' },
    { key: 'inn', title: 'ИНН' },
    { key: 'actualAddress', title: 'Адрес', isTooltip: true },
    { key: 'manager', title: 'Руководитель' },
    { key: 'phone', title: 'Телефон', width: 200 },
    { key: 'email', title: 'E-Mail', isEmail: true },
  ]
  const permission = user?.role !== 'USER'

  const handleClick = (developer: Developer) => {
    if (permission) {
      const state = excludeFields(developer, [
        '__typename',
        '_count',
        'updatedAt',
        'buildings',
      ])
      setState(state)
    }
  }

  const handleSaveClick = (developer: DeveloperUncheckedCreateInput) => {
    const {
      name,
      fullName,
      legalAddress,
      actualAddress,
      inn,
      kpp,
      ogrn,
      email,
      phone,
      manager,
      website,
      info,
      groupId,
    } = developer
    developer.id
      ? update({
          variables: {
            id: developer.id,
            input: {
              name: { set: name },
              fullName: { set: fullName },
              legalAddress: { set: legalAddress },
              actualAddress: { set: actualAddress },
              inn: { set: inn },
              kpp: { set: kpp },
              ogrn: { set: ogrn },
              email: { set: email },
              phone: { set: phone },
              manager: { set: manager },
              website: { set: website },
              info: { set: info },
              groupId: { set: groupId },
            },
          },
        })
      : create({ variables: { input: developer } })
  }

  return (
    <ColumnWrapper>
      <BackdropLoading open={loading} />
      <StyledTableContainer>
        <TableToolbar>
          <Typography sx={{ width: '100%' }} variant="h6">
            Застройщики
          </Typography>
          <ToolbarButtonsWrapper>
            <GroupsSelector
              nullSelect
              size="small"
              currentId={currentGroupId}
              onSelect={(id) => dispatch(setCurrentGroupId(id))}
            />
          </ToolbarButtonsWrapper>
          <IconButton
            disabled={!permission}
            color="secondary"
            onClick={() => setState(newDeveloper)}
          >
            <Add />
          </IconButton>
        </TableToolbar>
        <DataGrid<GridData>
          rows={rows}
          columns={columns}
          onSelect={handleClick}
          stickyHeader
        />
      </StyledTableContainer>
      <DeveloperEditDialog
        developer={state}
        onSave={handleSaveClick}
        onClose={() => setState(null)}
        onDelete={(id) => remove({ variables: { id } })}
      />
    </ColumnWrapper>
  )
}
