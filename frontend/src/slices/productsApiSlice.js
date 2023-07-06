import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      // keepUnusedDataFor property will keep your data cached for after the last component unsubscribes for Number of seconds
      keepUnusedDataFor: 5,
      // providesTags property
      providesTags: ["Products"],
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: "POST",
      }),
      // invalidatesTags property will stop data from being cached so that we have fresh data.
      // without invalidatesTags property we will have to reload the page after we click create new product.
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (productData) => ({
        url: `${PRODUCTS_URL}/${productData.productId}`,
        method: "PUT",
        body: productData,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productsApiSlice;
