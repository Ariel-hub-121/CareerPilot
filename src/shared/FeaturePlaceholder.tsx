import type { LucideIcon } from 'lucide-react'
import { Construction } from 'lucide-react'

export function FeaturePlaceholder({ icon: Icon, title, description, steps }: { icon: LucideIcon; title: string; description: string; steps: string[] }) {
  return <>
    <div className="process-strip">{steps.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</div>)}</div>
    <section className="empty-state panel"><div className="empty-icon"><Icon size={32} strokeWidth={1.5} /></div>
      <span className="pill subtle"><Construction size={14} />功能準備中</span>
      <h2>{title}</h2><p>{description}</p>
      <p className="muted small">頁面入口已就緒，完整流程將在下一階段加入。</p>
    </section>
  </>
}
