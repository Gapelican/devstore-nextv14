import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const BaseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), BaseUrl)

  return fetch(url, init)
}
