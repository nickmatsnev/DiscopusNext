import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppState } from "./store"

export interface RegState{
    name: string,
    surname: string,
    email: string,
    password: string
}

const initialState: RegState = {
    name: "noname",
    surname: "nosurname",
    email: "no@email.com",
    password: "nopass"
}

const regSlice = createSlice({
    name: 'reg',
    initialState,
    reducers: {
        setName(state, action){
            state.name = action.payload
        },
        setSurname(state, action){
            state.surname = action.payload
        },
        setEmail(state, action){
            state.email = action.payload
        },
        setPassword(state, action){
            state.password = action.payload
        },
    }
})

export const { setName, setSurname, setEmail, setPassword } = regSlice.actions
export const selectEmailState = (state: AppState) => state.reg.email;
export const selectNameState = (state: AppState) => state.reg.email;
export const selectSurnameState = (state: AppState) => state.reg.email;
export const selectPasswordState = (state: AppState) => state.reg.password;

export default regSlice.reducer