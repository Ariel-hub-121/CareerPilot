import { Sparkles } from 'lucide-react'
import { PageHeading } from '../../shared/PageHeading'
import { FeaturePlaceholder } from '../../shared/FeaturePlaceholder'

// F1 owner: teammate. Keep feature-specific components and services in this folder.
export function ExplorePage() {
  return <><PageHeading eyebrow="DISCOVER YOURSELF" title="探索自己" description="從你的真實經驗出發，找到可以說明的貢獻、偏好與下一步。" /><FeaturePlaceholder icon={Sparkles} title="每一段經驗，都有值得整理的地方。" description="接下來，你可以透過引導問答整理經驗，確認摘要，再建立探索報告與履歷素材。" steps={['引導問答', '確認個人摘要', '探索報告與履歷素材']} /></>
}
