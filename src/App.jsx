import React, { createContext, useEffect, useState } from 'react'
import MyRouter from './MyRouter'
import { MyContext, MyContextProvider } from './hooks/MyContext'
import './App.css';
import { Provider } from 'react-redux';
import myStore from './redux/myStore';
export const MyThemeContext = createContext()


const App = () => {

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    return localStorage.getItem('trinetra-theme') || 'dark'
  })

  useEffect(() => {
    localStorage.setItem('trinetra-theme', theme)
    document.body.classList.remove('theme-dark', 'theme-light')
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light')
  }, [theme])

  return (
    <>
    <Provider store = {myStore}>
    <MyThemeContext.Provider value={{theme, setTheme}}>
    <MyContextProvider>
      <MyRouter />
    </MyContextProvider>
    </MyThemeContext.Provider>
    </Provider>
    </>
  )
}

export default App
