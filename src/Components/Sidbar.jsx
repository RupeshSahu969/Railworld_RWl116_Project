import React from 'react'
import { Link } from 'react-router-dom'
import MainRoutes from '../Pages/MainRoutes'

const Sidbar = () => {

    return (
        <>
            <div className="container-fluid  mt-10" style={{marginTop:"50px"}}>
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 ">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-black min-vh-100">
                            <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <i className="bi bi-0-circle-fill"></i>  <span className="fs-5 d-none d-sm-inline">Menu</span>
                            </Link>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link align-middle px-0">
                                        <i className="bi bi-0-circle-fill"></i> <span className="ms-1 d-none d-sm-inline">Project</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/employee" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Employee</span></Link>
                                </li>
                                <li>
                                    <Link to="/expansion" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">expansion</span> </Link>
                                </li>
                                <li>
                                    <Link to="/daily" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">UpDate</span> </Link>
                                </li>
                                <li>
                                    <Link to="/title" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Titles</span> </Link>
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
