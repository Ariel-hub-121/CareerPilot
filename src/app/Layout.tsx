import { useState } from 'react'
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { Compass, LogIn, Menu, X, Sprout, CircleHelp } from 'lucide-react'
import { navigation } from './navigation'
import { useAuth } from '../features/auth/AuthProvider'
import { NoticeDialog } from '../shared/NoticeDialog'
import { appConfig } from '../config/app'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const location = useLocation()
  const { requestSignIn } = useAuth()
  const currentPage = navigation.find(item => item.to === '/' ? location.pathname === '/' : location.pathname === item.to || location.pathname.startsWith(`${item.to}/`))
  return <div className="app-shell">
    <a href="#main-content" className="skip-link">跳至主要內容</a>
    {menuOpen && <button className="sidebar-overlay" aria-label="關閉導覽選單" onClick={() => setMenuOpen(false)} />}
    <aside className={`sidebar ${menuOpen ? 'is-open' : ''}`}>
      <Link to="/" className="brand" onClick={() => setMenuOpen(false)}><span className="brand-mark"><Compass size={25} strokeWidth={1.8} /></span><span>CareerPilot<small>你的實習準備夥伴</small></span></Link>
      <button className="icon-button mobile-close" aria-label="關閉導覽" onClick={() => setMenuOpen(false)}><X /></button>
      <div className="nav-label">WORKSPACE</div>
      <nav aria-label="主要導覽">{navigation.map(({ to, label, english, icon: Icon }) => <NavLink to={to} key={to} end={to === '/'} onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><Icon size={20} strokeWidth={1.7} /><span>{label}<small>{english}</small></span></NavLink>)}</nav>
      <div className="sidebar-bottom"><div className="sidebar-note"><Sprout size={24} strokeWidth={1.5} /><h3>每一步，都算數。</h3><p>把做過的事整理好，<br />就是準備的開始。</p></div><button className="help-button" onClick={() => setHelpOpen(true)}><CircleHelp size={18} />關於 CareerPilot</button><div className="sidebar-credit">Microsoft × NCU<br />AI Innovation Demo Day</div></div>
    </aside>
    <div className="main-shell">
      <header className="topbar"><div className="topbar-left"><button className="icon-button mobile-menu" aria-label="開啟導覽" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={22} /></button><span className="breadcrumb">工作空間<span>/</span><strong>{currentPage?.label ?? '找不到頁面'}</strong></span></div><div className="topbar-actions"><span className="scaffold-tag">初始骨架預覽</span><button className="button login-button" onClick={requestSignIn}><LogIn size={16} />Google 登入</button></div></header>
      <main id="main-content" className="main-content" key={location.pathname}><Outlet /></main>
      <footer className="footer"><span>CareerPilot · 從探索，走向下一步。</span><span>合成資料模式 · AI 與登入尚未串接</span></footer>
    </div>
    <NoticeDialog open={helpOpen} onClose={() => setHelpOpen(false)} title="從你的經驗，找到下一步">
      <p>CareerPilot 協助準備第一份實習的大學生，整理經驗、理解職缺條件，並練習說明自己的貢獻。</p><p>目前為網站骨架，三大功能與個人紀錄尚待實作。未連接 Google 登入、Azure OpenAI 或 Azure Speech。</p><p className="small muted">資料：{appConfig.modes.data_mode} · 分析設定：{appConfig.modes.analysis_mode} · 身分設定：{appConfig.modes.auth_mode}</p>
    </NoticeDialog>
  </div>
}
