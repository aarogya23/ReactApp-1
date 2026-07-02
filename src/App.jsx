import React, { createContext, useEffect, useState } from 'react'
import MyRouter from './MyRouter'
import { MyContext, MyContextProvider } from './hooks/MyContext'
import './App.css';
import { Provider } from 'react-redux';
import myStore, { persistor } from './redux/myStore';
export const MyThemeContext = createContext()

// Custom PersistGate to fix React 19 + Vite compatibility issue
const PersistGate = ({ persistor, children }) => {
  const [isReady, setIsReady] = useState(persistor.getState().bootstrapped);

  useEffect(() => {
    const unsubscribe = persistor.subscribe(() => {
      setIsReady(persistor.getState().bootstrapped);
    });
    return unsubscribe;
  }, [persistor]);

  return isReady ? children : null;
};

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
      <PersistGate loading={null} persistor={persistor}>
          <MyThemeContext.Provider value={{theme, setTheme}}>
          <MyContextProvider>
            <MyRouter />
          </MyContextProvider>
          </MyThemeContext.Provider>
      </PersistGate>
    </Provider>
    </>
  )
}

export default App
