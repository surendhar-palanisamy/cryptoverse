import { Avatar, Box, Grid, GridItem, HStack, Image, MenuOptionGroup, Select, Stack, Text } from '@chakra-ui/react'
import { fdatasyncSync } from 'fs'
import moment from 'moment'
import Link from 'next/link'


import React from 'react'
import { useGetCryptosQuery } from '../../services/cryptoapi'
import { useGetCryptoNewsQuery } from '../../services/newsapi'

function NewsHome(props: any) {
    const [select_value, set_select_Value] = React.useState('Cryptocurrency');
    const { data, isFetching } = useGetCryptoNewsQuery({ newsCategory: select_value, count: props.simplified ? 10 : 100 })
    const { data: fetched_coin_data } = useGetCryptosQuery(100)

    if (isFetching) return <div>Loading</div>

    return (
        <Box pt={10} px={3}>
            <Select
                onChange={(e: any) => set_select_Value(e.target.value)}
                value={select_value} my={3} w={'40'} placeholder='Select currency'>

                {fetched_coin_data?.data?.coins.map((coin: any) => {

                    return (

                        <option key={coin.name} value={coin.name}>{coin.name}</option>



                    )
                })}
            </Select>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
                {data.value.map((news: any, i: any) => {
                    return (
                        <GridItem p={5} shadow={'lg'} key={i}>
                            {/* 
                            <Link href={news.url}><a>Button</a></Link> */}


                            <Stack rowGap={3}>
                                <HStack h={['', '', '', '150']} alignItems={'flex-start'} justifyContent={'space-between'}>
                                    <Text fontSize={'md'} fontWeight={'semibold'}>{news.name}</Text>
                                    <Image h={[50, 50, 50, 100]} w={[50, 50, 50, 100]} src={news.image?.thumbnail?.contentUrl} fallbackSrc='https://academy-public.coinmarketcap.com/optimized-uploads/50d421f67d8e403583dec37af2878442.jpg' />
                                </HStack>

                                <Text h={['', '', '', '250']}>
                                    {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                                </Text>



                                <HStack fontWeight={'semibold'} justifyContent={'space-between'}>
                                    <HStack>
                                        <Avatar bgColor={'white'} size='sm' src={news.provider[0]?.image?.thumbnail?.contentUrl} name='news' />
                                        <Text fontSize={'xs'}>{news.provider[0]?.name}</Text>
                                    </HStack>
                                    <Text fontSize={'xs'}>  {moment(news.datePublished).startOf('seconds').fromNow()}</Text>
                                </HStack></Stack>


                        </GridItem>
                    )
                })}
            </Grid >
        </Box >

    )
}

export default NewsHome