import { useState } from 'react'
import { BookOpen, Bookmark, Mic, LogIn, LockKeyhole } from 'lucide-react'
import { PageHeading } from '../../shared/PageHeading'
import { useAuth } from '../auth/AuthProvider'
import type { HistoryTab } from '../../types/domain'

const tabs = [
  { id: 'explorations', label: '探索紀錄', icon: BookOpen, text: '探索問答、確認摘要、報告與履歷素材，將集中在這裡。' },
  { id: 'favorites', label: '收藏職缺', icon: Bookmark, text: '收藏的實習機會、職缺快照與準備缺口，將集中在這裡。' },
  { id: 'interviews', label: '面試紀錄', icon: Mic, text: '練習題目、逐字稿與回饋，將集中在這裡。' },
] as const

export function HistoryPage() {
  const [tab, setTab] = useState<HistoryTab>('explorations')
  const { requestSignIn } = useAuth()
  const current = tabs.find(item => item.id === tab)!
  return <><PageHeading eyebrow="YOUR PERSONAL JOURNEY" title="我的歷程" description="回顧每一步準備，把每一次探索與練習慢慢累積起來。" /><div className="history-tabs" aria-label="歷程分類">{tabs.map(({ id, label, icon: Icon }) => <button key={id} type="button" aria-pressed={tab === id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}><Icon size={18} />{label}</button>)}</div><section className="empty-state panel" aria-live="polite"><div className="empty-icon"><LockKeyhole size={30} strokeWidth={1.5} /></div><h2>讓準備，成為看得見的累積。</h2><p>{current.text}</p><p className="muted small">登入功能尚未串接，目前沒有個人保存紀錄。</p><button className="button primary" onClick={requestSignIn}><LogIn size={17} />了解登入功能</button></section></>
}
