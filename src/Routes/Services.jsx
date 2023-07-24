import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Text, SimpleGrid, Image } from '@chakra-ui/react'

const Services = () => {
    
    const [data, setData] = useState();

    return (
        <div>
            <SimpleGrid columns={[2, 1, 3]} spacing={20}>
                <Card    height="200px"   color='blue' bgColor="black">
                    <CardBody>
                        <Text textAlign="center">Android.</Text>
                    </CardBody>
                </Card>
                <Card    height="200px"  color='black' bgColor="teal">
                    <CardBody>
                        <Text textAlign="center">ISO.</Text>
                    </CardBody>
                </Card>
                <Card   height="200px"   color='green' bgColor="blue">
                    <CardBody>
                        <Text textAlign="center">Web Development.</Text>
                    </CardBody>
                </Card>
                <Card   height="200px"   bgColor="black" color='grey'>
                    <CardBody>
                        <Text textAlign="center">Software Developer.</Text>
                    </CardBody>
                </Card>
                <Card   height="200px"   bgColor="red" color='greay'>
                    <CardBody>
                        <Text textAlign="center">Data .</Text>
                    </CardBody>
                </Card>
                <Card    height="200px"   bgColor="green" color='blue'>
                    <CardBody>
                        <Text textAlign="center">Android.</Text>
                    </CardBody>
                </Card>

            </SimpleGrid>
        </div>
    )
}

export default Services
