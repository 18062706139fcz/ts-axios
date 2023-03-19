import { AxiosRequestConfig } from "./types"

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null , url, method = 'GET' } = config
  const request = new XMLHttpRequest()
  /* 将此属性设置为 true 允许建立跨站点的连接 */
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
