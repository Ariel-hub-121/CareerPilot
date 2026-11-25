import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { UserIdentity } from '../../types/domain'
import { NoticeDialog } from '../../shared/NoticeDialog'

interface AuthContextValue {
  status: 'unconfigured' | 'loading' | 'authenticated' | 'unauthenticated'
  user: UserIdentity | null
  requestSignIn: () => void
}
const AuthContext = createContext<AuthContextValue | null>(null)

/** Replace this boundary with Firebase onAuthStateChanged during the auth milestone. */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [noticeOpen, setNoticeOpen] = useState(false)
  return <AuthContext.Provider value={{ status: 'unconfigured', user: null, requestSignIn: () => setNoticeOpen(true) }}>
    {children}
    <NoticeDialog open={noticeOpen} onClose={() => setNoticeOpen(false)} title="登入功能準備中">
      <p>這是 CareerPilot 的初始網站骨架，Google 登入尚未串接。</p>
      <p>目前可以瀏覽各功能入口；接上 Firebase 後，即可保存探索、收藏與面試紀錄。</p>
    </NoticeDialog>
  </AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
