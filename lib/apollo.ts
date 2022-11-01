import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from 'apollo-link-error'
import axios from 'axios'
import { API_URL } from '../constants/endpoint'
import { LoginResponse } from '../gql/graphql'

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`,
})

const getNewToken = async () => {
  try {
    const response = await axios.get<LoginResponse>(
      `${API_URL}/api/auth/refresh`,
      {
        withCredentials: true,
      }
    )
    localStorage.setItem('token', response.data.accessToken)
    return response.data.accessToken
  } catch (e) {
    console.log('НЕ АВТОРИЗОВАН')
    return ''
  }
}

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED':
            const oldHeaders = operation.getContext().headers
            operation.setContext({
              headers: {
                ...oldHeaders,
                authorization: `Bearer ${getNewToken()}`,
              },
            })
            return forward(operation)
        }
      }
    }

    // To retry on network errors, we recommend the RetryLink
    // instead of the onError link. This just logs the error.
    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  }
)

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
})

export default apolloClient
