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
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setPosts(res.data);
        setLoading(false);
      };
  
      fetchPosts();
    }, []);
  
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div>
            
              <TitleCard  data={currentPosts} loading={loading}/>
    
            <Pagination postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
            />
        </div>
    )
}

export default Title



// columns={[1, 2, null,3]};