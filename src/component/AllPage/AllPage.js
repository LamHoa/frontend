import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './AboutPage/AboutPage'
import HomePage from './HomePage/HomePage'

const AllPage = (props) => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<HomePage {...props} search_query={props.search_query} setsearch_query={props.setsearch_query} /> }></Route>
        <Route path="/about" element={<AboutPage {...props} /> }></Route>
      </Routes>
    </>
  )
}

export default AllPage