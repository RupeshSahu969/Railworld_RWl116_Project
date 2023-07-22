import React, { useEffect, useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
Button
} from '@chakra-ui/react'
import axios from 'axios'


const Project = () => {
  const [title, setTitle] = useState("")
  const [img, setImg] = useState("")
  const [description, setDescription] = useState("")
  const [tackstack, setTackstack] = useState("")
  const [people, setPeople] = useState("")
  const [email, setEmail] = useState("")
  const [details, setDetails] = useState("")
  const [date, setDate] = useState("")


  const handleSubmit=(e)=>{
    e.preventDefault()
    
    const payload = {
      title,
      img,
      description,
      tackstack,
      people,
      email,
      details,
      date,

    }

    axios.post("https://mock-server1-jrc9.onrender.com/user",payload)
      .then((res) => {

        console.log(res);
        alert("Add Details Successfully")
      })
      .catch((err) => {
        alert("Error")
        console.log(err);
      })

      setTitle("");
      setDescription("")
      setPeople("");
      setImg("")
      setDate("");
      setEmail("");
      setTackstack("");
      setDetails("");

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <br/>
        <Button colorScheme='blue' type='submit'> Submit </Button>
      </form>

    </div>
  )
}

export default Project