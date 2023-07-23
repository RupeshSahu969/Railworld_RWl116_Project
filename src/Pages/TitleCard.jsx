import React, { useEffect, useState } from 'react'
import Styles from "../Styles/nav.css"
import { Grid, GridItem, Box, SimpleGrid, Divider, Text, Heading, Stack, Spinner } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@chakra-ui/react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const TitleCard = ({ data,loading }) => {

    const navigate = useNavigate();

    const handleButton = (id) => {
        navigate(`/single/${id}`);
    }

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

                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue' onClick={() => handleButton(item.id)} >
                                        + View More
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