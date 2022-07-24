import { Box, Flex, Grid, GridItem, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import millify from 'millify';
import Link from 'next/link';
import React from 'react'
import { useGetCryptosQuery } from '../../services/cryptoapi'
import CryptoHome from '../Crypto/CryptoHome';
import NewsHome from '../News/NewsHome';

function HomeStats() {
    const { data, isFetching } = useGetCryptosQuery(10);
    if (isFetching)
        return <div>Loading</div>

    return (
        <Box px={[2, 2, 7, 7]} bgColor='white' >
            <Text py={6} fontWeight={'semibold'} fontSize={'2xl'}>Global Crypto Stats</Text>
            <Grid rowGap={8} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']} columnGap={60}>
                <GridItem colSpan={1} >

                    <Flex flexDir={'column'} gap={0}>
                        <Text textColor={'gray.400'}>Total crypto currencies</Text>
                        <Text fontSize={'xl'}>{millify(data.data.stats.total)}</Text>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1} >

                    <Flex flexDir={'column'} gap={0}>
                        <Text fontSize={'medium'} textColor={'gray.400'}>Total Exchanges</Text>
                        <Text fontSize={'xl'}>{millify(data.data.stats.totalExchanges)}</Text>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1} >

                    <Flex flexDir={'column'} gap={0}>
                        <Text textColor={'gray.400'}>Total MarketCap</Text>
                        <Text fontSize={'xl'}>{millify(data.data.stats.totalMarketCap)}</Text>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1} >

                    <Flex flexDir={'column'} gap={0}>
                        <Text textColor={'gray.400'}>Total Markets</Text>
                        <Text fontSize={'xl'}>{millify(data.data.stats.totalMarkets)}</Text>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1} >

                    <Flex flexDir={'column'} gap={0}>
                        <Text textColor={'gray.400'}>Daily Volume</Text>
                        <Text fontSize={'xl'}>{millify(data.data.stats.total24hVolume)}</Text>
                    </Flex>
                </GridItem>

            </Grid>

            <HStack py={8} justifyContent={'space-between'} >
                <Text fontSize={['2xl', '2xl', '2xl', '2xl']} fontWeight='semibold'>Top 10 Cryptocurrencies in the world</Text>
                <Link href={'/crypto'}><a> <Text fontSize={'2xl'} fontWeight='semibold' textColor={'blue'}>Show More</Text></a></Link>
            </HStack>
            <CryptoHome simplified />
            <HStack py={8} justifyContent={'space-between'}>
                <Text fontSize={'2xl'} fontWeight='semibold'>Latest Crypto News</Text>
                <Link href={'/news'}><a> <Text fontSize={'2xl'} fontWeight='semibold' textColor={'blue'}>Show More</Text></a></Link>

            </HStack>
            <NewsHome simplified />
        </Box>
    )
}

export default HomeStats