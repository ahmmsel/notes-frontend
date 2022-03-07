import { configureStore } from "@reduxjs/toolkit"

import authSlice from "../features/auth/auth-slice"
import noteSlice from "../features/note/note-slice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    note: noteSlice
  }
})

export default store