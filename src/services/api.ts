import { appConfig } from '../config/app'
import type { ApiErrorBody } from '../types/domain'

export class ApiError extends Error {
  readonly code: string
  readonly retryable: boolean
  readonly status: number
  constructor(body: ApiErrorBody, status = 0) {
    super(body.message)
    this.name = 'ApiError'
    this.code = body.code
    this.retryable = body.retryable
    this.status = status
  }
}

/** Pass the Firebase ID token for private endpoints. The server must derive UID from it. */
export async function apiRequest<T>(path: string, options: RequestInit = {}, token?: string): Promise<T> {
  if (!appConfig.apiBaseUrl) throw new ApiError({ code: 'NOT_CONFIGURED', message: 'API 尚未串接。', retryable: false })
  const headers = new Headers(options.headers)
  if (token) headers.set('Authorization', `Bearer ${token}`)
  if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json')
  let response: Response
  try {
    response = await fetch(`${appConfig.apiBaseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`, { ...options, headers })
  } catch {
    throw new ApiError({ code: 'NETWORK_ERROR', message: '連線失敗，請稍後再試。', retryable: true })
  }
  if (!response.ok) {
    const body: unknown = await response.json().catch(() => null)
    const valid = typeof body === 'object' && body !== null && 'code' in body && typeof body.code === 'string'
      && 'message' in body && typeof body.message === 'string' && 'retryable' in body && typeof body.retryable === 'boolean'
    throw new ApiError(valid ? body as ApiErrorBody : { code: `HTTP_${response.status}`, message: '請求失敗，請稍後再試。', retryable: response.status >= 500 || response.status === 429 }, response.status)
  }
  if (response.status === 204) return undefined as T
  return response.json() as Promise<T>
}
