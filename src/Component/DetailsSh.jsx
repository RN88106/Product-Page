import React from 'react'
import { Box, Stack, Image, Text, Heading } from '@chakra-ui/react' 

const DetailsSh = () => {
  return (
    <>

    <Box>

<Heading
          textTransform={'uppercase'}
          pt="8"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Shoes Details
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={"https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260"} h={['50', '250']} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={"justify"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
          </Text>
        </Stack>

        
      
        </Box>

        <button className='shbuy' onClick={() => alert("Payment Successful")}> Buy Product : $490 </button>

      </>
  )
}

export default DetailsSh
