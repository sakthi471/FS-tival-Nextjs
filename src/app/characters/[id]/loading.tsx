 "use client"
import Loading from '@/components/Loading'
import React from 'react'
 import { Bars } from 'react-loader-spinner'
 export const dynamic = "force-dynamic"


const loading = () => {
  return (
    <div className=' w-full min-h-screen  flex justify-center items-center'>
      <Loading/>
    </div>
  )
}

export default loading