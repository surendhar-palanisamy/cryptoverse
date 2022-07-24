import { Box, Button, Flex, HStack, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GrHomeRounded, } from "react-icons/gr";
import Cryptologo from '../../public/cryptocurrency.png'
import { Icon } from '@chakra-ui/react'
import { AiOutlineHome } from "react-icons/ai";
import { BiBitcoin, BiNews } from "react-icons/bi"; import { RiExchangeLine } from "react-icons/ri";

function Navbar() {

    return (


        <Stack
            pl={['', '', '', '10']}
            gap={3}

            fontSize={'lg'} bgColor={'blue.900'} textColor='white'

        >
            <Link href={'/'}>
                <a>
                    <HStack pt={4}>
                        <Image width={30}
                            height={30} src={Cryptologo} />
                        <Text fontSize={'3xl'} > Cryptoverse</Text>
                    </HStack>

                </a></Link>
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





    )
}

export default Navbar