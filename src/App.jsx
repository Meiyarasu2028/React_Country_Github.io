import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CountryDetails from './Pages/CountryDetails'
import CountryList from './Pages/CountryList'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CountryList/>}></Route>
      <Route path='/country/:name' element={<CountryDetails/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
