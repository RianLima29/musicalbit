import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiData, ProductFields } from "../../types/api";
import { Product } from "../../types/product";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://firestore.googleapis.com/v1/",
  }),
  endpoints: (build) => ({
    getProducts: build.query<Product[] | void, void>({
      query: () => "projects/musicalbit-d9b36/databases/(default)/documents/products",
      transformResponse: (response: ApiData<ProductFields>) => {
        let data: any[] = [];

        response.documents?.map((product) => {
          data.push({
            path: product.name,
            categories: product.fields.categories.stringValue,
            depth: product.fields.depth.doubleValue,
            description: product.fields.description.stringValue,
            height: product.fields.height.doubleValue,
            inStock: product.fields.inStock.doubleValue,
            mainPhoto: product.fields.mainPhoto.stringValue,
            name: product.fields.name.stringValue,
            price: product.fields.price.stringValue,
            weight: product.fields.weight.doubleValue,
            width: product.fields.width.doubleValue,
            secondaryPhotos:
              product.fields.secondaryPhotos.arrayValue.values.map(
                (item) => item.stringValue
              ),
          });
        });

        if(data.length > 0) return data
      },
      providesTags: ["product"],
    }),
    addProduct: build.mutation<void, Product>({
      query: (product) => ({
        url: "projects/musicalbit-d9b36/databases/(default)/documents/products",
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
              doubleValue: product.inStock,
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
              stringValue: product.categories,
            },
          },
        },
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: build.mutation<void, string>({
      query: (path)=>({
        method:"DELETE",
        url: path,
      }),
      invalidatesTags: ['product']
    })
  }),
});

export const { useAddProductMutation, useGetProductsQuery, useDeleteProductMutation } = api;
