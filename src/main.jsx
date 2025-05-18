import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes.jsx'
import {GlobalStyles} from './styles/GlobalStyles.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false }},
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}/>
    <Routes/>
    <GlobalStyles/>
  </React.StrictMode>
)