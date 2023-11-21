import React from 'react'
import AppProvider from './AppProvider'
import ChildrenOne from './ChildrenOne'
import ChildrenTwo from './ChildrenTwo'

const Principal = () => {
  return (
    <AppProvider>
      <ChildrenOne />
      <ChildrenTwo />
    </AppProvider>
  )
}

export default Principal