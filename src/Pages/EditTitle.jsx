import React, { useEffect, useState } from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    useToast,
    Box,
    useColorModeValue
} from '@chakra-ui/react'

import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditTitle = () => {

    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")
    const [tackstack, setTackstack] = useState("")
    const [people, setPeople] = useState("")
    const [email, setEmail] = useState("")
    const [details, setDetails] = useState("")
    const [date, setDate] = useState("")

    const toast = useToast();
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://mock-server1-jrc9.onrender.com/user/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                setTitle(resp.title);
                setDescription(resp.description)
                setPeople(resp.people);
                setImg(resp.img)
                setDate(resp.date);
                setEmail(resp.email);
                setTackstack(resp.tackstack);
                setDetails(resp.details);

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    const handlesubmit = (e) => {
        e.preventDefault();
        const userdata = { people, title, img, description, email, date, tackstack, details };

        fetch(`https://mock-server1-jrc9.onrender.com/user/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userdata),
        })
            .then((res) => {
                toast({
                    position: "top-center",
                    status: "success",
                    description: "Edit Data Successfully",
                    isClosable: true,
                });
                navigate("/title");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div>

            <form onSubmit={handlesubmit}>
                <FormControl isRequired>
                    <FormLabel>Title Name</FormLabel>
                    <Input htmlSize={80} width='auto'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type='text'
                        placeholder='First name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Image Url</FormLabel>
                    <Input htmlSize={80} width='auto'
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        type='src'
                        placeholder='First name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Description</FormLabel>
                    <Input htmlSize={80} width='auto'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                        placeholder='First name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>TackStack</FormLabel>
                    <Input htmlSize={80} width='auto'
                        value={tackstack}
                        onChange={(e) => setTackstack(e.target.value)}
                        type='text'
                        placeholder='First name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>How Many People Working</FormLabel>
                    <Input htmlSize={80} width='auto'
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                        type='number'
                        placeholder='First name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input htmlSize={80} width='auto'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        placeholder='First name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Details</FormLabel>
                    <Input htmlSize={80} width='auto'
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        type='text'
                        placeholder='First name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Complete Date</FormLabel>
                    <Input
                        htmlSize={80} width='auto'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Select Date and Time"
                        type="date"
                    />
                </FormControl>
                <br />
                <Button colorScheme='blue' type='submit'> Submit </Button>

            </form>

        </div>
    )
}

export default EditTitle