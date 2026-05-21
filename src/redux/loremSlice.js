import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Redux Action: Fetch data from the API
export const fetchLoremData = createAsyncThunk(
  'lorem/fetchData',
  async () => {
    // Replace this URL with https://api.lorem.com/ipsum if it becomes active
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  }
);

// Redux Reducer: Manages loading, error handling, and fetched content
const loremSlice = createSlice({
  name: 'lorem',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoremData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoremData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLoremData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default loremSlice.reducer;