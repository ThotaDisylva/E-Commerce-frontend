import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserInfoContextProvider } from './context/UserInfoContext.jsx'
import { Provider } from "react-redux";
import store from './hooks/UseStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <UserInfoContextProvider>
      <Provider store={store}>
        <App />
        </Provider>
      </UserInfoContextProvider>
    </BrowserRouter>
)
