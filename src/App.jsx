import React, { createContext, useEffect, useState } from 'react'
import MyRouter from './MyRouter'
import { MyContext, MyContextProvider } from './hooks/MyContext'
import './App.css';
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
  }, [theme])

  return (
    <>
    <MyThemeContext.Provider value={{theme, setTheme}}>
    <MyContextProvider>
      <MyRouter />
    </MyContextProvider>
    </MyThemeContext.Provider>
    </>
  )
}

export default App
