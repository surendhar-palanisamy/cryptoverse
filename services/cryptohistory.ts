import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "c7fa8235d3msh1ddce5b747c5aa0p1da4e0jsne5df34823909",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });
export const coinHistoryApi = createApi({
  reducerPath: "coinHistoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: ({ id, timePeriod }: any) =>
        createRequest(`/coin/${id}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const { useGetHistoryQuery } = coinHistoryApi;
