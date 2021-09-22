import React from 'react'
import ErrorPage from "@/components/Container/ErrorPage"

function NotFound() {
  return (
    <ErrorPage title="404" description="Page tidak ditemukan.." />
  )
}

export default NotFound