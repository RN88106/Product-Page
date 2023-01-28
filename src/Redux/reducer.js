import { createReducer } from "@reduxjs/toolkit";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

export const cartReducer = createReducer(
  
  {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
    items:[
      {
        name: "Mac Book",
        price: 12000,
        imgSrc: img1,
        id: "asdhajsdbhjabhsjdfdfv",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quis voluptatum at dolor eligendi alias earum ratione minus eaque sunt inventore, quidem quos voluptates, excepturi dignissimos nesciunt maxime. Cumque, consectetur.'
      },
      {
        name: "Black Shoes",
        price: 490,
        imgSrc: img2,
        id: "sdjfdlaajsdbhjabhsjdfdfv",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quis voluptatum at dolor eligendi alias earum ratione minus eaque sunt inventore, quidem quos voluptates, excepturi dignissimos nesciunt maxime. Cumque, consectetur.'
      },
    ]
   
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.id === item.id);

      if (isItemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },

    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
      }
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },


    calculatePrice: (state) => {
      let sum = 0;
      state.cartItems.forEach((i) => (sum += i.price * i.quantity));
      state.subTotal = sum;
      state.shipping = state.subTotal > 1000 ? 0 : 200;
      state.tax = +(state.subTotal * 0.18).toFixed();
      state.total = state.subTotal + state.tax + state.shipping;
    },
  }
);