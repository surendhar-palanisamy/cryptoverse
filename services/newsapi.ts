import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "c7fa8235d3msh1ddce5b747c5aa0p1da4e0jsne5df34823909",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};
const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(`/news/search?q=${newsCategory}&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
