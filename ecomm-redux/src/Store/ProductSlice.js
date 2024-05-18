import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { StatusCode } from "../Util/StatusCode";

const initialState = {
  data:[],
  status:"idle",
  searchdata:""
};
const productSlice = createSlice({
  name:"products",
  initialState,
  reducers:{
  fetchsearchProducts(state,action)
  {
    state.searchdata=action.payload
  }
  },
  extraReducers:(builder)=>{
    builder.addCase(getProducts.pending,(state,action)=>{
  state.status=StatusCode.loading
}).addCase(getProducts.fulfilled,(state,action)=>{
   state.data=action.payload
   state.status=StatusCode.idle
}).addCase(getProducts.rejected,(state,action)=>{
  
   state.status=StatusCode.error
})
  }
})


export const {fetchProducts,fetchsearchProducts}=productSlice.actions;
export default productSlice.reducer;


export const getProducts = createAsyncThunk("products/get",async()=>{
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  const newresult = result.map((item) => ({ ...item, quantity: 1 }));
  console.log(newresult);
  return newresult;
})
  
// export function getProducts()
// {
//   return async function getProductsThunk(dispatch,getState)
//   {
// const data = await fetch("https://fakestoreapi.com/products");
// const result = await data.json();
// dispatch(fetchProducts(result));

  
//   }
// }