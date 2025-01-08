import React from 'react'
import { TextField, InputAdornment } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setKeyword } from '../store/searchSlice'

const SearchBar: React.FC = () => {
  const dispatch = useDispatch()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setKeyword(event.target.value))
  }

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="搜索网站..."
      size="small"
      onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{ mb: 2 }}
    />
  )
}

export default SearchBar
