import React, { Component } from 'react';
import {Hstack,Box,Flex,Spacer} from "@chakra-ui/react";
import Boxes from './components/Boxes';
import "./App.css"
function App() {
  return (
    <div>
    <Box bg = "#121111" w="100vw" h="100vh" overflow = "auto" position = "fixed">
    <Boxes />
    </Box>

    </div>
  );
}

export default App;
