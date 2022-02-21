import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../../context/cartContext';


import HomeIcon from '@mui/icons-material/Home';
import ReplayIcon from '@mui/icons-material/Replay';
import Button from '@mui/material/Button';
import CartItem from '../CartItem';
import Layout from '../layout/Layout';

const CartPage = (props) => {
  const { shoppingCart, emptyShoppingCart, total } = useShoppingCart();

  return (
    <Layout>
      <Box p={4}>
        {shoppingCart.map(item => (
          <Box mb={4} key={item.id}>
            <CartItem
              cartItem={{
                id: item.id,
                title: item.title,
                image: item.image,
                quantity: item.quantity,
                price: item.price,
              }}
            />
          </Box>
        ))}
        <Box display="flex" justifyContent="center" mb={2}>
          <Typography>Total: ${ total / 100}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Button sx={{width: '220px', color: "white", backgroundColor: "black"}} variant="contained">Checkout</Button>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Button sx={{width: '220px', color: "white", backgroundColor: "black"}} startIcon={<ReplayIcon />} variant="contained" onClick={emptyShoppingCart}>Empty cart</Button>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Link to="/">
            <Button sx={{width: '220px', color: "white", backgroundColor: "black"}}  startIcon={<HomeIcon />} variant="contained">Back to Main Page</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  )
};

export default CartPage;
