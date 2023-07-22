import React from "react";
import Styles from "../Styles/nav.css"
import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import { BsSearch } from "react-icons/bs"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
} from '@chakra-ui/react'
import { useState } from "react";

const Navbar = () => {

    const [query,setQuery]= useState("");

    const [getData,setGetdata]=useState([]);


    const handleSearch = () => {
        
        fetch(`https://mock-server1-jrc9.onrender.com/user?title=${query}`)
          .then((response) => response.json())
          .then((data) => {
            setGetdata(data)
            console.log(data)
          })
          .catch((error) => console.error("Error fetching data:", error));
      };

console.log(getData)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <Link className="navbar-brand" fontSize="20px">
                    <Menu>
                        <MenuButton>
                            <AiOutlineUser />
                        </MenuButton>
                        <MenuList>
                            <Box m={'7px'} mt={'2px'} mb={'2px'} p={'5px'} fontSize={'14px'}> </Box>
                            <Box m={'7px'} mt={'2px'} mb={'2px'} p={'5px'} fontSize={'12px'} color={'#7a7676'}>  </Box>
                            <MenuItem borderTop={'1px solid #C6D2D9'} className='loginList'>Profile settings</MenuItem>
                            <MenuItem className='loginList'>Download apps</MenuItem>
                            <MenuItem className='loginList' borderBottom={'1px solid #C6D2D9'} >Try chat app</MenuItem>
                            <MenuItem className='loginList'>Log out</MenuItem>
                        </MenuList>
                    </Menu>
                </Link>
                <Link> <h3>Admin</h3>  </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0  frm">
                        <input className="form-control mr-sm-2" type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSearch}>  <BsSearch /></button>
                    </form>
                </div>
            </nav>
        </>
    )


}

export default Navbar
