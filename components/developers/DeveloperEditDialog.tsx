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
import { DeveloperUncheckedCreateInput } from '../../gql/graphql'
import ConfirmModal from '../dialogs/ConfirmModal'
import GroupsSelector from '../groups/GroupsSelector'
const Wrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  marginTop: '10px',
  width: 'clamp(350px, 70vw, 800px)',
  gridTemplateAreas: `
    'selector  name          name'
    'inn       fullName      fullName'
    'kpp       fullName      fullName'
    'ogrn      legalAddress  legalAddress'
    'email     legalAddress  legalAddress'
    'phone     actualAddress actualAddress'
    'website   actualAddress actualAddress'
    'manager   info          info'
  `,
  gap: '15px',
}))

interface Props {
  developer: DeveloperUncheckedCreateInput | null
  onSave: (developer: DeveloperUncheckedCreateInput) => void
  onDelete: (id: number) => void
  onClose: () => void
}

export default function DeveloperEditDialog({
  developer,
  onClose,
  onDelete,
  onSave,
}: Props) {
  const [state, setState] = useState<DeveloperUncheckedCreateInput | null>(null)
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
    if (developer) {
      setState(developer)
    }
  }, [developer])

  return (
    <Dialog onClose={onClose} open={Boolean(developer)} maxWidth="xl">
      <DialogTitle sx={{ textAlign: 'center' }}>
        {developer ? developer.name : ''}
      </DialogTitle>
      <DialogContent>
        {state && (
          <Wrapper>
            <TextField
              sx={{ gridArea: 'name' }}
              fullWidth
              size="small"
              value={state.name}
              error={state?.name == ''}
              name="name"
              label="Наименование"
              onChange={(e) =>
                setState(() => ({ ...state, name: e.target.value }))
              }
            />
            <TextField
              sx={{ gridArea: 'fullName', height: '100%' }}
              error={state?.fullName == ''}
              fullWidth
              size="small"
              InputProps={{ sx: { height: '100%' } }}
              value={state.fullName}
              multiline
              rows={3}
              name="fullName"
              label="Полное наименование"
              onChange={(e) =>
                setState(() => ({ ...state, fullName: e.target.value }))
              }
            />
            <TextField
              sx={{ gridArea: 'legalAddress', height: '100%' }}
              fullWidth
              size="small"
              value={state.legalAddress || ''}
              multiline
              InputProps={{ sx: { height: '100%' } }}
              rows={3}
              name="legalAddress"
              label="Юридический адрес"
              onChange={(e) =>
                setState(() => ({ ...state, legalAddress: e.target.value }))
              }
            />
            <TextField
              sx={{ gridArea: 'actualAddress', height: '100%' }}
              fullWidth
              size="small"
              value={state.actualAddress || ''}
              multiline
              InputProps={{ sx: { height: '100%' } }}
              rows={3}
              name="actualAddress"
              label="Фактический адрес"
              onChange={(e) =>
                setState(() => ({ ...state, actualAddress: e.target.value }))
              }
            />
            <div style={{ gridArea: 'selector' }}>
              <GroupsSelector
                fullWidth
                size="small"
                currentId={state.groupId}
                nullSelect
                error={state.groupId == 0}
                onSelect={(id) =>
                  setState(() => ({ ...state, groupId: id ?? 0 }))
                }
              />
            </div>
            <TextField
              sx={{ gridArea: 'inn' }}
              size="small"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              value={state.inn || ''}
              type="number"
              label="ИНН"
              onChange={(e) => {
                const { value } = e.target
                if (value.length <= 10) {
                  setState(() => ({ ...state, inn: value }))
                }
              }}
            />
            <TextField
              sx={{ gridArea: 'kpp' }}
              size="small"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              value={state.kpp || ''}
              type="number"
              label="КПП"
              onChange={(e) => {
                const { value } = e.target
                if (value.length <= 9) {
                  setState(() => ({ ...state, kpp: value }))
                }
              }}
            />
            <TextField
              sx={{ gridArea: 'ogrn' }}
              size="small"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              value={state.ogrn || ''}
              type="number"
              label="ОГРН"
              onChange={(e) => {
                const { value } = e.target
                if (value.length <= 13) {
                  setState(() => ({ ...state, ogrn: value }))
                }
              }}
            />
            <TextField
              sx={{ gridArea: 'email' }}
              fullWidth
              size="small"
              value={state.email || ''}
              name="email"
              label="E-mail"
              onChange={(e) =>
                setState(() => ({ ...state, email: e.target.value }))
              }
            />
            <TextField
              sx={{ gridArea: 'phone' }}
              fullWidth
              size="small"
              value={state.phone || ''}
              name="phone"
              label="Телефон"
              onChange={(e) =>
                setState(() => ({ ...state, phone: e.target.value }))
              }
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
              sx={{ gridArea: 'manager' }}
              fullWidth
              size="small"
              value={state.manager || ''}
              name="manager"
              label="Руководитель"
              onChange={(e) =>
                setState(() => ({ ...state, manager: e.target.value }))
              }
            />
            <TextField
              sx={{ gridArea: 'info' }}
              fullWidth
              size="small"
              value={state.info || ''}
              name="info"
              label="Дополнительно"
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
            state?.name == '' || state?.fullName == '' || state?.groupId == 0
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
