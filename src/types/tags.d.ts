export type TagsType = {
  name: string
  path: string
  icon: string
}

export type PayloadType = {
  index: number | string
  type: 'last' | 'notLast'
  path: string
}
