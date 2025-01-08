import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material'
import { Settings as SettingsIcon, Add as AddIcon, ImportExport as ImportExportIcon } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setTheme } from '../store/settingsSlice'

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const theme = useSelector((state: RootState) => state.settings.theme)
  const dispatch = useDispatch()

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleThemeChange = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
    handleClose()
  }

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      }}
    >
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: 'text.primary',
            fontWeight: 600,
          }}
        >
          React Dev Nav
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small" color="inherit" sx={{ color: 'text.secondary' }}>
            <ImportExportIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" color="inherit" sx={{ color: 'text.secondary' }}>
            <AddIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" color="inherit" onClick={handleSettingsClick} sx={{ color: 'text.secondary' }}>
            <SettingsIcon fontSize="small" />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleThemeChange}>切换{theme === 'light' ? '深色' : '浅色'}主题</MenuItem>
          <MenuItem onClick={handleClose}>导入/导出</MenuItem>
          <MenuItem onClick={handleClose}>设置</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
