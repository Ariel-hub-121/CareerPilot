import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { HomePage } from '../features/home/HomePage'
import { ExplorePage } from '../features/explore/ExplorePage'
import { JobsPage } from '../features/jobs/JobsPage'
import { InterviewPage } from '../features/interview/InterviewPage'
import { HistoryPage } from '../features/history/HistoryPage'
import { NotFoundPage } from '../shared/NotFoundPage'

export function App() {
  return <Routes><Route element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="explore/*" element={<ExplorePage />} />
    <Route path="jobs/*" element={<JobsPage />} />
    <Route path="interview/*" element={<InterviewPage />} />
    <Route path="history" element={<HistoryPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route></Routes>
}
