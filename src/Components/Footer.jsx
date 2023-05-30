import React from 'react'
import {Box, Button, HStack, Heading, Input, Stack, VStack, Text} from "@chakra-ui/react";
import {AiOutlineSend} from "react-icons/ai";

const Footer = () => {
  return <Box bgColor={"blackAlpha.800"} minH={40} p={16} color={"white"}>
    <Stack direction={['column','row']}>
        <VStack alignItems={"stretch"} w={"full"}>
            <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>
                Subscribe to get latest updates.
            </Heading>
            <HStack
            borderBottom={"2px solid white"}
            py={2}>
                <Input placeholder='Enter Email here...' 
                       border={"none"} 
                       borderRadius={"none"} 
                       outline={"none"} 
                       focusBorderColor='none '/>
                <Button
                p={0}
                colorScheme='red'
                variant={"ghost"}
                borderRadius={"0 20px 20px 0"}>
                    <AiOutlineSend size={20} />
                </Button>
            </HStack>
        </VStack>
        <VStack w={"full"}
        borderLeft={["none","1px solid white"]}
        borderRight={["none","1px solid white"]}
        >
            <Heading
             textTransform={"uppercase"}
             textAlign={"center"}>
                VICHHI'S Videos 
            </Heading>
            <Text>@All rights reserved</Text>
            <Text>Version 1.0.0</Text>
        </VStack>

        <VStack w={"full"}>
            <Heading
            size={"md"}
            textTransform={"uppercase"}>
                Meet At Social Media
            </Heading>
            <Button variant={"link"} colorScheme={"red"}>
                <a target={"blank"} href='https://www.youtube.com/parthvichhi'>YouTube</a>
            </Button>

            <Button variant={"link"} colorScheme={"red"}>
                <a target={"blank"} href='https://www.instagram.com/parthvichhi'>Instagram</a>
            </Button>

            <Button variant={"link"} colorScheme={"red"}>
                <a target={"blank"} href='https://www.github.com/parthvichhi'>GitHub</a>
            </Button>
        
        </VStack>
    </Stack>

  </Box>
    
  
}

export default Footer