import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import CountryDetails from './Pages/CountryDetails'
import CountryList from './Pages/CountryList'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<CountryList/>}></Route>
      <Route path='/country/:name' element={<CountryDetails/>}></Route>
      <Route path='*' element={<Navigate to="/home"/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
