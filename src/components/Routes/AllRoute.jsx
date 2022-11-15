import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Resume from './Resume'

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/resume" element={<Resume />} />
    </Routes>
  )
}

export default AllRoute
