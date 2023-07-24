import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Project from './Project'
import Employee from './Employee'
import Expansion from './Expansion'
import DailyUpdate from './DailyUpdate'
import Title from "./Title"
import SinglePage from './SinglePage'
import Home from './Home'
import EditTitle from './EditTitle'

const MainRoutes = () => {

    return (
        <>
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='/' element={<Project />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='/expansion' element={<Expansion />} />
                <Route path='/daily' element={<DailyUpdate />} />
                <Route path='/title' element={<Title />} />
                <Route path='/edit/:id' element={<EditTitle />} />
                <Route path='/single/:id' element={<SinglePage />} />
            </Routes>

        </>
    )
}

export default MainRoutes
