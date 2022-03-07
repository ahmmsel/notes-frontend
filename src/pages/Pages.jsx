import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"

import Layout from '../components/Layout'
import HomePage from "./HomePage"
import RegisterPage from "./RegisterPage"
import LoginPage from "./LoginPage"
import MePage from './MePage'
import NotePage from "./NotePage"
import CreateNotePage from './CreateNotePage'
import EditNotePage from './EditNotePage'
import NotFoundPage from './NotFoundPage'
import { useSelector } from 'react-redux'

export default function Pages() { 
  const { user } = useSelector(state => state.auth) 

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/me" /> : <HomePage />} />
      <Route path="/register" element={user ? <Navigate to="/me" /> : <RegisterPage />} />
      <Route path="/login" element={user ? <Navigate to="/me" /> : <LoginPage />} />
      <Route path="/me" element={user ? <Layout /> : <Navigate to="/" />}>
        <Route index element={<MePage />} />
        <Route path="/me/create-note" element={user ? <CreateNotePage /> : <Navigate to="/" />} />
        <Route path="/me/n/:noteId" element={user ? <NotePage /> : <Navigate to="/" />} />
        <Route path="/me/n/:noteId/edit-note" element={user ? <EditNotePage /> : <Navigate to="/" />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
