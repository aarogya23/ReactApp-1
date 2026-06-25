import React, { createContext, useState } from 'react'
import MyRouter from './MyRouter'
import { MyContext, MyContextProvider } from './hooks/MyContext'
export const MyThemeContext = createContext()

const App = () => {

  let [theme, setTheme] = useState('light')

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
