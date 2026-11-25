import { BriefcaseBusiness } from 'lucide-react'
import { PageHeading } from '../../shared/PageHeading'
import { FeaturePlaceholder } from '../../shared/FeaturePlaceholder'

// F2 owner: teammate. No fabricated listings or match scores in the scaffold.
export function JobsPage() {
  return <><PageHeading eyebrow="FIND YOUR DIRECTION" title="實習機會" description="理解職缺與你的連結，也看清申請前需要補足的條件。" /><FeaturePlaceholder icon={BriefcaseBusiness} title="找到機會，也找到準備的方向。" description="這裡將依照你確認的摘要與實習條件，呈現職缺、推薦依據、待確認條件與準備缺口。" steps={['設定實習條件', '查看媒合依據', '收藏與準備']} /></>
}
