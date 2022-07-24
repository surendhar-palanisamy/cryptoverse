import { Box, Button, Flex, Grid, GridItem, HStack, IconButton, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import Footer from './Footer'
import Navbar from './Navbar'
import Cryptologo from '../../public/cryptocurrency.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { BiBitcoin, BiNews } from 'react-icons/bi'
import { RiExchangeLine } from 'react-icons/ri'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
type Layouttype = {
    childcomponent?: React.ReactNode
}
function Layout(props: Layouttype) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (<Grid
        h={['', '', '', '100vh']}
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(5, 1fr)'
    >
        <GridItem

            rowSpan={1}
            colSpan={[5, 5, 5, 1]}
            bgColor='blue.900'
        >
            <Box display={['none', 'none', 'none', 'flex']}> <Navbar /></Box>
            <HStack px={2} display={['flex', 'flex', 'flex', 'none']} justifyContent={'space-between'} alignContent={'flex-start'}>
                <Box fontSize={'lg'} bgColor={'blue.900'} textColor='white'>
                    <Link href={'/'}>
                        <a>
                            <HStack >
                                <Image width={30}
                                    height={30} src={Cryptologo} />
                                <Text fontSize={'3xl'} > Cryptoverse</Text>
                            </HStack>

                        </a></Link>
                </Box>
                {/* <Button colorScheme='blue' >
                    Open
                </Button> */}
                <HamburgerIcon color={'white'} w={6} h={6} onClick={onOpen} />
            </HStack>
            <Box >
                <Drawer size={'xs'} placement={'right'} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader bgColor={'blue.900'} >
                            <HStack justifyContent={'space-between'}>
                                <Box fontSize={'lg'} bgColor={'blue.900'} textColor='white'>
                                    <Link href={'/'}>
                                        <a>
                                            <HStack >
                                                <Image width={30}
                                                    height={30} src={Cryptologo} />
                                                <Text fontSize={'3xl'} > Cryptoverse</Text>
                                            </HStack>

                                        </a></Link>
                                </Box>

                                <CloseIcon color={'white'} onClick={onClose} />
                            </HStack>

                        </DrawerHeader>
                        <DrawerBody

                            fontSize={'lg'} bgColor={'blue.900'} textColor='white' >

                            <Stack gap={4}>
                                <Link href={'/'}>
                                    <a>
                                        <HStack>
                                            <AiOutlineHome color="white" />

                                            <Text>Home</Text></HStack></a></Link>
                                <Link href={'/crypto'}>
                                    <a>
                                        <HStack>
                                            <BiBitcoin />
                                            <Text> Cryptocurrencies</Text>
                                        </HStack>
                                    </a></Link>
                                {/* <Link href={'/exchange'}>
                                    <a>
                                        <HStack><RiExchangeLine />
                                            <Text>Exchanges</Text></HStack></a></Link> */}

                                <Link href={'/news'}>
                                    <a>
                                        <HStack> <BiNews />
                                            <Text>News</Text></HStack></a>


                                </Link>
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>


        </GridItem >
        <GridItem rowSpan={1} colSpan={[5, 5, 5, 4]} overflowY={['unset', 'unset', 'unset', 'auto']}  > {props.childcomponent}</GridItem>

        {/* <GridItem rowSpan={1} colSpan={5}><Footer /></GridItem> */}

    </Grid >







    )
}

export default Layout


{/* <Flex
            w={'100vw'}
            h={'100vh'}
            flexDir={'row'}
            justifyItems='flex-start'
        >


            <Box h={'full'} >
                <Navbar />
            </Box>
            <Box w={'full'}>
                {props.childcomponent}
                <Box><Footer /></Box>
            </Box>

        </Flex > */}