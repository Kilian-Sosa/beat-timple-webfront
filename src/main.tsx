import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/router.tsx'
import { SongsProvider } from './context/songs/SongsProvider.tsx'
import './styles/common/settings.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SongsProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </SongsProvider>
  </React.StrictMode>
)
