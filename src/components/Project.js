import { Box, Text, Container, Flex, Spacer} from '@chakra-ui/react'
import React from 'react'

function Project() {
    return (
        <div>
        <Box bg = "linear-gradient(145deg, #232121, #2a2828)" w ="60vw" h = "70vh" pos = "relative" overflow = "auto"  top = "13.4vh" alignContent = "start" borderRadius = "4vw" boxShadow = "5px 5px 3px #0a0a0a">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Benne&display=swap');
            </style>
            <Text fontSize = "5xl" paddingLeft = "16" paddingTop = "1.5" as="u" color = "beige" fontFamily = "Benne"> Projects</Text>
                <Text fontSize = "3xl" bgColor= "purple.500" width="40vw" paddingLeft = "12" fontStyle = "italic" color = "beige">Surway - UAV route and routine planner</Text>
                <Flex flexDirection = "row-reverse">
                <Box width = "10vw" height = "4vh"></Box>
                <Box width="45vw" bgColor = "beige">
                    <Text fontSize = "xl" paddingLeft = "10" fontStyle = "" color = "Black">A software-based application that plans the most optimized route
                    for multiple drones to sweep/scan/survey a given large area of land
                    in a very short time.</Text>
                </Box>
                </Flex>
                <Flex flexDirection = "row">
                <Box width="13vw" height = "1vh"></Box>
                <Text fontSize = "xl" width = "47vw" bgColor= "purple.500" fontStyle = "bold" color = "beige">Stacks Used: Google map API, Python( matplotlib), Data Structures
                and Algorithm</Text>
                </Flex>
                <Container height = "7vh"></Container>
                <Text fontSize = "3xl" bgColor= "purple.500" width="30vw" paddingLeft = "12" fontStyle = "italic" color = "beige">AGLM — Web Application</Text>
                <Flex flexDirection = "row-reverse">
                <Box width = "10vw" height = "4vh"></Box>
                <Box width="45vw" bgColor = "beige">
                    <Text fontSize = "xl" paddingLeft = "10" fontStyle = "" color = "Black">Amrita Guest Lecture Management System helps organize lectures by
                    providing appropriate functionality for students and managers. The project was developed as a part of a Software Engineering course using
                    various SE tools.</Text>
                </Box>
                </Flex>
                <Flex flexDirection = "row">
                <Box width="13vw" height = "1vh"></Box>
                <Text fontSize = "xl" bgColor= "purple.500" width = "47vw" fontStyle = "bold" color = "beige">Stacks: MERN stack, Firebase, Jenkins, Jira, Docker, Azure</Text>
                </Flex>
                <Container height = "7vh"></Container>
                <Text fontSize = "3xl" bgColor= "purple.500" width="30vw" paddingLeft = "12" fontStyle = "italic" color = "beige">Complaint Point - Mobile App</Text>
                <Flex flexDirection = "row-reverse">
                <Box width = "10vw" height = "4vh"></Box>
                <Box width="45vw" bgColor = "beige">
                    <Text fontSize = "xl" paddingLeft = "10" fontStyle = "" color = "Black">A mobile app aimed at replicating the Govt. of India’s grievance
                    redressal mechanism in a social-media app type interface.</Text>
                </Box>
                </Flex>
                <Flex flexDirection = "row">
                <Box width="13vw" height = "1vh"></Box>
                <Text fontSize = "xl" bgColor= "purple.500" width = "47vw" fontStyle = "bold" color = "beige">Stack Used: Flutter, Django, MySQL</Text>
                </Flex>
            <Box height = "2vh"></Box>
          </Box>
        </div>
    )
}

export default Project
