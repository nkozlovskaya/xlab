import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { addressInitialState } from "../../types/addressInitialState";
import { IAddress } from "../../types/addressType";
import { searchAddress } from "../actions/searchAddressAction";

export interface AddressState {
  addresses: IAddress[];
  loading: boolean;
  error: string;
}

const initialState: AddressState = {
  addresses: [],
  loading: false,
  error: "",
};

export const linkSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchAddress.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        searchAddress.fulfilled,
        (state, action) => {
          state.addresses = action.payload;
          state.loading = false;
        }
      )
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

const addressReducer = linkSlice.reducer;
export default addressReducer;
