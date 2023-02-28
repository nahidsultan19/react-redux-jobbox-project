import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob: builder.mutation({
            query: (data) => ({
                url: "/job",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['Jobs'],
        }),
        apply: builder.mutation({
            query: (data) => ({
                url: '/apply',
                method: 'PATCH',
                body: data,
            }),
        }),
        question: builder.mutation({
            query: (data) => ({
                url: '/query',
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Job'],
        }),
        reply: builder.mutation({
            query: (data) => ({
                url: '/reply',
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Job'],
        }),
        getJob: builder.query({
            query: () => ({
                url: '/jobs',
            }),
            providesTags: ['Jobs'],
        }),
        getAppliedJobs: builder.query({
            query: (email) => ({
                url: `/applied-jobs/${email}`
            }),
        }),
        jobById: builder.query({
            query: (id) => ({
                url: `/job/${id}`
            }),
            invalidatesTags: ['Job'],
        }),
    }),
});

export const { usePostJobMutation, useGetJobQuery, useJobByIdQuery, useApplyMutation, useGetAppliedJobsQuery, useQuestionMutation, useReplyMutation } = jobApi;