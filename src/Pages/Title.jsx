import React, { useEffect, useState } from 'react'
import Styles from "../Styles/nav.css"
import { Grid, GridItem, Box, SimpleGrid, Divider, Text, Heading, Stack } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@chakra-ui/react'

import axios from 'axios'
import Pagination from './Pagination'
import TitleCard from './TitleCard'
//https://jsonplaceholder.typicode.com/users
const Title = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    var totalItems = 0;


    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=10&_page=${currentPage}`);
        setPosts(res.data);
        setLoading(false);
      };
  
      fetchPosts();
    }, []);

    function change() {
      fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${currentPage}`
      )
        .then((response) => response.json())
        .then((result) => setPosts(result));
    }
  
    function decrement() {
      setCurrentPage(currentPage - 1);
    }
    function increment() {
      setCurrentPage(currentPage + 1);
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div>
            
              <TitleCard  data={currentPosts} loading={loading}/>
    
            {/* <Pagination postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        increment={increment}
        decrement={decrement}
            /> */}

<button disabled={currentPage === 1 ? true : false} onClick={decrement}>
        PREVIOUS
      </button>
      <b style={{padding:"10px"}}>  {currentPage} </b>
     
      <button disabled={currentPage === 10 ? true : false} onClick={increment}>
        NEXT
      </button>
        </div>
    )
}

export default Title



// columns={[1, 2, null,3]};