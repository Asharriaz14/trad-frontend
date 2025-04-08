
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    credentials: "include"
})

export const p_detailapi=createApi({
    reducerPath:'p_detailapi',
    baseQuery,
    tagTypes:["details"],

    endpoints:(builder)=>({

senddetails:builder.mutation({

    query:({name,lastname,dob,address})=>({
        method:"post",
        url:"/p-detail/send",
        body:{name,lastname,dob,address}
    }),
    invalidatesTags:["details"]
}),

displaydetails:builder.query({
    query:()=>`/p-detail/display`,
    invalidatesTags:["details"]
})


    })


})

export const {
    useSenddetailsMutation,
    useDisplaydetailsQuery
} = p_detailapi;