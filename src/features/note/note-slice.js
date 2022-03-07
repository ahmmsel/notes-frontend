import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import noteAPI from "../api/note-api"

const initialState = {
  notes: [],
  note: {},
  loading: false,
  error: false,
  success: false,
  message: ""
}

export const createNote = createAsyncThunk("note/create", async (noteData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await noteAPI.createNote(noteData, token)
  } catch (error) {
    const message = error.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const allNotes = createAsyncThunk("note/notes", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await noteAPI.allNotes(token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const singleNote = createAsyncThunk("note/singleNote", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await noteAPI.singleNote(id, token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteNote = createAsyncThunk("note/delete", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await noteAPI.deleteNote(id, token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const updateNote = createAsyncThunk("note/update", async ({id, noteData}, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await noteAPI.updateNote(id, noteData, token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message
    return thunkAPI.rejectWithValue(message)
  }
})

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    reset(state) {
      return initialState
    }
  },
  extraReducers: builder => {
    builder
    .addCase(createNote.pending, (state) => {
      state.loading = true
    })
    .addCase(createNote.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.success = true
      state.notes.push(action.payload)
    })
    .addCase(createNote.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.success = false
      state.message = action.payload
    })
    .addCase(allNotes.pending, (state) => {
      state.loading = true
    })
    .addCase(allNotes.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.success = true
      state.notes = action.payload
    })
    .addCase(allNotes.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.success = false
      state.message = action.payload
    })
    .addCase(singleNote.pending, (state) => {
      state.loading = true
    })
    .addCase(singleNote.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.success = true
      state.note = action.payload
    })
    .addCase(singleNote.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.success = false
      state.message = action.payload
    }) 
    .addCase(deleteNote.pending, (state) => {
      state.loading = true
    })
    .addCase(deleteNote.fulfilled, (state, action) => { 
      state.loading = false
      state.error = false
      state.success = true
      state.notes = state.notes.filter(note => note._id !== action.payload.id)
    })
    .addCase(deleteNote.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.success = false
      state.message = action.payload
    })
    .addCase(updateNote.pending, (state) => {
      state.loading = true
    })
    .addCase(updateNote.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.success = true
      state.notes.map(note => {
        if (note._id === action.payload._id) {
          for (const key in note) {
            note[key] = action.payload[key]
          }
        }
        return note
      })
    })
    .addCase(updateNote.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.success = false
      state.message = action.payload
    })
  }
})

export const { reset } = noteSlice.actions

export default noteSlice.reducer