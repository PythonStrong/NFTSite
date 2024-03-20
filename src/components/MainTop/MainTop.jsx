import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { PiBalloonFill, PiBalloonLight } from "react-icons/pi";
import { ParentPlaceholder, avatar, hat, placeholder } from '../../assets';
import { TbBrandVue } from "react-icons/tb";

export default function MainTop() {
  return (
    <Box mt='160px'>
      {/* for first component  */}
      <Box color='whitesmoke' textAlign='center'>
        <Heading size='2xl' mb='60px'>Create and sell your <br /> NFTs</Heading>
        <Box display='flex' alignItems='center' justifyContent='space-between' textAlign='center' flexWrap='wrap' gap={{ md: '0', base: '20px' }}>
          {/* 1 */}
          <Box display='flex' flexDir='column' alignItems='center' gap='20px' justifyContent='center' w='400px' bg='#272D37FF' padding='20px' h='250px'>
            <PiBalloonFill style={{ background: 'blue', width: '50px', padding: '10px', borderRadius: '50%', height: '50px' }} />
            <Heading size='md'>Set up your wallet</Heading>
            <Text>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</Text>
          </Box>
          {/* 2 */}
          <Box display='flex' flexDir='column' alignItems='center' gap='20px' justifyContent='center' w='400px' bg='#272D37FF' padding='20px' h='250px'>
            <PiBalloonFill style={{ background: 'blue', width: '50px', padding: '10px', borderRadius: '50%', height: '50px' }} />
            <Heading size='md'>Add your NFTs</Heading>
            <Text>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</Text>
          </Box>
          {/* 3 */}
          <Box display='flex' flexDir='column' alignItems='center' gap='20px' justifyContent='center' w='400px' bg='#272D37FF' padding='20px' h='250px'>
            <PiBalloonFill style={{ background: 'blue', width: '50px', padding: '10px', borderRadius: '50%', height: '50px' }} />
            <Heading size='md'>List them for sale</Heading>
            <Text>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</Text>
          </Box>
        </Box>
      </Box>


      {/* for Second component  */}
      <Box mt='160px' color='white'>
        <Box display='flex' alignItems='center' justifyContent='space-between' mb='60px'>
          <Heading size='2xl'>Live Auctions</Heading>
          <Button variant='outline' _hover={false} color='white' border='1px solid #1E4FFBFF'>View More</Button>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap' gap={{ md: '0', base: '30px' }}>
          <Card maxW='sm' bg='#272D37' color='white'>
            <CardBody>
              <Image
                src={hat}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
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

          <Card maxW='sm' bg='#272D37' color='white'>
            <CardBody>
              <Image
                src={hat}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
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

          <Card maxW='sm' bg='#272D37' color='white'>
            <CardBody>
              <Image
                src={hat}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
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
        </Box>
      </Box>

      {/* for Third component  */}
      <Box color='white' mt='160px'>
        <Box display='flex' alignItems='center' justifyContent='space-between' mb='40px'>
          <Heading size='2xl'>Featured Artist</Heading>
          <Button variant='outline' _hover={false} color='white' border='1px solid #1E4FFBFF'>View More</Button>
        </Box>

        <Box display='flex' alignItems='center' justifyContent={{ md: 'space-between', base: 'center' }} gap={{ md: '0', base: '20px' }} flexWrap='wrap'>
          <Card maxW='sm' bg='#272D37' color='white'>
            <CardBody>
              <Image
                src={ParentPlaceholder}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                width='100%'
              />
              <Stack mt='6' spacing='3'>
                <Box display='flex' alignItems='center' justifyContent='center' flexDir='column' gap='10px'>
                  <Image src={placeholder} pos='absolute' bottom='20' mb='10px' />
                  <Heading size='lg'>CryptoPunks</Heading>
                  <Text display='flex' alignItems='center' fontSize='20px'><TbBrandVue />   818.7K</Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card maxW='sm' bg='#272D37' color='white'>
            <CardBody>
              <Image
                src={ParentPlaceholder}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                width='100%'
              />
              <Stack mt='6' spacing='3'>
                <Box display='flex' alignItems='center' justifyContent='center' flexDir='column' gap='10px'>
                  <Image src={placeholder} pos='absolute' bottom='20' mb='10px' />
                  <Heading size='lg'>Doodles</Heading>
                  <Text display='flex' alignItems='center' fontSize='20px'><TbBrandVue />74.9K</Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card maxW='sm' bg='#272D37' color='white'>
            <CardBody>
              <Image
                src={ParentPlaceholder}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                width='100%'
              />
              <Stack mt='6' spacing='3'>
                <Box display='flex' alignItems='center' justifyContent='center' flexDir='column' gap='10px'>
                  <Image src={placeholder} pos='absolute' bottom='20' mb='10px' />
                  <Heading size='lg'>Bored Ape Yacht</Heading>
                  <Text display='flex' alignItems='center' fontSize='20px'><TbBrandVue />378.7K</Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card maxW='sm' bg='#272D37' color='white'>
            <CardBody>
              <Image
                src={ParentPlaceholder}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                width='100%'
              />
              <Stack mt='6' spacing='3'>
                <Box display='flex' alignItems='center' justifyContent='center' flexDir='column' gap='10px'>
                  <Image src={placeholder} pos='absolute' bottom='20' mb='10px' />
                  <Heading size='lg'>Capsule House</Heading>
                  <Text display='flex' alignItems='center' fontSize='20px'><TbBrandVue />19.3K</Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
