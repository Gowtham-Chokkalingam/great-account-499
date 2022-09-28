import { Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

const MidContent = () => {
  return (
    <Grid w={'80%'}
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato'>

    <Image src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1)-p-1080.png'></Image>
  </GridItem>
  <GridItem colSpan={2} bg='papayawhip'>
  <Image src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1)-p-1080.png'></Image>
  </GridItem>
  <GridItem colSpan={2} bg='papayawhip'>
  <Image src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1)-p-1080.png'></Image>
  </GridItem>
  <GridItem colSpan={4} bg='tomato'>
  <Image src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1)-p-1080.png'></Image>
  </GridItem>
</Grid>
  )
}

export default MidContent