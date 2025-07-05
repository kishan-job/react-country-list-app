import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
  "countriesSlice/fetchCountries",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        " https://restcountries.com/v2/all?fields=name,region,flag"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok ");
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch countries."); // send custom error message if error.message is truth value. we can also return error.message without this reejctWithVAlue utility class
    }
  }
);

const countriesSlice = createSlice({
  name: "countriesSlice",
  initialState: {
    allCountries: [],
    filteredCountries: [],
    displayedCountries: [],
    continentFilter: "all",
    status: "idle",
    loadLimit: 12,
    loadIncrement: 12,
    error: null,
  },

  reducers: {
    setContinentFilter: (state, action) => {
      state.continentFilter = action.payload;
      state.loadLimit = 12;

      state.filteredCountries = allCountries.filter((country) =>
        state.continentFilter === "all"
          ? true
          : country.region === continentFilter
      );

      state.displayedCountries = state.filteredCountries.slice(
        0,
        state.loadLimit
      );
    },

    loadMoreCountries: (state) => {
      state.loadLimit += state.loadIncrement;
      state.displayedCountries = state.filteredCountries.slice(
        0,
        state.loadLimit
      );
    },

    resetLoadLimit: (state) => {
      (state.loadLimit = 12),
        (state.displayedCountries = state.filteredCountries(
          0,
          state.loadLimit
        ));
    },
  },
  extraReducers: (builder) => {
    //Within the extraReducers function, the builder object is provided by Redux Toolkit. Its primary purpose is to allow you to define how your slice's state should react to different actions, especially the lifecycle actions of asynchronous thunks created with createAsyncThunk.

    //The addCase() function is a method of this builder object, and it serves the following purpose:
    // Handles Specific Action Types: addCase() is used to listen for and handle a specific action type. You provide the action type as the first argument to addCase(). This action type is often one of the three automatically generated action types (pending, fulfilled, rejected) of a thunk. You can also use it to handle other custom actions.
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = " Succeed";
        state.allCountries = action.payload;
        state.filteredCountries = action.payload;
        state.displayedCountries = action.payload.slice(0, state.loadLimit);
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;

export const { setContinentFilter, loadMoreCountries, resetLoadLimit } =
  countriesSlice.actions;
