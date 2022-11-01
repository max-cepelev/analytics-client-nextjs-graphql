import { styled } from '@mui/material'
import React from 'react'

const ColumnWrapper = styled('div')(() => ({
  // width: "100%",
  display: 'flex',
  flexDirection: 'column',
  rowGap: 15,
  marginBottom: 10,
}))

export default ColumnWrapper
