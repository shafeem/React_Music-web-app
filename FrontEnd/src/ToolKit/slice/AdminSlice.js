import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token : null,
    email : null,
};

export const AdminSlice = createSlice ({
    name:'admin',
    initialState,
    reducers:{
        setLogin:(state,action) =>{
            state.token = action.payload.token;
            state.email = action.payload.email;
        },
        setLogout:(state) =>{
            state.token = null;
            state.email = null;
        },
    }
})

export const {setLogin,setLogout} = AdminSlice.actions;

export default AdminSlice.reducer;