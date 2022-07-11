import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

export function rootContainer(lastRootContainer: React.ReactElement) {
  return <ConfigProvider locale={zhCN}>{lastRootContainer}</ConfigProvider>
}

export async function render(oldRender: () => void) {
  oldRender()
}
