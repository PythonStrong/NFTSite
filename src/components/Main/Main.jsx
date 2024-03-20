import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import MainCard from './MainCard'

export default function Main() {
    return (
        <Box mt='160px'>
            <Box>
                <Box mb='40px'>
                    <Heading size='2xl' color='white'>Hot NFTs</Heading>
                </Box>
                <Box>
                    <Box display='flex' alignItems='center' justifyContent={{ md: 'space-between', base: 'center' }} flexWrap='wrap' gap='40px'>
                        <MainCard />
                        <MainCard />
                        <MainCard />
                        <MainCard />
                        <MainCard />
                        <MainCard />
                    </Box>
                    <center>
                        <Button _hover={false} border='1px solid #1E4FFBFF' bg='transparent' color='white' mt='20px'>View More</Button>
                    </center>
                </Box>
            </Box>

            {/* for second componaent  */}
            <Box className='main' color='white' display='flex' alignItems='center' textAlign='center' justifyContent='center' flexDir='column' gap='30px' mt='110px' borderRadius='20px' padding='80px'>
                <Heading size='3xl'>Create Your Own NFT!</Heading>
                <Text w={{ md: '800px', base: '100%' }}>We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!</Text>
                <Button bg='#1E4FFBFF' color='white'>Join Community Now</Button>
            </Box>
        </Box>
    )
}
