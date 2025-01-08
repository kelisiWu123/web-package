import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material'
import { Website, Category } from '../types'

interface WebsiteFormProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: Website) => void
  website?: Website
  categories: Category[]
}

const WebsiteForm: React.FC<WebsiteFormProps> = ({ open, onClose, onSubmit, website, categories }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Website>({
    defaultValues: website || {
      id: String(Date.now()),
      name: '',
      url: '',
      description: '',
      category: '',
      timestamp: Date.now(),
    },
  })

  React.useEffect(() => {
    if (open) {
      reset(
        website || {
          id: String(Date.now()),
          name: '',
          url: '',
          description: '',
          category: '',
          timestamp: Date.now(),
        }
      )
    }
  }, [open, website, reset])

  const handleFormSubmit = (data: Website) => {
    onSubmit(data)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{website ? '编辑网站' : '添加网站'}</DialogTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Controller
              name="name"
              control={control}
              rules={{ required: '请输入网站名称' }}
              render={({ field }) => <TextField {...field} label="网站名称" error={!!errors.name} helperText={errors.name?.message} fullWidth />}
            />
            <Controller
              name="url"
              control={control}
              rules={{
                required: '请输入网站地址',
                pattern: {
                  value: /^https?:\/\/.+/,
                  message: '请输入有效的网站地址',
                },
              }}
              render={({ field }) => <TextField {...field} label="网站地址" error={!!errors.url} helperText={errors.url?.message} fullWidth />}
            />
            <Controller
              name="description"
              control={control}
              rules={{ required: '请输入网站描述' }}
              render={({ field }) => <TextField {...field} label="网站描述" multiline rows={3} error={!!errors.description} helperText={errors.description?.message} fullWidth />}
            />
            <Controller
              name="category"
              control={control}
              rules={{ required: '请选择分类' }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.category}>
                  <InputLabel>分类</InputLabel>
                  <Select {...field} label="分类">
                    {categories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>取消</Button>
          <Button type="submit" variant="contained">
            {website ? '保存' : '添加'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default WebsiteForm
