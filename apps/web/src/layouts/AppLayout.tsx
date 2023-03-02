import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}

export default AppLayout
