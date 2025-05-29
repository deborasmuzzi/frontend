import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes.jsx'
import GlobalStyles from './styles/GlobalStyles.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false }},
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Routes/>
    <GlobalStyles/>
    </QueryClientProvider>
    <ToastContainer
    position='bottom-right'
    autoClose={2000}
    limit={1}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}
    theme='dark'    
    />
  </React.StrictMode>
)