import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Box, LinearProgress } from '@mui/material'
import useRegionsService from '../../hooks/apollo/useRegionsService'

interface Props {
  size?: 'small' | 'medium'
  currentId: number | null
  onSelect: (id: number | null) => void
  nullSelect?: boolean
  disabled?: boolean
  error?: boolean
}

export default function RegionsSelector({
  currentId,
  onSelect,
  size = 'medium',
  nullSelect = false,
  disabled = false,
  error = false,
}: Props) {
  const { regions, loading } = useRegionsService()

  const handleChange = (event: SelectChangeEvent<typeof currentId>) => {
    const {
      target: { value },
    } = event
    onSelect(value == 0 ? null : Number(value))
  }

  if (loading)
    return (
      <Box sx={{ minWidth: 135, padding: 1 }}>
        <LinearProgress />
      </Box>
    )

  return (
    <FormControl sx={{ m: 0, minWidth: 135 }} disabled={disabled}>
      <InputLabel id="region-label">Регион</InputLabel>
      <Select
        error={error}
        labelId="region-label"
        id="region"
        value={currentId || 0}
        onChange={handleChange}
        input={<OutlinedInput label="Регион" size={size} error={error} />}
        disabled={disabled}
      >
        <MenuItem disabled={!nullSelect} value={0}>
          Не выбран
        </MenuItem>
        {regions.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
