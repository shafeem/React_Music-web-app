import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    number:null,
    email :null,
    token :null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setLogin:(state,action) =>{
            state.number = action.payload.number;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        setLogout:(state) =>{
            state.number = null,
            state.email = null,
            state.token = null
        }
    }
})

export const {setLogin,setLogout} = userSlice.actions;

export default userSlice.reducer;