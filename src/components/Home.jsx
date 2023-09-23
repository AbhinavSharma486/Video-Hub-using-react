import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React from 'react'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'
import img4 from '../assets/image4.jpg'
import img5 from '../assets/image5.png'
import img7 from '../assets/wallpaperflare.com_wallpaper (4).jpg'
import img8 from '../assets/wallpaperflare.com_wallpaper (5).jpg'


import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';

const headingOptions = {
    pos: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    padding: '4',
    fontSize: "4xl",
    background: 'transparent'
}

const Home = () => {
    return (
        <Box>
            <MyCarousel />

            <Container
                maxW={'container.xl'} minH={'100vh'} p="16"
            >
                <Heading
                    textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto"
                >
                    Services
                </Heading>

                <Stack
                    h={"full"}
                    p={"4"}
                    alignItems={"center"}
                    direction={['column', 'row']}
                >
                    <Img src={img5} h={['40', '400']} filter={"hue-rotate(-130deg)"} />
                    <Text letterSpacing={'widest'} lineHeight={"190%"} textAlign={'center'} p={['4', '16']}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, sit. Earum harum atque assumenda qui vero distinctio incidunt! Modi aliquid voluptas, expedita optio similique, magnam qui, asperiores quisquam nobis reiciendis iure nesciunt aperiam dicta veritatis nostrum quaerat doloribus impedit? Quod ad ipsa eius voluptatem velit reiciendis nemo tenetur quos ut eaque. Repellendus atque ullam quia velit repellat id aperiam illum, porro cum fugiat cumque voluptatibus maxime delectus facilis quae aliquid vero quis voluptatum distinctio odio voluptas esse blanditiis. Molestiae dolor incidunt ab officia, vel error earum modi obcaecati, ipsa explicabo, nulla dolore voluptatibus totam vitae blanditiis quasi nihil? Voluptates, ab.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={3000}
        showThumbs={false}
        showIndicators={false}
    >

        <Box w={'full'} h={'100vh'}>
            <Img src={img2} alt="Item1" h={'full'} w={'full'} objectFit={'cover'} />
            <Heading
                bgColor={'whiteAlpha.600'}
                color={'white'}
                {...headingOptions}
            >
                Gaming Brings People Together
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'} >
            <Img src={img3} alt="Item1" h={'full'} w={'full'} objectFit={'cover'} />
            <Heading
                bgColor={'whiteAlpha.600'}
                color={'white'} {...headingOptions}
            >
                Life is a Game Play to Win
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Img src={img4} alt="Item1" h={'full'} w={'full'} objectFit={'cover'} />
            <Heading
                bgColor={'whiteAlpha.600'}
                color={'white'} {...headingOptions}
            >
                Life Begins at Night
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Img src={img7} alt="Item1" h={'full'} w={'full'} objectFit={'cover'} />
            <Heading
                bgColor={'whiteAlpha.600'}
                color={'white'} {...headingOptions}
            >
                Nothing is to Beautiful Nothing is to Expensive
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Img src={img8} alt="Item1" h={'full'} w={'full'} objectFit={'cover'} />
            <Heading
                bgColor={'whiteAlpha.600'}
                color={'white'} {...headingOptions}
            >
                Nobody cares about your degree When you drive Lamborghini
            </Heading>
        </Box>
    </Carousel>
)

export default Home