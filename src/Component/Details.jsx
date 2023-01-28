import { Box, Stack, Image, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'

const Details = () => {
  const { cart: { items: productList } } = useSelector((state) => state);
  let { id } = useParams();
  const initialProduct = {
    imgSrc:'',
    name:'',
    price:'',
    description:''
  }
  const [product, setProduct] = useState(initialProduct)
  useEffect(() => {

    const p = productList.find((item) => item.id === id);
  if(p){
    setProduct(p)
  }else{
    setProduct(initialProduct)
  }
    console.log({productId:id, p})
  }, [id])

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
          {product?.name|| 'N/A'}
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Box width={'35%'} display={'flex'} justifyContent={'flex-start'} object-fit={'cover'}>
          <Image src={product?.imgSrc} />
          </Box>
          

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            textAlign={'justify'}
            m={'4'}
            width={'50%'}
          >
            {product?.description|| 'N/A'}
          </Text>
        </Stack>



      </Box>

      <button className='buy' onClick={() => alert("Payment Successful")}> Buy Product: ${product?.price || 'N/A'}  </button>

    </>


  )
}

export default Details
