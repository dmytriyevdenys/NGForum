import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postAPi } from "./api/postsApi";

export const getPosts = createAsyncThunk ('posts/getPosts', async () =>  {
 return await postAPi.getPosts()
 
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    count: 0,
    nextPage:'',
    previousPage:'',
    posts:[],
    loading: false,
    error: null, 
  },
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true ;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      return { 
        count: action.payload.count,
        nextPage:action.payload.nextPage,
        posts: action.payload.results,
        loading: false
      }});

  }
});


export default postsSlice.reducer;


