import type { Method, Options } from './request'
import { request } from './request'

interface Config<P> {
  method: Method
  params?: P
  data?: string | object
  options?: Options
}

export class Api {
  private readonly api: ReturnType<typeof request.create>

  constructor(baseUrl: string) {
    this.api = request.create(baseUrl)
  }

  async fetcher<T, P extends object = object>(
    url: string,
    config: Config<P>,
  ): Promise<T> {
    const { data } = await this.api<T>(url, config.options, config.method, config.data)
    return data
  }
}
