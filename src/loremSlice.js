import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLorem=createAsyncThunk(
    "lorem/fetchLorem",
    async(__dirname,{rejectWithValue})=>{
        const primary="https://api.lorem.com/ipsum";

        try{
            const res=await fetch(primary);

            if(!res.ok){
                throw new Error (`Primary API returned ${res.status}`);
            }

            const contentType=res.headers.get("content-type")||"";
            if(contentType.includes("application/json")){
                const data = await res.json();

                 if (data.title && data.body) {
          return { title: data.title, body: data.body };
        } else if (data.text) {
          return { title: "Lorem Ipsum", body: data.text };
        } else {
          // fallback: stringify
          return { title: "Lorem Ipsum", body: JSON.stringify(data) };
        }
      } else {
        // plain text
        const text = await res.text();
        return { title: "Lorem Ipsum", body: text };
      }
    } catch (errPrimary) {
      // Fallback to Loripsum (public, simple)
      try {
        const fallback = "https://loripsum.net/api/1/short/plaintext";
        const fallbackRes = await fetch(fallback);
        if (!fallbackRes.ok) {
          throw new Error("Fallback also failed");
        }
        const fallbackText = await fallbackRes.text();
        return { title: "Lorem Ipsum (fallback)", body: fallbackText };
      } catch (errFallback) {
        // final failure
        return rejectWithValue({
          message:
            "Unable to fetch lorem text from primary or fallback APIs.",
          details: {
            primaryError: errPrimary?.message,
            fallbackError: errFallback?.message,
          },
        });
            }
        }
    }
);


const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    loading: false,
    error: null,
    data: null // {title, body}
  },
  reducers: {
    // no manual reducers required for this task, but keeping placeholder
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchLorem.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload?.message || action.error?.message;
      });
  },
});

export default loremSlice.reducer;