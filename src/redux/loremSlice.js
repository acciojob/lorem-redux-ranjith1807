// Inside src/redux/loremSlice.js
export const fetchLoremData = createAsyncThunk(
  'lorem/fetchData',
  async () => {
    // FIX: Switch back to the required API URL so Cypress can intercept it
    const response = await fetch('https://api.lorem.com/ipsum');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  }
);