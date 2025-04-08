
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const documentapi = createApi({
  reducerPath: 'documentapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
  // prepareHeaders: (headers) => {
  //   const token = localStorage.getItem('auth token'); 
  //   if (token) {
  //     headers.set('Authorization', `Bearer ${token}`);
  //   }
  //   return headers;
  // },


  }),
  endpoints: (builder) => ({
    uploadDocument: builder.mutation({
      query: (formData) => ({
        url: '/documents/upload', 
        method: 'POST',
        credentials:'include',
        body: formData,
      }),
    }),
  }),
});

export const { useUploadDocumentMutation } = documentapi;
