import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, IconButton, Typography, Box } from '@mui/material'
import { Folder as FolderIcon, Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { Category } from '../types'
import { setCategory } from '../store/searchSlice'

const CategoryList: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.items)
  const selectedCategory = useSelector((state: RootState) => state.search.category)
  const dispatch = useDispatch()

  const handleCategoryClick = (categoryId: string) => {
    dispatch(setCategory(categoryId === selectedCategory ? undefined : categoryId))
  }

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, px: 1 }}>
        <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
          分类
        </Typography>
        <IconButton size="small" sx={{ mr: -1 }}>
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
      <List dense sx={{ flex: 1, overflow: 'auto', pt: 0 }}>
        {categories.map((category: Category) => (
          <ListItem
            key={category.id}
            button
            selected={category.id === selectedCategory}
            onClick={() => handleCategoryClick(category.id)}
            sx={{
              borderRadius: 1,
              mx: 0.5,
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
            }}
            secondaryAction={
              <Box sx={{ display: 'flex', gap: 0.5, opacity: 0, transition: 'opacity 0.2s', '.MuiListItem-root:hover &': { opacity: 1 } }}>
                <IconButton edge="end" size="small" sx={{ color: 'inherit' }}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton edge="end" size="small" sx={{ color: 'inherit' }}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            }
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>
              <FolderIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={category.name}
              primaryTypographyProps={{
                sx: { fontWeight: 500 },
              }}
            />
          </ListItem>
        ))}
        {categories.length === 0 && <Box sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>暂无分类</Box>}
      </List>
    </Box>
  )
}

export default CategoryList
