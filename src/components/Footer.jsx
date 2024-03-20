import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { SiFoodpanda } from 'react-icons/si'

export default function Footer() {
    return (
        <Box bg='#002' mt='140px' h={{ md: '40vh', base: '100%' }} gap={{ md: '0', base: '40px' }} display='flex' pt='80px' justifyContent={{ md: 'space-around', base: 'center' }} flexDir={{ md: 'row', base: 'column' }} color='white'>

            <Box display='flex' flexDir='column' gap='12px'>
                <Box display='flex' alignItems='center' gap='2px'>
                    <SiFoodpanda size={30} />
                    <Heading size='lg'>Panda NFT</Heading>
                </Box>
                <Text w={{ md: '400px', base: '100%' }}>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</Text>
            </Box>

            <Box display='flex' flexDir='column' gap='12px'>
                <Heading size='lg'>Resources</Heading>
                <Text>Help Center</Text>
                <Text>Platform Status</Text>
                <Text>Partners</Text>
                <Text>Gas-Free Marketplace</Text>
                <Text>Blog</Text>
            </Box>

            <Box display='flex' flexDir='column' gap='12px'>
                <Heading size='lg'>Company</Heading>
                <Text>Our Team</Text>
                <Text>About Us</Text>
                <Text>Contact Us</Text>
                <Text>Career</Text>
            </Box>

            <Box display='flex' flexDir='column' gap='12px'>
                <Heading size='lg'>Contact</Heading>
                <Text>2715 Ash Dr. San Jose, South Dakota 83475</Text>
                <Box display='flex' alignItems='center' gap='10px'>
                    <FaFacebook size={30} />
                    <FaTwitter size={30} />
                    <FaInstagram size={30} />
                </Box>
            </Box>
        </Box>
    )
}
