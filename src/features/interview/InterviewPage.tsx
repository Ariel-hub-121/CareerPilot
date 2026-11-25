import { useState } from 'react'
import { Mic, Clock3, FilePenLine, ShieldCheck } from 'lucide-react'
import { PageHeading } from '../../shared/PageHeading'
import type { InterviewDuration } from '../../types/domain'

// F3 owner: Ariel. This is the settings shell; recording and model calls are not implemented.
export function InterviewPage() {
  const [duration, setDuration] = useState<InterviewDuration>(120)
  return <><PageHeading eyebrow="PRACTICE YOUR STORY" title="模擬面試" description="給自己一點練習的空間，把做過的事，說成清楚而具體的故事。" />
    <div className="interview-grid"><section className="panel interview-settings"><span className="pill subtle">介面預覽 · 功能準備中</span><h2>準備一回合練習</h2><p className="muted">先選擇適合自己的回答時間。</p><fieldset className="duration-field"><legend><Clock3 size={17} />回答時間</legend><div className="segmented">{([60, 120] as const).map(seconds => <button key={seconds} type="button" aria-pressed={duration === seconds} className={duration === seconds ? 'selected' : ''} onClick={() => setDuration(seconds)}>{seconds} 秒</button>)}</div></fieldset><div className="question-preview"><span className="eyebrow">YOUR QUESTION</span><h3>下一題，練習說出你的經驗。</h3><p>題型選擇、隨機抽題與評估規準將在下一階段加入。</p></div><button className="button primary wide" disabled><Mic size={17} />錄音功能準備中</button><p className="small muted">這個階段不會要求麥克風權限或上傳音檔。</p></section>
    <section className="panel interview-stage"><div className="recording-orbit"><Mic size={40} strokeWidth={1.3} /></div><div className="timer">{duration === 120 ? '02' : '01'}<span>:</span>00</div><p className="muted">你的練習，從這裡開始</p><div className="waveform" aria-hidden="true">{[12, 22, 17, 30, 42, 24, 48, 34, 18, 38, 52, 28, 42, 23, 16, 31, 19, 11].map((height, index) => <i key={index} style={{ height }} />)}</div><span className="pill subtle">尚未開始錄音</span></section></div>
    <div className="info-grid"><section className="info-card"><FilePenLine size={22} /><div><h3>先確認逐字稿，再取得回饋</h3><p>未來可校正語音辨識內容，再檢查回答的證據與結構。</p></div></section><section className="info-card"><ShieldCheck size={22} /><div><h3>錄音保存，由你決定</h3><p>保存選項預設關閉；同意後，才會上傳個人音檔。</p></div></section></div>
  </>
}
