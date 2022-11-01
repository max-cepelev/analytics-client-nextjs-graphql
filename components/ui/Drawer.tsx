import React from 'react'
import styles from '../../styles/Drawer.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Menu from '../Menu'

export default function Drawer() {
  const router = useRouter()
  return (
    <div className={styles.drawer}>
      <div className={styles.drawer__title} onClick={() => router.push('/')}>
        <Image width={40} height={40} src="/icons/logo.svg" alt="logo" />
        <h4>Pro метры</h4>
      </div>
      <hr className={styles.drawer__divider}></hr>
      <Menu />
    </div>
  )
}
