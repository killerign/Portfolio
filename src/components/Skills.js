import { Text, Box, ListItem , List, ListIcon, MdCheckCircle } from '@chakra-ui/react'
import React from 'react'
import {BiSpa} from "react-icons/bi"
function Skills() {
    return (
        <div>
          <Box bg = "linear-gradient(145deg, #232121, #2a2828)" w ="27vw" h = "60vh" pos = "relative"  top = "21vh" borderRadius = "4vw" boxShadow = "5px 5px 3px #0a0a0a">  
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Benne&display=swap');
            </style>
            <Text fontSize = "4xl" paddingLeft = "16" paddingTop = "1.5" as="u" color = "beige" fontFamily = "Benne"> Skills</Text>
<List alignContent = "center" spacing={3} >
  <ListItem color = "beige" fontSize = "xl" paddingLeft = "10" paddingTop = "4">
    <ListIcon as={BiSpa} color="purple.500" />
    Data Structures and Algorithm
  </ListItem>
  <ListItem color = "beige" fontSize = "xl" paddingLeft = "10" paddingTop = "4">
    <ListIcon as={BiSpa} color="purple.500" />
    Machine Learning
  </ListItem>
  <ListItem color = "beige" fontSize = "xl" paddingLeft = "10" paddingTop = "4">
    <ListIcon as={BiSpa} color="purple.500" />
    Frontend Development
  </ListItem>
  <ListItem color = "beige" fontSize = "xl" paddingLeft = "10" paddingTop = "4">
    <ListIcon as={BiSpa} color="purple.500" />
    Backend Development 
  </ListItem>

  
  {/* You can also use custom icons from react-icons */}
</List>
         </Box>
        </div>
    )
}

export default Skills
