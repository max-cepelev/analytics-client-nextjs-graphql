import { useRouter } from 'next/router'
import React from 'react'
import { userActions } from '../../store/reducers/UserSlice'
import { useAppDispatch } from '../redux'
import useNotification from '../useNotification'
import { gql, useQuery, useMutation, ApolloError } from '@apollo/client'
import {
  LoginResponse,
  LoginUserInput,
  RegistrationInput,
  User,
} from '../../gql/graphql'
import { dialogsActions } from '../../store/reducers/DialogsSlice'

const CHECK_AUTH = gql`
  mutation {
    refresh {
      user {
        id
        name
        email
        phone
        role
      }
      accessToken
    }
  }
`

const REGISTRATION = gql`
  mutation signup($input: RegistrationInput!) {
    signup(input: $input) {
      id
      name
      email
      phone
      role
    }
  }
`

const LOGIN = gql`
  mutation login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      user {
        id
        name
        email
        phone
        role
      }
      accessToken
    }
  }
`

export default function useAuthService() {
  const router = useRouter()
  const { successNotice, errorNotice } = useNotification()
  const { setUser } = userActions
  const dispatch = useAppDispatch()
  const { openLoginDialog, closeLoginDialog } = dialogsActions
  const [checkAuth, { loading: checkLoading, error: checkError }] =
    useMutation<{ refresh: LoginResponse }>(CHECK_AUTH, {
      onCompleted(data) {
        dispatch(setUser(data.refresh.user))
        window.localStorage.setItem('token', data.refresh.accessToken)
      },
      onError(error: ApolloError) {
        errorNotice(error.message)
        console.log({ error })
        dispatch(openLoginDialog())
      },
    })

  const [registration, { loading: registrationLoading }] = useMutation<
    { data: { signup: User } },
    { input: RegistrationInput }
  >(REGISTRATION, {
    onCompleted(response) {
      const { id, activated, email, role } = response.data.signup
      dispatch(setUser({ id, activated: activated || false, email, role }))
      router.push('/noactivate')
    },
    onError(error: ApolloError) {
      errorNotice(error.message ?? 'Ошибка при регистрации')
    },
  })

  const [login, { loading: loginLoading }] = useMutation<
    { login: LoginResponse },
    { input: LoginUserInput }
  >(LOGIN, {
    onCompleted(response) {
      dispatch(setUser(response.login.user))
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', response.login.accessToken)
      }
      dispatch(closeLoginDialog())
    },
    onError(error: ApolloError) {
      errorNotice(error.message ?? 'Ошибка входа')
    },
  })

  // const { mutate: logout } = useMutation(apiLogout, {
  //   onSuccess() {
  //     dispatch(setUser(null))
  //     router.push('/')
  //   },
  // })

  // const loading = registrationLoading || loginLoading

  return {
    checkAuth,
    checkLoading,
    checkError,
    registration,
    registrationLoading,
    login,
    loginLoading,
  }
}
