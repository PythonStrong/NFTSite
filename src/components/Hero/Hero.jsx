import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { avatar, binance, coin, hat, meta, toko, trust } from '../../assets'
import Marquee from 'react-fast-marquee'

export default function Hero() {
    return (
        <Box mt='100px'>
            <Box display='flex' alignItems='center' justifyContent='space-between' flexDir={{ xl: 'row', md: 'column', base: 'column' }}>

                <Box width={{ md: '800px', base: '100%' }} color='white' display='flex' flexDir='column' alignItems='start' gap='25px'>
                    <Text fontSize={{ xl: '72px', md: '60px', base: '40px' }} fontWeight='700'>Discover a New Era of Crypto Currency</Text>
                    <Text>Panda NFT is the primier marketplace for NFT, which are digital items you can truly own. Digital items have existed for a long time, but never like this.</Text>
                    <Button bg='#1E4FFBFF' color='white'>Get Started</Button>
                </Box>

                <Box mt={{ md: '0', base: '60px' }}>
                    <Card maxW='sm' bg='#272D37' color='white'>
                        <CardBody>
                            <Image
                                src={hat}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>"Hamlet Contemplates ...</Heading>
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
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
            </Box>

            {/* for maruqee  */}
            <Marquee pauseOnClick autoFill >
                <Box display='flex' alignItems='center' gap='80px' mt='130px'>
                    <Image src={binance} />
                    <Image src={trust} />
                    <Image src={meta} />
                    <Image src={coin} />
                    <Image src={toko} />
                </Box>
            </Marquee>
        </Box>
    )
}
