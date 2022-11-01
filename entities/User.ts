export enum Roles {
  USER = 'Пользователь',
  ADMIN = 'Администратор',
  EDITOR = 'Редактор',
}

export type UserRole = keyof typeof Roles

export interface User {
  id: number
  name: string
  email: string
  phone: string
  activated: boolean
  role: UserRole
}

export interface AuthData {
  token: string
  user: User
}
