import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useRouter } from 'next/router'
import { useAppSelector } from '../hooks/redux'
import SECTIONS from '../constants/sectionsConfig'
import Image from 'next/image'

const Menu = () => {
  const router = useRouter()
  const { user } = useAppSelector((store) => store.userReducer)
  console.log(user)
  const collapseName = router.pathname.replace('/', '')
  return (
    <List
      component="nav"
      sx={{
        overflow: 'auto',
        padding: '10px',
        // backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      {SECTIONS.map((section) => {
        if (user && section.roles.includes(user.role)) {
          return (
            <ListItem
              sx={{
                borderRadius: '0.375rem',
                marginBottom: '5px',
                padding: '12px',
                background:
                  collapseName == section.key
                    ? 'linear-gradient(195deg, #49a3f1, #1A73E8)'
                    : 'inherit',
                '&:hover': {
                  backgroundColor: '#69696e',
                },
              }}
              onClick={() => router.push(section.route)}
              key={section.key}
              button
            >
              <ListItemIcon sx={{ minWidth: '35px' }}>
                <Image
                  src={section.icon}
                  alt={section.title}
                  width={20}
                  height={20}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: '#FFFFFF',
                  '& .MuiListItemText-primary': {
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    lineHeight: 0,
                  },
                }}
                primary={section.title}
              />
            </ListItem>
          )
        }
        return null
      })}
    </List>
  )
}

export default React.memo(Menu)
