import React, { Fragment } from 'react'
import { Outlet, useLocation  } from "react-router-dom"
import AddButton from '../UI/AddButton'

import Header from './Header'

export default function Layout() {
  const location = useLocation()

  return (
    <Fragment>
      <Header />
      <Outlet />
      {location.pathname === "/me" && <AddButton />}
    </Fragment>
  )
}
