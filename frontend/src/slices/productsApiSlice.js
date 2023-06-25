import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      // keepUnusedDataFor: It will keep your data cache for after the last component unsubscribes for Number of seconds
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
