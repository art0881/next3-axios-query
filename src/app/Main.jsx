'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Main = ({children}) => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
        <div className='flex-center block' >{children}</div>
        </QueryClientProvider>
    </>
      )
}

export default Main