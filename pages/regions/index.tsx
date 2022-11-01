import { Add } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import Grid from '../../components/DataGrid'
import RegionEditDialog from '../../components/regions/RegionEditDialog'
import BackdropLoading from '../../components/ui/BackdropLoading'
import ColumnWrapper from '../../components/ui/ColumnWrapper'
import {
  StyledTableContainer,
  TableToolbar,
} from '../../components/ui/StyledTableComponents'
import { Region } from '../../gql/graphql'
import useRegionsService from '../../hooks/apollo/useRegionsService'
import { useAppSelector } from '../../hooks/redux'

export default function RegionsPage() {
  const { regions, create, update, remove, loading } = useRegionsService()
  const [state, setState] = useState<{ name: string } | null>(null)
  const { user } = useAppSelector((store) => store.userReducer)

  return (
    <ColumnWrapper>
      <BackdropLoading open={loading} />
      <StyledTableContainer>
        <TableToolbar>
          <Typography sx={{ width: '100%' }} variant="h6">
            Регионы
          </Typography>
          <IconButton
            disabled={user?.role === 'USER'}
            color="secondary"
            onClick={() => setState({ name: '' })}
          >
            <Add />
          </IconButton>
        </TableToolbar>
        <Grid<Region>
          rows={regions}
          columns={[{ key: 'name', title: 'Наименование' }]}
          onSelect={(region) => setState(region)}
        />
      </StyledTableContainer>
      <RegionEditDialog
        open={Boolean(state)}
        region={state}
        onSave={(region) =>
          region.id
            ? update({ variables: { id: region.id, name: region.name } })
            : create({ variables: { name: region.name } })
        }
        onClose={() => setState(null)}
        onDelete={(id) => remove({ variables: { id } })}
      />
    </ColumnWrapper>
  )
}
