declare module '*.css'
declare module '*.less'
declare module '*.png'
declare module '*.svg'

/* eslint-disable @typescript-eslint/consistent-type-imports */
type ApiInfo = import('./src/types/widget-api').ApiInfo
type UserInfo = import('@xtc/user-status').UserInfo
/* eslint-enable @typescript-eslint/consistent-type-imports */

declare interface Window {
  __apiNames__: Record<ApiInfo['id'], ApiInfo['name']>
  widgetStatisticApiId: string
}

declare interface Console {
  devLog: typeof window.console.log
  devError: typeof window.console.log
}

declare type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

declare interface PaginationType<Data = unknown> {
  /** 数据载体 */
  list: Data[]
  /** 当前页数 */
  current: number
  /** 查看数据条数 */
  pageSize: number
  /** 共有页数 */
  pageNumber: number
  /** 共有数据条数 */
  total: number
}

declare interface Response<Data = unknown> {
  code: string
  desc?: string
  data: Data
}
