
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api",
  credentials: "include", // Ensures cookies are sent with requests

});

export const transcationapi = createApi({
  reducerPath: "transcationapi",
  baseQuery,
  tagTypes: ["code"], // Defined tag types properly
  endpoints: (builder) => ({
    
    // User Registration
    sendMoney: builder.mutation({
      query: (formData) => ({
        method: "POST",
        url: "/transactions/sendmoney",
      credentials:"include",
        body: formData,
      }),
      invalidatesTags: ["code"],
    }),

    // User Login
    displayMoney: builder.query({
        
    query:()=>`/getdata`,
    invalidatesTags:["code"]
    }),
  }),
});

export const { 
 useSendMoneyMutation,
 useDisplayMoneyQuery


} = transcationapi;
