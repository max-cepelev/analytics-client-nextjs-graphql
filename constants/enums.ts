export enum Roles {
  USER = 'Пользователь',
  ADMIN = 'Администратор',
  EDITOR = 'Редактор',
}

export type UserRole = keyof typeof Roles

export enum PropertyTypes {
  LIVING = 'Жилая',
  COMMERCIAL = 'Коммерческая',
  PARKING = 'Машиноместа',
}

export type PropertyType = keyof typeof PropertyTypes
