import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'
import customFetch from "../../utils/axios";
import { getUserFromLocalStorage , addUserToLocalStorage,removeUserFromLocalStorage} from "../../utils/localStrorage";


const initialState = {
    isLoading: false,
    user:getUserFromLocalStorage()
}

export const registerUser = createAsyncThunk('user/registerUser',
async(user,thunkAPI) => {
try {
    const resp= await customFetch.post('/auth/register', user)
    return resp.data;
    console.log(resp);
    console.log(user);
} catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
    console.log('error');
}
}
)
export const loginUser = createAsyncThunk('user/loginUser',
async(user,thunkAPI) => {
try {
    const resp= await customFetch.post('/auth/login', user)
    return resp.data;
    console.log(resp);
    console.log(user);
} catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
    console.log('error');
}
}
)


const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(registerUser.fulfilled, (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Hello There ${user.name}`);
          })
          .addCase(registerUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
          })
          .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(loginUser.fulfilled, (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Wellcome to ${user.name}`);
          })
          .addCase(loginUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
          })
   }
})


export default userSlice.reducer