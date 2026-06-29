import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiShoppingBag, FiBookOpen, FiHome, FiUser } from 'react-icons/fi'
import { SiUnrealengine } from 'react-icons/si'
import { MyThemeContext } from '../../App'

const tabs = [
  { to: '/',       label: 'Store',   Icon: FiShoppingBag },
  { to: '/second', label: 'Library', Icon: FiBookOpen    },
  { to: '/home',   label: 'Home',    Icon: FiHome        },
  { to: '#unreal', label: 'Unreal',  Icon: SiUnrealengine},
  { to: '/aboutUs',label: 'Profile', Icon: FiUser        },
]

const MobileTabBar = () => {
  const location = useLocation()

  return (
    <nav className="mobile-tab-bar" aria-label="Mobile navigation">
      {tabs.map(({ to, label, Icon }) => {
        const isActive = to === '/'
          ? location.pathname === '/'
          : location.pathname.startsWith(to) && to !== '#unreal'
        return (
          <NavLink
            key={label}
            to={to}
            className={`mob-tab ${isActive ? 'mob-tab--active' : ''}`}
            aria-label={label}
          >
            <span className="mob-tab__icon"><Icon /></span>
            <span className="mob-tab__label">{label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}

export default MobileTabBar
