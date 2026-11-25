import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { X } from 'lucide-react'

export function NoticeDialog({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const element = dialog.current
    if (open && !element?.open) element?.showModal()
    if (!open && element?.open) element.close()
  }, [open])
  return <dialog ref={dialog} className="notice-dialog" onCancel={onClose} onClose={onClose} aria-labelledby="notice-title" onClick={event => { if (event.target === event.currentTarget) onClose() }}>
    <button className="icon-button dialog-close" aria-label="關閉視窗" onClick={onClose}><X size={20} /></button>
    <div className="eyebrow">CAREERPILOT</div><h2 id="notice-title">{title}</h2>
    <div className="dialog-copy">{children}</div>
    <button className="button primary" onClick={onClose}>繼續瀏覽</button>
  </dialog>
}
