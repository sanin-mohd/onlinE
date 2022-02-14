import {createSlice} from '@reduxjs/toolkit'

export const userDataSlice = createSlice(
    {
        name : 'user_data',
        initialState : {
            value:localStorage.getItem('user_data') ? JSON.parse(localStorage.getItem('user_data')):{
                acc: '',
                account_holder_name: '',
                bank: '',
                courses_created: '',
                courses_enrolled: '',
                dp: "",
                bio:'',
                email: "",
                id: '',
                ifsc: '',
                interests: "",
                is_active: '',
                is_superuser: '',
                joined_date: "",
                last_login: "",
                mobile: "",
                username: "",
                wallet_balance: ''
            }
        },
        reducers :{
            change_user_data :(state,action) =>{
                state.value = action.payload.user_data
            }
        }
    }
)

export const {change_user_data} = userDataSlice.actions
export default userDataSlice.reducer