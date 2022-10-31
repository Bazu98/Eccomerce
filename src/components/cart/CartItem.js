import { Divider, Typography } from '@mui/material'
import React from 'react'

const CartItem = ({ CartItem }) => {
  return (
    <div>
        <Typography>{CartItem.product?.name}</Typography>
        <Typography>{CartItem.product?.price}</Typography>
        <Typography>{CartItem.quantity}</Typography>
        <Divider />
    </div>
  )
}

export default CartItem