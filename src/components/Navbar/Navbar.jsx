import { Box, Button, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { SiFoodpanda } from "react-icons/si";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [show, setShow] = useState(false)
    const showMenu = () => {
        setShow(true)
    }
    return (
        <Box color='white' pt='10px'>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Box display='flex' alignItems='center' gap='2px'>
                    <SiFoodpanda />
                    <Text>Panda NFT</Text>
                </Box>
                <Box display={{ md: 'flex', base: 'none' }} alignItems='center'>
                    <Link className='link'>Home</Link>
                    <Link className='link'>Discover</Link>
                    <Link className='link'>Docs</Link>
                    <Link className='link'>Blog</Link>
                    <Link className='link'>About Us</Link>
                    <Link className='link'>Contact Us</Link>
                </Box>
                <Button variant='outline' color='white' _hover={{ border: '1px solid #1E4FFBFF', background: '#1E4FFBFF' }}>Connect Wallet</Button>



                {/* for mobile menu  */}
                <Box display={{ md: 'none', base: 'flex' }} cursor='pointer'>
                    <FaBarsStaggered size={30} onClick={showMenu} />
                </Box>
                {show ? <Box display='flex' pos='fixed' flexDir='column' gap='20px' alignItems='center' justifyContent='center' top='0' left='0' w='full' zIndex='999' h='100%' bg='#003' cursor='pointer'>
                    <Text pos='absolute' top='20px' right='20px' onClick={() => setShow(false)}><IoMdClose size={30} /> </Text>
                    <Link className='link' fontSize='32px'>Home</Link>
                    <Link className='link' fontSize='32px'>Discover</Link>
                    <Link className='link' fontSize='32px'>Docs</Link>
                    <Link className='link' fontSize='32px'>Blog</Link>
                    <Link className='link' fontSize='32px'>About Us</Link>
                    <Link className='link' fontSize='32px'>Contact Us</Link>
                </Box> : ''}
            </Box>
        </Box>
    )
}
