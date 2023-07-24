import React, { useEffect, useState } from 'react'
import Styles from "../Styles/nav.css"
import { Grid, GridItem, Box, SimpleGrid, Divider, Text, Heading, Stack, Spinner, Link, useToast } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@chakra-ui/react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdEdit } from "react-icons/md"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const TitleCard = ({ data, loading }) => {

    const navigate = useNavigate();
    const toast = useToast();

    const handleButton = (id) => {
        navigate(`/single/${id}`);
    }

    const LoadEdit = (id) => {
        navigate(`/edit/${id}`)
        console.log(id)
    };

    const RemoveData = (id) => {

        fetch("https://mock-server1-jrc9.onrender.com/user/" + id, {
            method: "DELETE",
        })
            .then((res) => {
                // alert("Removed successfully.");
                toast({
                    position: "top-center",
                    status: "error",
                    description: "Delete Successfully",
                    isClosable: true,
                });
                window.location.reload();
            })
            .catch((err) => {
                console.log(err.message);
            });
    };


    if (loading) {
        return (
            <Box justifyContent="center" alignItems="center" display="flex" height="200px">
                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
            </Box>
        );
    }


    return (
        <div>
            {data.length > 0 && data.map((item) => {
                return (
                    <SimpleGrid spacing='40px'>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            spacing='40px'
                            marginTop="10px"
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '30%' }}
                                src={item.img}
                                height="300px"
                                width="300px"
                                alt='Caffe Latte'
                            />
                            <Stack>
                                <CardBody>
                                    <Heading size="sm">Title : {item.title}</Heading>
                                    <Text>
                                        id : {item.id}
                                    </Text>
                                    <Text>
                                        Email : {item.email}
                                    </Text>
                                    <Text>
                                        Date : {item.date}
                                    </Text>
                                </CardBody>

                                <CardFooter >
                                    <Button variant='solid' colorScheme='blue' onClick={() => handleButton(item.id)} >
                                        + View More
                                    </Button>
                                    <Button variant='solid' colorScheme='blue' marginLeft="10px">
                                        <MdEdit onClick={() => LoadEdit(item.id)} />
                                    </Button>
                                    <Button variant='solid' colorScheme='red' marginLeft="10px" >
                                        <Link
                                            onClick={() => {
                                                RemoveData(item.id)
                                            }}

                                        >
                                            <RiDeleteBin6Line />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </SimpleGrid>
                )
            })}
        </div>
    )
}

export default TitleCard