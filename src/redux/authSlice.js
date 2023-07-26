import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import Cookies from "js-cookie";
import { refreshToken } from "./api/api";

export const Login = createAsyncThunk('login/Login', async (data) => {
    const response = await authApi.getToken(data);
    const { access, refresh } = response
    Cookies.set('accessToken', access, );
    Cookies.set('refreshToken', refresh, );
    return response;
  });
  

export const AccesToken = createAsyncThunk('login/AccesToken', async () => {
    const response = await refreshToken()
     if (response) { 
        return response
     }
        return null
     
})

export const SetNewAccount = createAsyncThunk('login/SetNewAccount', async (data) => {
    const response = await authApi.setAccount(data)
    return response; 
})


const authSlice = createSlice({
    name: 'login',
    initialState: {
      authUser:[],
      isAuth:false,
    loading: false,
    error: false,
    },

    reducers: {
        Logout (state, action) {
            Cookies.remove('accessToken')
            Cookies.remove('refreshToken')
            state.authUser = []
            state.isAuth = false
        },
    },
    
    extraReducers : (builder) => { 

        builder.addCase(Login.pending, (state, action) => { 
            state.loading = true
        })
        builder.addCase(Login.fulfilled, (state, action) => {
            if (action.payload && action.payload.user) {
            state.authUser = action.payload.user
            state.loading = false
            state.isAuth = true
            }
        })
        builder.addCase(Login.rejected, (state, action) => { 
            state.error = action.error.message;
        })

        builder.addCase(SetNewAccount.fulfilled , (state, action) => {
            state.authUser = action.payload
            state.isAuth = true
        })

        builder.addCase(AccesToken.fulfilled, (state, action) => { 
            if (action.payload && action.payload.user){
            state.authUser = action.payload.user
            state.isAuth = true
        }
    
        })

        builder.addCase(AccesToken.rejected, (state, action) => {
            if (action.error.message === '401') {
             state.error = true
            }
        })
    }
    
})

export const {Logout} = authSlice.actions

export default authSlice.reducer
