import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  // tagTypes used to define the types of data that will be fetching from our API
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});
