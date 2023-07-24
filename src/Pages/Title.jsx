import React, { useEffect, useState } from 'react'
import Styles from "../Styles/title.css"
import { Grid, GridItem, Box, SimpleGrid, Divider, Text, Heading, Stack, Flex, Spinner } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@chakra-ui/react'
import axios from 'axios'
import TitleCard from './TitleCard'

const Title = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  var totalItems = 0;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://mock-server1-jrc9.onrender.com/user?_limit=10&_page=${currentPage}`);
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  function change() {
    fetch(
      `https://mock-server1-jrc9.onrender.com/user?_limit=5&_page=${currentPage}`
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

  if (!posts) {
    return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      justifyContent="center"
      alignItems="center"
    />;
  }
  return (
    <div>
      <TitleCard data={currentPosts} loading={loading} />
      <Flex style={{ marginTop: "50px", justifyContent: "center" }}>
        <Button disabled={currentPage === 1 ? true : false} onClick={decrement} colorScheme='blue'>
          PREVIOUS
        </Button>
        <Text style={{ padding: "10px" }}>  {currentPage} </Text>

        <Button disabled={currentPage === 10 ? true : false} onClick={increment} colorScheme='blue'>
          NEXT
        </Button>
      </Flex>
    </div>
  )
}
export default Title
