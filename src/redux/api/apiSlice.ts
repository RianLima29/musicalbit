import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../types/product";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://firestore.googleapis.com/v1/projects/musicalbit-d9b36/databases/(default)/documents/",
  }),
  endpoints: (build) => ({
    addProduct: build.mutation<void, Product>({
      query: (product) => ({
        url: "products",
        method: "POST",
        body: {
          fields: {
            name: {
              stringValue: product.name,
            },
            price: {
              stringValue: product.price.toString(),
            },
            description: {
              stringValue: product.description,
            },
            inStock: {
              integerValue: product.inStock,
            },
            weight: {
              doubleValue: product.weight,
            },
            height: {
              doubleValue: product.height,
            },
            width: {
              doubleValue: product.width,
            },
            depth: {
              doubleValue: product.depth,
            },
            mainPhoto: {
              stringValue: product.mainPhoto,
            },
            secondaryPhotos: {
              arrayValue: {
                values: [
                  product.secondaryPhotos?.map((item) => {
                    return { stringValue: item };
                  }),
                ],
              },
            },
            categories: {
              stringValue: product.categories
            },
          },
        },
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useAddProductMutation } = api;
