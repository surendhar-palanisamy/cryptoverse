import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <Box >
            <VStack spacing={0} textColor={'white'} bgColor={'blue.900'}>
                <Text>Cryptoverse</Text>
                <Text>All rights reserved</Text>
                <HStack >
                    <Link href={'/'}>
                        <a>
                            <Text>Home</Text></a></Link>
                    <Link href={'/crypto'}>
                        <a>
                            <HStack>

                                <Text> Cryptocurrencies</Text>
                            </HStack>
                        </a></Link>
                    <Link href={'/exchange'}>
                        <a>
                            <HStack>
                                <Text>Exchanges</Text></HStack></a></Link>

                    <Link href={'/news'}>
                        <a>
                            <HStack>
                                <Text>News</Text></HStack></a>


                    </Link>
                </HStack>
            </VStack>

        </Box>
    )
}

export default Footer