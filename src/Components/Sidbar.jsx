import React from 'react'
import { Link } from 'react-router-dom'
import MainRoutes from '../Pages/MainRoutes'

const Sidbar = () => {

    return (
        <>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-black min-vh-100">
                            <Link to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <i class="bi bi-0-circle-fill"></i>  <span class="fs-5 d-none d-sm-inline">Menu</span>
                            </Link>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link align-middle px-0">
                                        <i class="bi bi-0-circle-fill"></i> <span class="ms-1 d-none d-sm-inline">Project</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/employee" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Employee</span></Link>
                                </li>
                                <li>
                                    <Link to="/expansion" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">expansion</span> </Link>
                                </li>
                                <li>
                                    <Link to="/daily" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">UpDate</span> </Link>
                                </li>
                                <li>
                                    <Link to="/title" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Titles</span> </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div class="col py-3">
                        <MainRoutes />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidbar
