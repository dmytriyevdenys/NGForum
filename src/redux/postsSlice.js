import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postAPi } from "./api/postsApi";

export const getPosts = createAsyncThunk ('posts/getPosts', async () =>  {
 return await postAPi.getPosts()
})

export const setNewPost = createAsyncThunk('posts/setNewPost', async (data) => {
  const response =  await postAPi.setPost(data);
  return response
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    count: 0,
    nextPage:'',
    previousPage:'',
    posts:[],
    myPosts:[],
    loading: false,
    error: null, 
  },
  reducers: {
      getMyPosts (state, action) {
        const myPosts = state.posts.map(post => {
          if (post.owner === action.payload.userId) {
            return post
          }
        });
        return {...state, myPosts };
      } 
      
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

    builder.addCase(setNewPost.pending, (state) => {
      state.loading = true
    })
    builder.addCase(setNewPost.fulfilled, (state, action) => { 
    
        state.posts =[...state.posts,action.payload]
        state.loading = false

    })
  }
});

export const {getMyPosts} = postsSlice.actions;

export default postsSlice.reducer;


