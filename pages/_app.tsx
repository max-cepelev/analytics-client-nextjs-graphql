import { ApolloProvider } from '@apollo/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import Layout from '../components/ui/Layout'
import theme from '../lib/theme'
import store from '../store/store'
import client from '../lib/apollo'
import '../styles/globals.css'
import useAuthService from '../hooks/apollo/useAuthService'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            autoHideDuration={3000}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  )
}
