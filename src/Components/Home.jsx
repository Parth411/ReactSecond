import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "8%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase"
}

const Home = () => {
  return <Box>
    <MyCarousel />
    <Container maxW={"container.lg"} minH={"100vh"} p={"16"}>
        <Heading textTransform={"uppercase"} py={10} w={"fit-content"} p={16} m={"auto"}>
            Services
        </Heading>

        <Stack
        h={"full"}
        w={"full"}
        p={"4"}
        alignItems={"center"}
        direction={['column','row']}
        >
        <Image src={img5} h={["40", "300"]} filter={"hue-rotate(-130deg)"}/>
        <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem Eaque necessitatibus velit, asperiores temporibus repellendus optio delectus facilis, rem cupiditate blanditiis, incidunt consectetur tempora ex est ipsam quam a sequi exercitationem!
        </Text>
        </Stack>
    </Container>
  </Box>;
};

const MyCarousel = ()=> (
    <Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={false} showArrows={false}>

        <Box width={"full"} height={"100vh"} >
            <Image src={img1} />
            <Heading bg={"blackAlpha.700"} color={"white"} {...headingOptions}>
                Watch Your Video
            </Heading>
        </Box>

        <Box width={"full"} height={"100vh"}>
            <Image src={img2} />
            <Heading bg={"blackAlpha.500"} color={"white"} {...headingOptions}>
                Watch Your Personal
            </Heading>
        </Box>

        <Box width={"full"} height={"100vh"}>
            <Image src={img3} />
            <Heading bg={"blackAlpha.700"} color={"white"} {...headingOptions}>
                Gaming Videos
            </Heading>
        </Box>

        <Box width={"full"} height={"100vh"}>
            <Image src={img4} />
            <Heading bg={"blackAlpha.700"} color={"white"} {...headingOptions}>
                Watch Your Personal
            </Heading>
        </Box>
    </Carousel>
)

export default Home