import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddress } from "../../types/addressType";

export const searchAddress = createAsyncThunk<
  IAddress[],
  string,
  { rejectValue: string }
>("address/searchAddress", async (value, { rejectWithValue }) => {
  const access_token = "c9f7646ae93f83d43cb0e665919e44d57a7678ff";
  const secret = "74e86620ec5bb321cabe13ddfc12c036f6f1ad7d";
  const response = await fetch(
    `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Token ${access_token}`,
        "X-Secret": `${secret}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ query: value }),
    }
  );
  const res = await response.json();

  if (!response.ok) {
    return rejectWithValue("Can't add task. Server error.");
  }

  return res.suggestions as IAddress[];
});
