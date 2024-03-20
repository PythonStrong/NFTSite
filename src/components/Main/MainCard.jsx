import { Box, Button, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { avatar, hat } from '../../assets'

export default function MainCard() {
    return (
        <Card maxW='sm' bg='#272D37' color='white' className='card'>
            <CardBody>
                <Image
                    src={hat}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    className='img'
                />
                <Button bg='#1E4FFBFF' _hover={false} color='white' pos='absolute' top='175' left='130' className='btn' display='none'>Place A Bid</Button>
                <Stack mt='6' spacing='3'>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                        <Heading size='md'>"Hamlet Contemplates ...</Heading>
                        <Button bg='#1E4FFBFF' color='white' _hover={false} h='30px'>BSC</Button>
                    </Box>
                    <Box display='flex' w='100%' justifyContent='space-between'>
                        <Box display='flex' gap='10px'>
                            <Image src={avatar} />
                            <Box display='flex' flexDir='column'>
                                <Text fontSize='15px' color='gray'>Creator</Text>
                                <Text>SalvadorDali</Text>
                            </Box>
                        </Box>
                        <Box display='flex' flexDir='column'>
                            <Text fontSize='15px' color='gray'>Current Bid</Text>
                            <Text>4.89 eTH</Text>
                        </Box>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}
