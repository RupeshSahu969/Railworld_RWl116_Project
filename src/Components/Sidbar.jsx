import React from 'react'
import { Link } from 'react-router-dom'
import MainRoutes from '../Pages/MainRoutes'

const Sidbar = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap" style={{height: "100vh"}}>
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                           
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Project</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/employee" className="nav-link align-middle px-0">
                                       <span className="ms-1 d-none d-sm-inline">Employee</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="expansion" className="nav-link align-middle px-0">
                                        <span className="ms-1 d-none d-sm-inline">Expansion</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="daily" className="nav-link align-middle px-0">
                                        <span className="ms-1 d-none d-sm-inline">DailyUpDate</span>
                                    </Link>
                                </li>
                            </ul>
                            <hr />
                           
                        </div>
                    </div>
                    <div className="col py-3">
                        <MainRoutes/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidbar
