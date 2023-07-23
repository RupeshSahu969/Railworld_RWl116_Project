import React, { useEffect } from "react";
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
import { Grid, GridItem, SimpleGrid, Divider, Text, Heading, Stack, Spinner } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@chakra-ui/react'

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {

        fetch(`https://mock-server1-jrc9.onrender.com/user?q=${searchQuery}`)
            .then((response) => response.json())
            .then((data) => {
                setSearchResult(data)
                console.log(data)
            })
            .catch((error) => console.error("Error fetching data:", error));
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" fontSize="20px">
                    <Menu>
                        <MenuButton>
                            <AiOutlineUser />
                        </MenuButton>
                        <MenuList>
                            <Box m={'7px'} mt={'2px'} mb={'2px'} p={'5px'} fontSize={'14px'}>rupeshsahu969@gmail.com</Box>
                            <Box m={'7px'} mt={'2px'} mb={'2px'} p={'5px'} fontSize={'12px'} color={'#7a7676'}> RS </Box>
                        </MenuList>
                    </Menu>
                </Link>
                <Link> <h3>Admin</h3>  </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex ms-auto my-3 my-lg-0 frm">
                        <div class="input-group">
                            <input
                                class="form-control"
                                value={searchQuery}
                                onChange={handleChange}
                                type="text"

                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button class="btn btn-primary" type="submit" onClick={handleSearch}>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    )


}

export default Navbar
