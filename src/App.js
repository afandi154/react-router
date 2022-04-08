import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Lists from './pages/Lists'

function App() {
  const [data, setData] = useState(null)
  const [detail, setDetail] = useState(null)
  
  return (
    <div>
      <Navbar callback={(data) => setData(data)}/>
      <Routes>
        <Route path='/' element={<Home callback={(data) => setData(data)}/>}/>
        <Route path='/android' element={
          <Lists device="Android" data={data} callback={data => setDetail(data)}/> 
        }/>
        <Route path='/android/:deviceName' element={<Details data={detail}/>}/>
        <Route path='/iphone' element={
          <Lists device="iPhone" data={data} callback={data => setDetail(data)}/>} 
        />
        <Route path='/iphone/:deviceName' element={<Details data={detail}/>}/>
        <Route path='/laptop' element={
          <Lists device="Laptop" data={data} callback={data => setDetail(data)}/>} 
        />
        <Route path='/laptop/:deviceName' element={<Details data={detail}/>}/>    
        <Route path='/tablet' element={
          <Lists device="Tablet" data={data} callback={data => setDetail(data)}/>} 
        />
        <Route path='/tablet/:deviceName' element={<Details data={detail}/>}/>
        <Route path='*' element={<Navigate replace to="/"/>} />
      </Routes>
    </div>
  )
}

export default App
