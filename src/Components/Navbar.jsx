import React from "react";
import Styles from "../Styles/nav.css"
import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import {BsSearch} from "react-icons/bs"

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" href="#">
                <h3><AiOutlineUser />  </h3>  
                </Link>
                <Link> <h3>Admin</h3>  </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" href="#">Project <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Employee</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Expansion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Daily </Link>
                        </li>
                        
                    </ul> */}
                    <form className="form-inline my-2 my-lg-0  frm">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">  <BsSearch/></button>
                    </form>
                </div>
            </nav>
        </>
    )


}

export default Navbar
