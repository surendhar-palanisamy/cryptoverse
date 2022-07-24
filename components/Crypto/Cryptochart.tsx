import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'


function Cryptochart({ history, price, name }: any) {
    var coin_price = [];
    var coin_timestamp = []
    ChartJS.register(...registerables)
    for (let i = 0; i < history?.data.history.length; i += 1) {
        coin_price.push(history.data.history[i].price)
        // let hi = new Date(history.data.history[i].timestamp)
        var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        d.setUTCSeconds(history.data.history[i].timestamp);
        d.toLocaleTimeString()
        var k = new Date(d).toLocaleString()
        coin_timestamp.push(k)

        console.log(coin_timestamp)
        // console.log(new Date(history.data.history[i].timestamp).toLocaleDateString())
    }
    coin_timestamp.reverse()
    const data = {
        labels: coin_timestamp,
        datasets: [{
            label: 'Price',
            data: coin_price,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
            tension: 0.1
        }]
    };

    console.log(history, price, name)
    return (
        <Box >
            <HStack display={['none', 'none', 'flex', 'flex']} fontWeight={'semibold'} py={6} justifyContent={'space-between'}>
                <Text alignItems={'center'} fontSize={'xl'} textColor={'blue.500'}>{name} Price Chart</Text>
                <HStack >
                    <Text>{history?.data.change}%</Text>
                    <Text>Current Price : ${price}</Text>
                </HStack>

            </HStack>
            <Box w={['100vw', 'full', 'full', '']}> <Line data={data} /></Box>

        </Box>
    )
}

export default Cryptochart