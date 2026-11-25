import { Link } from 'react-router-dom'
import { Sparkles, BriefcaseBusiness, Mic, Check, Bookmark, FileText, Compass, Leaf } from 'lucide-react'

const features = [
  { to: '/explore', icon: Sparkles, className: 'mint', label: '探索自己', english: 'DISCOVER YOURSELF', text: '從課程、社團與專題出發，整理屬於你的經驗與亮點。', tags: ['引導問答', '探索報告', '履歷素材'], action: '開始探索' },
  { to: '/jobs', icon: BriefcaseBusiness, className: 'peach', label: '發現實習機會', english: 'FIND YOUR DIRECTION', text: '看懂職缺與你的連結，也知道申請前還能準備什麼。', tags: ['條件篩選', '推薦依據', '準備缺口'], action: '探索職缺' },
  { to: '/interview', icon: Mic, className: 'lavender', label: '練習說出你的故事', english: 'PRACTICE YOUR STORY', text: '用限時面試練習，讓你的經驗成為有條理的回答。', tags: ['限時錄音', '逐字稿校正', '具體回饋'], action: '前往練習' },
]

function JourneyIllustration() {
  return <div className="journey-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="art-star star-one">✦</div><div className="art-star star-two">✧</div><div className="art-dot" /><div className="floating-label label-experience"><FileText size={17} />你的經驗</div><div className="compass-disc"><Compass size={74} strokeWidth={1} /></div><div className="floating-label label-next"><span className="tiny-spark">✦</span>下一站，更多可能</div><span className="art-caption">YOUR JOURNEY STARTS HERE</span></div>
}

export function HomePage() {
  return <>
    <div className="welcome-row"><div><p className="eyebrow">A LITTLE PREPARATION, A NEW POSSIBILITY.</p><h1>下一步，從認識自己開始。</h1><p className="intro-copy">不必一次想清楚所有方向，先把你的第一份實習準備好。</p></div><span className="welcome-icon"><Leaf size={27} strokeWidth={1.3} /></span></div>
    <section className="hero"><div className="hero-copy"><div className="hero-kicker"><span />YOUR NEXT CHAPTER</div><h2>你做過的事，<br />比你想的更有價值。</h2><p>把零散經驗整理成亮點，找到值得探索的機會，<br className="desktop-break" />再用練習，讓表達更有方向。</p><Link className="button hero-button" to="/explore"><Sparkles size={17} />從探索自己開始</Link><span className="hero-footnote">從一段經驗開始，慢慢拼出你的方向。</span></div><JourneyIllustration /></section>
    <div className="section-heading"><div><p className="eyebrow">YOUR PREPARATION TOOLKIT</p><h2>把準備，分成三小步</h2></div><span>依照自己的步調開始</span></div>
    <div className="feature-grid">{features.map(({ to, icon: Icon, className, label, english, text, tags, action }) => <article className={`feature-card ${className}`} key={to}><span className="feature-icon"><Icon size={25} strokeWidth={1.6} /></span><p className="feature-english">{english}</p><h3>{label}</h3><p className="feature-description">{text}</p><div className="feature-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link to={to} className="feature-link">{action}<span className="link-decoration" aria-hidden="true">＋</span></Link></article>)}</div>
    <div className="bottom-grid"><section className="panel getting-started"><div className="section-heading compact"><h2>給正在起步的你</h2><span className="pill subtle">準備小提醒</span></div><div className="tips"><div><span className="tip-check"><Check size={16} /></span><p><strong>先寫下做過的事</strong><span>課堂作業或社團經驗，都能成為起點。</span></p></div><div><span className="tip-check"><Check size={16} /></span><p><strong>分清楚「會什麼」與「想學什麼」</strong><span>真實描述自己的程度，讓下一步更具體。</span></p></div></div></section><section className="journey-note"><Bookmark size={23} strokeWidth={1.5} /><h2>讓每一次準備，<br />都留下足跡。</h2><p>探索報告、收藏職缺與面試練習，<br />未來都能在這裡回顧。</p><Link to="/history">查看我的歷程</Link></section></div>
  </>
}
