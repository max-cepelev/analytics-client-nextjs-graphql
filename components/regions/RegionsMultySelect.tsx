import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Region, RegionWhereUniqueInput } from '../../gql/graphql'
import useRegionsService from '../../hooks/apollo/useRegionsService'

interface Props {
  selected: RegionWhereUniqueInput[]
  onSelect: (regions: RegionWhereUniqueInput[]) => void
}

export default function RegionsMultySelect({ selected, onSelect }: Props) {
  const [value, setValue] = useState(selected)
  const { regions } = useRegionsService()
  const option: { id: number; label: string }[] = regions.map((item) => ({
    id: item.id,
    label: item.name,
  }))
  console.log(regions)
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={option}
      sx={{ width: 300 }}
      multiple
      value={value}
      onChange={(e, value) => setValue(value)}
      renderInput={(params) => <TextField {...params} label="Регионы" />}
    />
  )
}
