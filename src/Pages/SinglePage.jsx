import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardHeader, CardBody, CardFooter, Text, Image, Stack, Heading, Spinner, Box } from '@chakra-ui/react'
import TitleCard from './TitleCard';

const SinglePage = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const apiUrl = `https://mock-server1-jrc9.onrender.com/user/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    if (!userData) {
        return (
            <Box justifyContent="center" alignItems="center" display="flex" height="200px">
                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
            </Box>
        );
    }

    const handleHome = () => {
        navigate("/")
    }
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={userData.img}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading>Title : {userData.title}</Heading>
                        <Text>
                            Email : {userData.email}
                        </Text>
                        <Text>
                            Description : {userData.description}
                        </Text>
                        <Text>
                            TackStack : {userData.tackstack}
                        </Text>
                        <Text>
                            Working People : {userData.people}
                        </Text>
                        <Text>
                            Details : {userData.details}
                        </Text>

                        <Text>
                            Date : {userData.date}
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue' onClick={handleHome}>
                        Go Back
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};

export default SinglePage
