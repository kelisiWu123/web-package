import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Box, Button, Alert, Snackbar, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { RootState } from '../store'
import { addWebsite, removeWebsite, updateWebsite } from '../store/websitesSlice'
import WebsiteCard from './WebsiteCard'
import WebsiteForm from './WebsiteForm'
import { Website } from '../types'

const WebsiteList: React.FC = () => {
  const dispatch = useDispatch()
  const websites = useSelector((state: RootState) => state.websites.items)
  const categories = useSelector((state: RootState) => state.categories.items)
  const searchParams = useSelector((state: RootState) => state.search)

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedWebsite, setSelectedWebsite] = useState<Website | undefined>()
  const [snackbar, setSnackbar] = useState<{
    open: boolean
    message: string
    severity: 'success' | 'error'
  }>({
    open: false,
    message: '',
    severity: 'success',
  })

  // 过滤网站列表
  const filteredWebsites = websites.filter((website: Website) => {
    const matchesKeyword = website.name.toLowerCase().includes(searchParams.keyword.toLowerCase()) || website.description.toLowerCase().includes(searchParams.keyword.toLowerCase())
    const matchesCategory = !searchParams.category || website.category === searchParams.category
    return matchesKeyword && matchesCategory
  })

  const handleAddClick = () => {
    setSelectedWebsite(undefined)
    setIsFormOpen(true)
  }

  const handleEditClick = (website: Website) => {
    setSelectedWebsite(website)
    setIsFormOpen(true)
  }

  const handleDeleteClick = (id: string) => {
    try {
      dispatch(removeWebsite(id))
      setSnackbar({
        open: true,
        message: '删除成功',
        severity: 'success',
      })
    } catch (error) {
      setSnackbar({
        open: true,
        message: '删除失败',
        severity: 'error',
      })
    }
  }

  const handleFormSubmit = (website: Website) => {
    try {
      if (selectedWebsite) {
        dispatch(updateWebsite(website))
        setSnackbar({
          open: true,
          message: '更新成功',
          severity: 'success',
        })
      } else {
        dispatch(addWebsite(website))
        setSnackbar({
          open: true,
          message: '添加成功',
          severity: 'success',
        })
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: selectedWebsite ? '更新失败' : '添加失败',
        severity: 'error',
      })
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <Box sx={{ p: 1 }}>
      <Box sx={{ mb: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="small" variant="contained" startIcon={<AddIcon />} onClick={handleAddClick}>
          添加网站
        </Button>
      </Box>

      <Stack spacing={1}>
        {filteredWebsites.map((website: Website) => (
          <WebsiteCard key={website.id} website={website} onEdit={handleEditClick} onDelete={handleDeleteClick} />
        ))}
      </Stack>

      <WebsiteForm open={isFormOpen} onClose={() => setIsFormOpen(false)} onSubmit={handleFormSubmit} website={selectedWebsite} categories={categories} />

      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default WebsiteList
