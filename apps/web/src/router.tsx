import { Navigate, Route, Routes } from 'react-router-dom'

import AppLayout from '@/layouts/AppLayout'
import HomePage from '@/pages/Home'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
export default AppRouter
