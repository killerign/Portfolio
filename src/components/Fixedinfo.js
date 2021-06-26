import { Avatar, Text, Box, Flex,  IconButton, SearchIcon} from '@chakra-ui/react'
import React from 'react'
import { SocialIcon } from 'react-social-icons';
function Fixedinfo() {
    return (
        <div>
        <Avatar top = "0.5vw" size = "xl" name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <style>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap');
        </style>
        </style>
        <Box h = "1vw"></Box>
        <Text fontSize = "2xl" fontWeight = "bold"  color ="beige" fontFamily = 'Bungee Hairline'>Srinivasa Krishnan A N</Text>
        <Box h = "3vw"></Box>
        <Flex flexDirection = "row">
            <Box w="2.5vw"></Box>
            <SocialIcon network ="github" bgColor ="white" />
            <Box w = "2.5vw"></Box>
            <SocialIcon network = "linkedin" />
            <Box w = "2.5vw"></Box>
            <SocialIcon network = "twitter" />
        </Flex>
        </div>
    )
}

export default Fixedinfo
