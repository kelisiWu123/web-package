import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, IconButton, Typography, Box } from '@mui/material'
import { Language as WebIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Website } from '../types'

const WebsiteList: React.FC = () => {
  const websites = useSelector((state: RootState) => state.websites.items)
  const searchKeyword = useSelector((state: RootState) => state.search.keyword)
  const selectedCategory = useSelector((state: RootState) => state.search.category)

  const filteredWebsites = websites.filter((website: Website) => {
    const matchesKeyword = website.name.toLowerCase().includes(searchKeyword.toLowerCase()) || website.description.toLowerCase().includes(searchKeyword.toLowerCase())
    const matchesCategory = !selectedCategory || website.category === selectedCategory
    return matchesKeyword && matchesCategory
  })

  const handleWebsiteClick = (url: string) => {
    chrome.tabs.create({ url })
  }

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="subtitle1" sx={{ mb: 1, px: 1 }}>
        网站列表 ({filteredWebsites.length})
      </Typography>
      <List dense sx={{ flex: 1, overflow: 'auto', pt: 0 }}>
        {filteredWebsites.map((website: Website) => (
          <ListItem
            key={website.id}
            button
            onClick={() => handleWebsiteClick(website.url)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
            secondaryAction={
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton edge="end" size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton edge="end" size="small">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            }
          >
            <ListItemIcon>
              <WebIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={website.name}
              secondary={website.description}
              primaryTypographyProps={{
                sx: { fontWeight: 500 },
              }}
              secondaryTypographyProps={{
                noWrap: true,
                sx: { maxWidth: '250px' },
              }}
            />
          </ListItem>
        ))}
        {filteredWebsites.length === 0 && <Box sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>暂无网站</Box>}
      </List>
    </Box>
  )
}

export default WebsiteList
