import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import React, { useState } from 'react'
import useAuthService from '../hooks/apollo/useAuthService'
import { useAppSelector } from '../hooks/redux'

const ContentWrapper = styled('div')(() => ({
  paddingTop: 5,
  display: 'flex',
  flexDirection: 'column',
  rowGap: 25,
  minWidth: 300,
}))

export default function LoginDialog() {
  const { loginDialog } = useAppSelector((store) => store.dialogsReducer)
  const { login, registration } = useAuthService()
  const [reg, setReg] = useState(false)
  const [error, setError] = useState({ email: false, password: false })
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  })

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    if (name === 'email') {
      setValues((prev) => ({ ...prev, email: value }))
    }
    if (name === 'password' && value.length < 33) {
      setValues((prev) => ({ ...prev, password: value }))
    }

    if (name === 'phone' && !isNaN(Number(value)) && value.length < 12) {
      setValues((prev) => ({ ...prev, phone: value }))
    }

    if (name === 'name') {
      setValues((prev) => ({ ...prev, name: value }))
    }
  }

  const handleAccept = () => {
    const { email, password, name, phone } = values

    if (email && password) {
      reg
        ? registration({
            variables: { input: { email, password, name, phone } },
          })
        : login({ variables: { input: { email, password } } })
    }
  }

  return (
    <Dialog open={loginDialog}>
      <DialogTitle sx={{ textAlign: 'center', fontSize: '25px' }}>
        {reg ? 'Регистрация' : 'Вход'}
      </DialogTitle>
      <DialogContent>
        <ContentWrapper>
          {reg && (
            <TextField
              label="Ваше имя"
              value={values.name}
              name="name"
              placeholder="Представьтесь"
              onChange={handleInput}
            />
          )}
          {reg && (
            <TextField
              placeholder="+7 (999) 999-99-99"
              label="Телефон"
              value={values.phone}
              name="phone"
              onChange={handleInput}
            />
          )}
          <TextField
            label="email"
            type="email"
            value={values.email}
            name="email"
            onChange={handleInput}
          />
          <TextField
            label="Пароль"
            type="password"
            value={values.password}
            name="password"
            onChange={handleInput}
          />
        </ContentWrapper>
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 2,
          padding: '10px 24px',
        }}
      >
        <Button
          variant="contained"
          fullWidth
          onClick={handleAccept}
          onKeyDown={(e) => console.log(e)}
          color="primary"
          disabled={error.email || error.password}
        >
          {reg ? 'Зарегистрироваться' : 'Войти'}
        </Button>
        {reg ? (
          <Typography textAlign="center" variant="caption">
            Уже зарегистрированы?{' '}
            <span
              style={{ color: '#0075ff', cursor: 'pointer' }}
              onClick={() => setReg(false)}
            >
              Войдите.
            </span>
          </Typography>
        ) : (
          <Typography textAlign="center" variant="caption">
            Нет учетной записи?{' '}
            <span
              style={{ color: '#0075ff', cursor: 'pointer' }}
              onClick={() => setReg(true)}
            >
              Зарегистрируйтесь.
            </span>
          </Typography>
        )}
      </DialogActions>
    </Dialog>
  )
}
