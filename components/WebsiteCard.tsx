import React from 'react'
import { Card, CardContent, Typography, IconButton, Tooltip, Box } from '@mui/material'
import { Edit as EditIcon, Delete as DeleteIcon, Launch as LaunchIcon } from '@mui/icons-material'
import { Website } from '../types'

interface WebsiteCardProps {
  website: Website
  onEdit: (website: Website) => void
  onDelete: (id: string) => void
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ website, onEdit, onDelete }) => {
  const handleVisit = () => {
    window.open(website.url, '_blank')
  }

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        '&:hover': {
          boxShadow: 2,
          bgcolor: 'action.hover',
        },
      }}
    >
      <Box sx={{ flexGrow: 1, minWidth: 0, mr: 1 }}>
        <Typography
          variant="subtitle1"
          component="div"
          noWrap
          sx={{
            fontWeight: 500,
            cursor: 'pointer',
            '&:hover': { color: 'primary.main' },
          }}
          onClick={handleVisit}
        >
          {website.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            fontSize: '0.75rem',
          }}
        >
          {website.description}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 0.5, flexShrink: 0 }}>
        <Tooltip title="访问网站">
          <IconButton size="small" onClick={handleVisit}>
            <LaunchIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="编辑">
          <IconButton size="small" onClick={() => onEdit(website)}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="删除">
          <IconButton size="small" onClick={() => onDelete(website.id)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  )
}

export default WebsiteCard
