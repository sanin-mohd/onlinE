import {configureStore} from '@reduxjs/toolkit'

import userDataReducer from './user/UserDataSlice'

export default configureStore({
    reducer: {
        user_data:userDataReducer
    }
})