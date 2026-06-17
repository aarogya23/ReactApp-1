import React from 'react'
import { Outlet } from 'react-router-dom'
import Revision from './Revision'

const RevisionLayout = () => {
  return (
    <>
      <Revision />
      <Outlet />
    </>
  )
}

export default RevisionLayout