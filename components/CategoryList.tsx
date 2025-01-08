import React, { useState } from 'react'
import { List, ListItem, ListItemText, ListItemIcon, IconButton, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import { Folder as FolderIcon, Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, DragIndicator as DragIcon } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { RootState } from '../store'
import { Category } from '../types'
import { setCategory } from '../store/searchSlice'
import { addCategory, removeCategory, updateCategory, reorderCategories } from '../store/categoriesSlice'
import CategoryForm from './CategoryForm'

const CategoryList: React.FC = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state: RootState) => state.categories.items)
  const selectedCategory = useSelector((state: RootState) => state.search.category)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Category | undefined>()
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
  const [categoryToDelete, setCategoryToDelete] = useState<string>('')

  const handleCategoryClick = (categoryId: string) => {
    dispatch(setCategory(categoryId === selectedCategory ? undefined : categoryId))
  }

  const handleAddClick = () => {
    setSelectedItem(undefined)
    setIsFormOpen(true)
  }

  const handleEditClick = (category: Category, event: React.MouseEvent) => {
    event.stopPropagation()
    setSelectedItem(category)
    setIsFormOpen(true)
  }

  const handleDeleteClick = (categoryId: string, event: React.MouseEvent) => {
    event.stopPropagation()
    setCategoryToDelete(categoryId)
    setDeleteConfirmOpen(true)
  }

  const handleFormSubmit = (category: Category) => {
    if (selectedItem) {
      dispatch(updateCategory(category))
    } else {
      dispatch(addCategory(category))
    }
  }

  const handleDeleteConfirm = () => {
    dispatch(removeCategory(categoryToDelete))
    if (selectedCategory === categoryToDelete) {
      dispatch(setCategory(undefined))
    }
    setDeleteConfirmOpen(false)
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const sourceIndex = result.source.index
    const destinationIndex = result.destination.index

    if (sourceIndex === destinationIndex) return

    const reorderedCategories = Array.from(categories)
    const [removed] = reorderedCategories.splice(sourceIndex, 1)
    reorderedCategories.splice(destinationIndex, 0, removed)

    dispatch(reorderCategories(reorderedCategories))
  }

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5, px: 1 }}>
        <Typography variant="body2" sx={{ flexGrow: 1, fontWeight: 500, fontSize: '0.85rem' }}>
          分类
        </Typography>
        <IconButton size="small" sx={{ mr: -0.5, width: 24, height: 24 }} onClick={handleAddClick}>
          <AddIcon sx={{ fontSize: '1rem' }} />
        </IconButton>
      </Box>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="category-list">
          {(provided) => (
            <List dense disablePadding ref={provided.innerRef} {...provided.droppableProps} sx={{ flex: 1, overflow: 'auto' }}>
              {categories.map((category: Category, index: number) => (
                <Draggable key={category.id} draggableId={category.id} index={index}>
                  {(provided, snapshot) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      button
                      selected={category.id === selectedCategory}
                      onClick={() => handleCategoryClick(category.id)}
                      sx={{
                        minHeight: 32,
                        py: 0.5,
                        px: 1,
                        borderRadius: 1,
                        mx: 0.5,
                        backgroundColor: snapshot.isDragging ? 'action.hover' : 'transparent',
                        '&.Mui-selected': {
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                          '&:hover': {
                            backgroundColor: 'primary.dark',
                          },
                        },
                      }}
                      secondaryAction={
                        <Box
                          sx={{
                            display: 'flex',
                            gap: 0.25,
                            opacity: 0,
                            transition: 'opacity 0.2s',
                            '.MuiListItem-root:hover &': { opacity: 1 },
                          }}
                        >
                          <IconButton
                            edge="end"
                            size="small"
                            onClick={(e) => handleEditClick(category, e)}
                            sx={{
                              color: 'inherit',
                              width: 20,
                              height: 20,
                              '& .MuiSvgIcon-root': {
                                fontSize: '0.875rem',
                              },
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            size="small"
                            onClick={(e) => handleDeleteClick(category.id, e)}
                            sx={{
                              color: 'inherit',
                              width: 20,
                              height: 20,
                              '& .MuiSvgIcon-root': {
                                fontSize: '0.875rem',
                              },
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      }
                    >
                      <Box
                        {...provided.dragHandleProps}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mr: 1,
                          opacity: 0.5,
                          cursor: 'grab',
                          '&:hover': { opacity: 0.8 },
                        }}
                      >
                        <DragIcon sx={{ fontSize: '1rem' }} />
                      </Box>
                      <ListItemIcon sx={{ color: 'inherit', minWidth: 28 }}>
                        <FolderIcon sx={{ fontSize: '1.125rem' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={category.name}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                          },
                        }}
                      />
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              {categories.length === 0 && <Box sx={{ p: 1, textAlign: 'center', color: 'text.secondary', fontSize: '0.75rem' }}>暂无分类</Box>}
            </List>
          )}
        </Droppable>
      </DragDropContext>

      <CategoryForm open={isFormOpen} onClose={() => setIsFormOpen(false)} onSubmit={handleFormSubmit} category={selectedItem} />

      <Dialog open={deleteConfirmOpen} onClose={() => setDeleteConfirmOpen(false)}>
        <DialogTitle>确认删除</DialogTitle>
        <DialogContent>
          <Typography variant="body2">确定要删除这个分类吗？该分类下的网站将不会被删除。</Typography>
        </DialogContent>
        <DialogActions>
          <Button size="small" onClick={() => setDeleteConfirmOpen(false)}>
            取消
          </Button>
          <Button size="small" color="error" onClick={handleDeleteConfirm}>
            删除
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default CategoryList
