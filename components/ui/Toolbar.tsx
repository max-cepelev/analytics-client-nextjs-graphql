'use client'
import {
  AccountCircle,
  Home,
  Notifications,
  Settings,
} from '@mui/icons-material'
import { Breadcrumbs, IconButton, styled, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import SECTIONS from '../../constants/sectionsConfig'
import { useAppSelector } from '../../hooks/redux'
import styles from '../../styles/Toolbar.module.scss'
import RowWrapper from './RowWrapper'

export default function Toolbar() {
  const router = useRouter()
  const { user } = useAppSelector((store) => store.userReducer)
  const section = SECTIONS.find((item) => item.route === router.route)
  return (
    <div className={styles.toolbar}>
      <Breadcrumbs
        sx={{
          '& .MuiBreadcrumbs-separator': {},
        }}
      >
        <IconButton>
          <Home />
        </IconButton>

        <Link href={router.route}>
          <Typography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            color={'dark'}
            sx={{ lineHeight: 0 }}
          >
            {router.route}
          </Typography>
        </Link>
        <Typography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={'dark'}
          sx={{ lineHeight: 0 }}
        >
          {section?.title || ''}
        </Typography>
      </Breadcrumbs>
      {/* <Typography
          fontWeight="bold"
          textTransform="capitalize"
          variant="h6"
          color={'dark'}
          noWrap
        >
          {section?.title || ''}
        </Typography> */}

      <RowWrapper>
        {user && (
          <Typography
            textAlign="center"
            paddingTop="10px"
            lineHeight="100%"
            variant="subtitle1"
          >
            {user.email}
          </Typography>
        )}
        <IconButton size="small" disableRipple>
          <AccountCircle />
        </IconButton>
        <IconButton size="small" disableRipple>
          <Settings />
        </IconButton>
        <IconButton
          size="small"
          disableRipple
          aria-controls="notification-menu"
          aria-haspopup="true"
        >
          <Notifications />
        </IconButton>
      </RowWrapper>
    </div>
  )
}
