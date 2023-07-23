import React, { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Pages/Home';

const Login = () => {
    const [email, setEmail] = useState("eve.holt@reqres.in")
    const [password, setPassword] = useState("");
    const toast = useToast();
const [isAuth,setIsAuth]=useState(false)

    const navigate = useNavigate();

    
    const handleLogin = () => {
        setIsAuth(true)

        if(isAuth){
            return <Home/>
        }
        else{
            <Login/>
        }

        // axios.post('https://reqres.in/api/login', { email, password })
        //     .then((res) => {
        //         console.log(res)
        //        setIsAuth(true);
        //         toast({
        //             position: "top-center",
        //             status: "success",
        //             description: "Logged In Successfully",
        //             isClosable: true,
        //         });
                
        //     })
        //     .catch((err) => {
        //         toast({
        //             position: "top-center",
        //             status: "error",
        //             description: "Error Loggin In",
        //             isClosable: true,
        //         });
        //         console.log(err);
        //         setIsAuth(false)
        //     })
            
            
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login Here</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                onClick={handleLogin}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
export default Login