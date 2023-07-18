import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Project from './Project'
import Employee from './Employee'
import Expansion from './Expansion'
import DailyUpdate from './DailyUpdate'

const MainRoutes = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Project />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='/expansion' element={<Expansion />} />
                <Route path='/daily' element={<DailyUpdate />} />

            </Routes>

        </>
    )
}

export default MainRoutes
