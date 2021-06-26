import React from 'react'
import {Flex,Center,Text,Square,Box,VStack,Spacer} from "@chakra-ui/react";
import Fixedinfo from './Fixedinfo';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import Stacks from './Stacks';
import {ReactComponent as AboutImage} from './undraw_Taking_selfie_re_wlgd.svg';
function Boxes() {
    return (
        <div>
   <Flex>
      <Box bg = "linear-gradient(145deg, #232121, #2a2828)" w ="18.75vw" h = "50vh" pos = "fixed" align = "center" left ="2.2vw" top="6vh" borderRadius = "4vw" boxShadow = "5px 5px 3px #0a0a0a">
        <Fixedinfo />
      </Box>
      <Box w="25vw"></Box>
    <Flex flexDirection = "column">
      <Box bg = "linear-gradient(145deg, #232121, #2a2828)" w ="60vw" h = "50vh" pos = "relative"  top = "6vh" borderRadius = "4vw" boxShadow = "5px 5px 3px #0a0a0a">
        <Flex flexDirection = "row-reverse">
          <Box w = "30vw" h = "20vh">
          <About />
          </Box>
          <Box w= "30vw" h = "20vh" textAlign = "start">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Benne&display=swap');
            </style>
            <Text fontSize = "5xl" paddingLeft = "20" paddingTop = "10" fontFamily = "Benne" color = "beige">Hello I'm</Text>
            <Text fontSize = "4xl" paddingLeft = "35" paddingtop = "15" fontFamily = "Benne" color = "Beige"> Srinivasa Krishnan A N</Text>
            <Text fontSize = "3xl" paddingLeft = "32" paddingtop = "15" fontFamily = "sans-serif" color = "blue.600">Computer Engineer</Text>
          </Box>
          </Flex> 
      </Box>
      <Project />
      <Flex flexDirection = "row">
        <Skills />
      <Spacer />
      <Stacks />
      </Flex>
      <Box bg = "linear-gradient(145deg, #232121, #2a2828)" w ="60vw" h = "50vh" pos = "relative"  top = "27vh" borderRadius = "4vw" boxShadow = "5px 5px 3px #0a0a0a">
      <style>
            @import url('https://fonts.googleapis.com/css2?family=Benne&display=swap');
      </style>
      <Text fontSize = "4xl" paddingLeft = "16" paddingTop = "16" as="u" color = "beige" fontFamily = "Benne">About Me</Text>
      <Flex flexDirection = "row">
      <Text fontSize = "2xl" width = "30vw" paddingLeft = "16" paddingTop = "4" color = "beige" fontFamily = "Benne">
      An enthusiastic student who is trying to obtain a entry-level position with interests in full-stack development and machine learning, which guarantees a versatile skillset capable of handling a variety of jobs.
      </Text>
      <Box w = "30vw" h = "20vh">
          <AboutImage />
      </Box>
      </Flex>
      
      </Box>
      <Flex flexDirection = "row" >
      <Box bg = "linear-gradient(145deg, #232121, #2a2828)" w ="27vw" h = "30vh" pos = "relative"  top = "32vh" borderRadius = "4vw" boxShadow = "5px 5px 3px #0a0a0a">

      </Box>
      <Spacer />
      <Box bg = "linear-gradient(145deg, #232121, #2a2828)" w ="27vw" h = "60vh" pos = "relative"  top = "32vh" borderRadius = "4vw" boxShadow = "5px 5px 3px #0a0a0a">

      </Box>
      </Flex>
    </Flex>
    </Flex>
        </div>
    )
}


export default Boxes;
