import { Add } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import DataGrid from '../../components/DataGrid'
import GroupEditDialog from '../../components/groups/GroupEditDialog'
import ColumnWrapper from '../../components/ui/ColumnWrapper'
import {
  StyledTableContainer,
  TableToolbar,
} from '../../components/ui/StyledTableComponents'
import { GroupUncheckedCreateInput, Region } from '../../gql/graphql'
import useGroupsService from '../../hooks/apollo/useGroupsService'
import { useAppSelector } from '../../hooks/redux'

type GridData = {
  id: number
  name: string
  regionString: string
  regions: Region[]
}

export default function GroupsPage() {
  const { user } = useAppSelector((store) => store.userReducer)
  const { groups, create, update, remove } = useGroupsService()
  const [state, setState] = useState<GroupUncheckedCreateInput | null>(null)

  const permission = user?.role !== 'USER'

  const handleSaveClick = (group: GroupUncheckedCreateInput) => {
    const { id, name } = group
    id ? update({ variables: { id, name } }) : create({ variables: { name } })
  }

  const rows: GridData[] = groups.map((group) => ({
    id: group.id,
    name: group.name,
    regions: group.regions || [],
    regionString: group.regions?.map((item) => item.name) + '',
  }))

  return (
    <ColumnWrapper>
      <StyledTableContainer>
        <TableToolbar>
          <Typography sx={{ width: '100%' }} variant="h6">
            Группы компаний
          </Typography>
          <IconButton
            color="secondary"
            disabled={!permission}
            onClick={() => setState({ name: '' })}
          >
            <Add />
          </IconButton>
        </TableToolbar>
        <DataGrid<GridData>
          rows={rows}
          columns={[
            { key: 'name', title: 'Наименование' },
            { key: 'regionString', title: 'Регионы' },
          ]}
          stickyHeader
          onSelect={(row) =>
            permission &&
            setState({
              id: row.id,
              name: row.name,
              regions: { connect: row.regions },
            })
          }
        />
      </StyledTableContainer>
      <GroupEditDialog
        open={Boolean(state)}
        group={state}
        onSave={handleSaveClick}
        onClose={() => setState(null)}
        onDelete={(id) => remove({ variables: { id } })}
      />
    </ColumnWrapper>
  )
}
