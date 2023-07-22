import React, { useEffect, useState } from 'react'
import Styles from "../Styles/nav.css"
import { Grid, GridItem, Box, SimpleGrid, Divider, Text, Heading, Stack } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@chakra-ui/react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const TitleCard = ({data}) => {

const navigate=useNavigate();

const handleButton=(id)=>{
    navigate(`/single/${id}`);
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
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '30%' }}
                                src={item.img}
                                height="300px"
                                width="200px"
                                alt='Caffe Latte'
                            />
                            <Stack>
                                <CardBody>
                                    <Heading>Title : {item.title}</Heading>
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