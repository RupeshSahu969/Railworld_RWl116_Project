import React, { useEffect, useState } from 'react'
import Styles from "../Styles/nav.css"
import { Grid, GridItem, Box, SimpleGrid, Divider, Text, Heading, Stack } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@chakra-ui/react'

import axios from 'axios'

const TitleCard = ({data}) => {
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
                                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Caffe Latte'
                            />
                            <Stack>
                                <CardBody>
                                    <Heading>The perfect latte</Heading>
                                    <Text>
                                        Name : {item.name}
                                    </Text>
                                    <Text>
                                        Username : {item.emial}
                                    </Text>
                                    <Text>
                                        Email : {item.email}
                                    </Text>
                                    <Text>
                                        Phone : {item.phone}
                                    </Text>
                                    <Text>
                                        website : {item.website}
                                    </Text>
                                </CardBody>

                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue'>
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