import React from 'react'
import { Link } from 'react-router-dom'
import MainRoutes from '../Pages/MainRoutes'
import Styles from "../Styles/sidbar.css"

const Sidbar = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 ">
                        <div className=" d-flex fixed-left flex-column align-items-center align-items-sm-start px-3 pt-2 text-black min-vh-100">
                            
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle px-0">
                                    <i class="fa-solid fa-house"></i> <span className="ms-1 d-none d-sm-inline">Project</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/employee" className="nav-link px-0 align-middle">
                                        <i className="fa-solid fa-house"></i> <span className="ms-1 d-none d-sm-inline">Employee</span></Link>
                                </li>
                                <li>
                                    <Link to="/expansion" className="nav-link px-0 align-middle">
                                        <i className="fa-solid fa-house"></i> <span className="ms-1 d-none d-sm-inline">expansion</span> </Link>
                                </li>
                                <li>
                                    <Link to="/daily" className="nav-link px-0 align-middle">
                                    <i class="fa-solid fa-up-long"></i> <span className="ms-1 d-none d-sm-inline">UpDate</span> </Link>
                                </li>
                                <li>
                                    <Link to="/title" className="nav-link px-0 align-middle">
                                    <i className="fa-solid fa-house"></i> <span className="ms-1 d-none d-sm-inline">Titles</span> </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="col py-3">
                        <MainRoutes />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidbar
