import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk action to fetch data from the API
export const fetchLoremData = createAsyncThunk(
  'lorem/fetchLoremData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.lorem.com/ipsum');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: {
    Title: '',
    Body: ''
  },
  isLoading: false,
  error: null,
};

const loremSlice = createSlice({
  name: 'lorem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoremData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLoremData.fulfilled, (state, action) => {
        state.isLoading = false;
        // Map payload dynamically in case the API uses lowercase keys
        state.data = {
          Title: action.payload.Title || action.payload.title || 'Untitled',
          Body: action.payload.Body || action.payload.body || 'No content available.',
        };
      })
      .addCase(fetchLoremData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch data';
      });
  },
});

export default loremSlice.reducer;