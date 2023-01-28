import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {Button, Stack} from '@chakra-ui/react';
import { Link} from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const {cart:{items:productList}} = useSelector((state) => state);
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
 
  return (
    <div className="home">
      {productList.map((i) => (
        <div>
          <Stack spacing={4} direction='row' align='center'>
            <Button colorScheme={'purple'} type={'submit'} display={"flex"} 
        flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
        <Link to={`/product/${i.id}`}>About {i.name} </Link>
      </Button>
  </Stack>
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      </div>

      ))}
       <div>

 </div>
 <div>

 </div>
    </div>
   
  );
};

const ProductCard = ({ name, id, price, handler,imgSrc}) => {

  return(
    <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>

  )
  
 
  };

export default Home;