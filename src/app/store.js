import { configureStore } from '@reduxjs/toolkit'
import cartreducer from '../features/cart/cartslice'

export default configureStore({
  reducer: {
    cart:cartreducer
  }
})