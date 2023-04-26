import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userServiceApi = createApi({
  reducerPath: 'userServiceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/' }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['users'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/delete-user/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['users'],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: `/users/add-new-user`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['users'],
    }),
    getUser: builder.query({
      query: (id) => `/users/get-user/${id}`,
      providesTags: ['users'],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/update-user/${user._id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} = userServiceApi;
