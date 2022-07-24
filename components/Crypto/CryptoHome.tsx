import { Avatar, Box, Grid, GridItem, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react';
import millify from 'millify';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { useGetCryptosQuery } from '../../services/cryptoapi';

function CryptoHome(props: any) {
    const count = props.simplified ? 10 : 100;

    const { data, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setcryptos] = useState<any>(data?.data?.coins)
    const [searchterm, setsearchterm] = useState()
    // useEffect(() => {
    //     setcryptos(data)
    // }, [searchterm, cryptos])
    // console.log(data)
    if (isFetching) return <div>Loading</div>



    return (
        <Box>

            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={3}>
                {/* {!props.simplified && <GridItem p={4} colSpan={3} borderColor={'gold'}>
                    <VStack> <Input placeholder='Search' w={40} onChange={(e: any) => setsearchterm(e.target.value)} /> </VStack>
                </GridItem>} */}
                {data?.data?.coins?.map((currency: any) => {
                    return (
                        <GridItem p={'3'} shadow='xl' key={currency.uuid} rounded='lg' _hover={{ bgColor: 'gray.50' }}>
                            <Link href={`/crypto/${currency.uuid}`}>
                                <a>
                                    <HStack pt={2} pb={'6'} justifyContent={'space-between'}>
                                        <Text fontWeight={'semibold'}>{currency.rank}.   {currency.name}</Text>
                                        <Avatar size={'sm'} src={currency.iconUrl} />
                                    </HStack>
                                    <Stack gap={1}>
                                        <Text>Price :  {millify(currency.price)}</Text>
                                        <Text>Market Cap : {millify(currency.marketCap)}</Text>
                                        <Text>Daily Change : {millify(currency.change)}</Text>
                                    </Stack>
                                </a>
                            </Link>
                        </GridItem>)
                })

                }

            </Grid>


        </Box>
    )
}
export default CryptoHome