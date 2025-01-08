import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box } from '@mui/material'
import { Category } from '../types'

interface CategoryFormProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: Category) => void
  category?: Category
}

const CategoryForm: React.FC<CategoryFormProps> = ({ open, onClose, onSubmit, category }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Category>({
    defaultValues: category || {
      id: String(Date.now()),
      name: '',
      description: '',
    },
  })

  React.useEffect(() => {
    if (open) {
      reset(
        category || {
          id: String(Date.now()),
          name: '',
          description: '',
        }
      )
    }
  }, [open, category, reset])

  const handleFormSubmit = (data: Category) => {
    onSubmit(data)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{category ? '编辑分类' : '添加分类'}</DialogTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Controller
              name="name"
              control={control}
              rules={{ required: '请输入分类名称' }}
              render={({ field }) => <TextField {...field} label="分类名称" size="small" error={!!errors.name} helperText={errors.name?.message} fullWidth />}
            />
            <Controller
              name="description"
              control={control}
              rules={{ required: '请输入分类描述' }}
              render={({ field }) => <TextField {...field} label="分类描述" size="small" multiline rows={2} error={!!errors.description} helperText={errors.description?.message} fullWidth />}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button size="small" onClick={onClose}>
            取消
          </Button>
          <Button size="small" type="submit" variant="contained">
            {category ? '保存' : '添加'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default CategoryForm
