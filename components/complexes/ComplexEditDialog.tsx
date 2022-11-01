import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { ComplexUncheckedCreateInput } from '../../gql/graphql'
import CitySelector from '../cities/CitySelector'
import ConfirmModal from '../dialogs/ConfirmModal'
import AreasSelector from '../districts/DistrictSelector'
import GroupsSelector from '../groups/GroupsSelector'

interface Props {
  complex: ComplexUncheckedCreateInput | null
  onSave: (complex: ComplexUncheckedCreateInput) => void
  onDelete: (id: number) => void
  onClose: () => void
}

const Wrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  marginTop: '10px',
  width: 'clamp(350px, 70vw, 700px)',
  gridTemplateAreas: `
    'city       name name'
    'area       name name'
    'group      shortName shortName'
    'domClickId shortName shortName'
    'domRfId    info      info'
    'website    info      info'`,
  gap: '15px',
}))

export default function ComplexEditDialog({
  complex,
  onClose,
  onDelete,
  onSave,
}: Props) {
  const [state, setState] = useState<ComplexUncheckedCreateInput | null>(null)
  const [confirmModal, setConformModal] = useState(false)

  const handleSave = () => {
    state && onSave(state)
    setState(null)
    onClose()
  }

  const handleDelete = (id: number) => {
    onDelete(id)
    setState(null)
    setConformModal(false)
    onClose()
  }

  const handleCancel = () => {
    setState(null)
    onClose()
  }

  useEffect(() => {
    if (complex) {
      setState(complex)
    }
  }, [complex])

  return (
    <Dialog onClose={onClose} open={Boolean(complex)} maxWidth="xl">
      <DialogTitle sx={{ textAlign: 'center' }}>
        {complex ? complex.name : ''}
      </DialogTitle>
      <DialogContent>
        {state && (
          <Wrapper>
            <TextField
              sx={{ gridArea: 'shortName', height: '100%' }}
              fullWidth
              size="small"
              InputProps={{ sx: { height: '100%' } }}
              value={state.shortName || ''}
              name="shortName"
              multiline
              rows={3}
              label="Сокращенное наименование"
              onChange={(e) =>
                setState(() => ({ ...state, shortName: e.target.value }))
              }
            />
            <TextField
              sx={{ gridArea: 'name' }}
              fullWidth
              size="small"
              error={state.name == ''}
              value={state.name || ''}
              InputProps={{ sx: { height: '100%' } }}
              name="name"
              multiline
              rows={3}
              label="Наименование"
              onChange={(e) =>
                setState(() => ({ ...state, name: e.target.value }))
              }
            />
            <div style={{ gridArea: 'city' }}>
              <CitySelector
                fullWidth
                error={state.cityId == 0}
                size="small"
                currentId={state.cityId}
                onSelect={(id) =>
                  id &&
                  setState(() => ({ ...state, cityId: id, districtId: 0 }))
                }
              />
            </div>
            <div style={{ gridArea: 'area' }}>
              <AreasSelector
                fullWidth
                error={state.districtId == 0}
                size="small"
                cityId={state.cityId !== 0 ? state.cityId : undefined}
                currentId={state.districtId}
                onSelect={(id) =>
                  id && setState(() => ({ ...state, districtId: id }))
                }
              />
            </div>
            <div style={{ gridArea: 'group' }}>
              <GroupsSelector
                fullWidth
                size="small"
                currentId={state.groupId}
                error={state.groupId === 0}
                onSelect={(id) =>
                  setState(() => ({ ...state, groupId: id ?? 0 }))
                }
              />
            </div>
            <TextField
              sx={{ gridArea: 'domRfId' }}
              size="small"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              value={state.domRfId || ''}
              type="number"
              label="ДомРФ ID"
              onChange={(e) => {
                const { value } = e.target
                if (value.length <= 10) {
                  setState(() => ({
                    ...state,
                    domRfId: value ? +value : null,
                  }))
                }
              }}
            />
            <TextField
              sx={{ gridArea: 'domClickId' }}
              size="small"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              value={state.domClickId || ''}
              type="number"
              label="ДомКлик ID"
              onChange={(e) => {
                const { value } = e.target
                if (value.length <= 10) {
                  setState(() => ({
                    ...state,
                    domClickId: value ? +value : null,
                  }))
                }
              }}
            />
            <TextField
              sx={{ gridArea: 'website' }}
              fullWidth
              size="small"
              value={state.website || ''}
              name="website"
              label="Сайт"
              onChange={(e) =>
                setState(() => ({ ...state, website: e.target.value }))
              }
            />
            <TextField
              sx={{ gridArea: 'info' }}
              fullWidth
              size="small"
              value={state.info || ''}
              name="info"
              multiline
              rows={3}
              InputProps={{ sx: { height: '100%' } }}
              label="Описание"
              onChange={(e) =>
                setState(() => ({ ...state, info: e.target.value }))
              }
            />
          </Wrapper>
        )}
      </DialogContent>
      <DialogActions>
        {state && state.id && (
          <Button color="error" onClick={() => setConformModal(true)}>
            Удалить
          </Button>
        )}
        <Button onClick={handleCancel}>Отмена</Button>
        <Button
          disabled={
            state?.name == '' ||
            state?.cityId == 0 ||
            state?.districtId == 0 ||
            state?.groupId == 0
          }
          onClick={handleSave}
        >
          Сохранить
        </Button>
      </DialogActions>
      <ConfirmModal
        open={confirmModal}
        onConfirm={() => handleDelete(state!.id!)}
        onClose={() => setConformModal(false)}
      />
    </Dialog>
  )
}
