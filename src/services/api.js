import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.jsonkeeper.com/b/NHNMI"
    }),
    endpoints : (builder)=> ({
        getProducts : builder.query({
            query: ()=> ""
        })
    })
})


export const {useGetProductsQuery} = api