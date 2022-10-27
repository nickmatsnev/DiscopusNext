import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface regState{
    name: string,
    surname: string,
    email: string,
    password: string
}

const initialState = {
    name: "noname",
    surname: "nosurname",
    email: "no@email.com",
    password: "nopass"
}

const regSlice = createSlice({
    name: 'regSlice',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>){
            state.name = action.payload
        },
        setSurname(state, action: PayloadAction<string>){
            state.surname = action.payload
        },
        setEmail(state, action: PayloadAction<string>){
            state.email = action.payload
        },
        setPassword(state, action: PayloadAction<string>){
            state.password = action.payload
        },
    }
})

export const { setName, setSurname, setEmail, setPassword } = regSlice.actions
export default regSlice.reducer