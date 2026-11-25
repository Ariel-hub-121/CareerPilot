/** Shared groundwork. Extend per the v3 specification before implementing each feature. */
export type DataMode = 'synthetic' | 'live'
export type AnalysisMode = 'prewritten_demo' | 'live_ai'
export type AuthMode = 'fixture_only' | 'firebase'
export interface ApiErrorBody { code: string; message: string; retryable: boolean }
export interface EntityRef { id: string; version: string }
export interface AnswerRef { answer_id: string; answer_version: string; quote: string }
export interface UserIdentity { uid: string; displayName: string | null; photoURL: string | null }
// Interview type_id will come from the agreed TypeRegistry, rather than an invented enum here.
export type InterviewDuration = 60 | 120
export type HistoryTab = 'explorations' | 'favorites' | 'interviews'
export type LoadState<T> =
  | { status: 'idle' | 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: ApiErrorBody }
