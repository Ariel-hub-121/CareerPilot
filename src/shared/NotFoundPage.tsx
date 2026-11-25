import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

export function NotFoundPage() {
  return <section className="empty-state panel"><div className="empty-icon"><Compass size={32} /></div><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>這個方向，還沒有頁面。</h1><p>回到總覽，繼續準備你的下一步。</p><Link to="/" className="button primary">回到準備總覽</Link></section>
}
