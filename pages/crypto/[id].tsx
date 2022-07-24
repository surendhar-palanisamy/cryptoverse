import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Grid, GridItem, HStack, Link, Select, Stack, Text, VStack } from '@chakra-ui/react'
import HTMLReactParser from 'html-react-parser'
import millify from 'millify'

import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
import Cryptochart from '../../components/Crypto/Cryptochart'
import { useGetDetailsQuery } from '../../services/cryptodetailsapi'
import { useGetHistoryQuery } from '../../services/cryptohistory'

function Cryptodetail() {
    const router = useRouter()
    const id = router.query.id
    const time = ['1h', '3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y']
    const [timePeriod, settimeframe] = useState('7d')
    const { data, isFetching } = useGetDetailsQuery(router.query.id)
    const { data: coinhistory, isFetching: isHistoryFetching } = useGetHistoryQuery({ id, timePeriod })
    if (isFetching) return (<div>Loading</div>)
    return (
        <Box py={5}>

            <Flex fontSize={'xx-large'} fontWeight={'semibold'} justifyContent={'center'}> {data.data.coin.name}  Details</Flex>

            <Select ml={[0, 0, 20, 20]} onChange={(e: any) => { settimeframe(e.target.value) }} size={'sm'} w='40'>

                {time.map((period: any) => {
                    return (
                        <option key={period} value={period}>{period}</option>
                    )
                })}
            </Select>

            <Grid rowGap={12} justifyContent={'space-between'} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']} >
                <GridItem mx={['', '', '', '20']} colSpan={[1, 1, 2, 2]} >


                    <Cryptochart history={coinhistory} price={millify(data.data.coin.price)} name={data.data.coin.name} />



                </GridItem>
                <GridItem colSpan={[1, 1, 1, 1]} >
                    <VStack>
                        <Stack gap={4}>
                            <Stack gap={0} py={1}>
                                <Text fontWeight={'semibold'} fontSize={"xl"}>{data.data.coin.name} Value Statistics</Text>
                                <Text fontSize={'sm'}>An overview showing the stats of the {data.data.coin.name}</Text>
                            </Stack>
                            <HStack justifyContent={'space-between'}>
                                <Text>Price to USD</Text>
                                <Text fontWeight={'bold'}>${millify(data.data.coin.price)}</Text>
                            </HStack>
                            <HStack justifyContent={'space-between'}>
                                <Text>Rank</Text>
                                <Text fontWeight={'bold'}>{millify(data.data.coin.rank)}</Text>
                            </HStack>
                            <HStack justifyContent={'space-between'}>
                                <Text>All Time High</Text>
                                <Text fontWeight={'bold'}>{millify(data.data.coin.allTimeHigh.price)}</Text>
                            </HStack>

                            <HStack justifyContent={'space-between'}>
                                <Text>Market Cap</Text>
                                <Text fontWeight={'bold'}>{millify(data.data.coin.marketCap)}</Text>
                            </HStack>
                            <HStack justifyContent={'space-between'}>
                                <Text>Number of Exchanges</Text>
                                <Text fontWeight={'bold'}>{millify(data.data.coin.numberOfExchanges)}</Text>
                            </HStack>
                        </Stack>
                    </VStack>

                </GridItem>
                <GridItem colSpan={1}>

                    <VStack>
                        <Stack gap={4}>
                            <Stack gap={0} py={1}>
                                <Text fontSize={'xl'} fontWeight='semibold'>Other Statistics of {data.data.coin.name}</Text>
                                <Text fontSize={'sm'} >An overview showing the stats of the {data.data.coin.name}</Text>

                            </Stack>

                            <HStack justifyContent={'space-between'}>
                                <Text>Number of Markets</Text>
                                <Text fontWeight={'bold'}>{millify(data.data.coin.numberOfMarkets)}</Text>
                            </HStack>
                            <HStack justifyContent={'space-between'}>
                                <Text>Confirmed Supply</Text>
                                <Text fontWeight={'bold'}>{data?.data.coin.supply.confirmed ? <div>Yes</div> : <div>No</div>}</Text>
                            </HStack>
                            <HStack justifyContent={'space-between'}>
                                <Text>Circulating Supply</Text>
                                <Text fontWeight={'bold'}>{millify(data.data.coin.supply.circulating)}</Text>
                            </HStack>
                            <HStack justifyContent={'space-between'}>
                                <Text>Total Supply</Text>
                                <Text fontWeight={'bold'}>{data?.data.coin.supply.total ? millify(data?.data.coin.supply.total) : <div>NULL</div>}</Text>
                            </HStack>
                        </Stack>
                    </VStack>

                </GridItem>
                <GridItem >
                    <VStack>
                        <Stack w={['72', '96', 'fit-content', 'fit-content']} pl={['', '', '', '32']} fontSize={'sm'} >
                            <Text fontSize={'xl'} fontWeight={'semibold'}>What is {data.data.coin.name}?</Text>
                            <Text className='primary'
                            >{HTMLReactParser(data.data.coin.description)}
                            </Text>

                        </Stack>
                    </VStack>
                </GridItem>
                <VStack >
                    <Stack >
                        <Text fontSize={'xx-large'} fontWeight={"semibold"}>{data.data.coin.name} Links</Text>

                        {data?.data.coin.links.map((link: any) => {
                            return (
                                <Box key={link.name} _hover={{
                                    backgroundColor: 'gray.100'

                                }}>
                                    <HStack gap={12} fontWeight={'semibold'} key={link.name} justifyContent={'space-between'}>
                                        <Text>{link.type}</Text>
                                        <Link textColor={'blue.400'} href={link.url} isExternal>
                                            {link.name} <ExternalLinkIcon mx='2px' />
                                        </Link>
                                    </HStack>
                                    <Divider h={4} />
                                </Box>
                            )
                        })}


                    </Stack>
                </VStack>
            </Grid>
        </Box>
    )
}
export default Cryptodetail