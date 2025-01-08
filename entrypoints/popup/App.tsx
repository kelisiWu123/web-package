import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { store } from '../../store'
import WebsiteList from '../../components/WebsiteList'
import SearchBar from '../../components/SearchBar'
import CategoryList from '../../components/CategoryList'
import Header from '../../components/Header'

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            padding: 0,
            minWidth: '600px',
            minHeight: '400px',
            overflow: 'auto',
          },
        },
      },
    },
  })

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
          }}
        >
          <Header />
          <Box
            sx={{
              p: 2,
              display: 'flex',
              gap: 2,
              flex: 1,
              overflow: 'auto',
            }}
          >
            <Box
              sx={{
                width: '200px',
                overflow: 'auto',
                flexShrink: 0,
              }}
            >
              <CategoryList />
            </Box>
            <Box
              sx={{
                flex: 1,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <SearchBar />
              <Box sx={{ flex: 1, overflow: 'auto', mt: 1 }}>
                <WebsiteList />
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  )
}

export default App
