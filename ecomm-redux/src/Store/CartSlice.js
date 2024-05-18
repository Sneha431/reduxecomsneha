import {
  createSlice
} from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
      cartdata: [],
      totalamount:0
  },
  reducers: {
      add(state, action) {

          const duplicate = state.cartdata.find((item) => item.id === action.payload.id)
          if (duplicate) {
              state.cartdata.map((item) => {
                  if (item.id === action.payload.id)
                      item.quantity = item.quantity + 1


              })
          } else {

              state.cartdata.push(action.payload)

          }

  state.totalamount=calculateTotal(state.cartdata);
      },
      updatecart(state, action) {
          const {
              quantity: qty,
              id,
              amount
          } = action.payload;
          console.log(qty, id);
          state.cartdata.map((item) => {
              if (item.id === id && item.quantity >= 1)
{
                  item.quantity = qty + amount}
                else if(item.quantity < 1){
                  state.cartdata = state.cartdata.filter((item) => item.id !== id)
                  }


          })
     state.totalamount=calculateTotal(state.cartdata);

      },
      removefromcart(state, action) {
        
          state.cartdata = state.cartdata.filter((item) => item.id !== action.payload)
         state.totalamount=calculateTotal(state.cartdata);
         
      },
      removeall(state, action) {
         state.totalamount=0.00;
         state.cartdata = [];
      }
     
  }
})
export const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const {
  add,
  removefromcart,
  removeall,
  updatecart,caltotal
} = cartSlice.actions;
export default cartSlice.reducer;