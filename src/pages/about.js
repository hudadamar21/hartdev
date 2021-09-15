import React from 'react'

function AboutPage() {
  return (
    <>
    <div className="w-full h-screen grid place-items-center bg-gradient-to-tl from-white to-gray-200">
      <div className="-mt-10 flex flex-col items-center">
        <img src="/void.svg" className="h-96 mb-8" alt="void"/>
        <h1 className="text-4xl font-bold mb-3">Page Sedang dikerjakan..</h1>
        <div className="flex items-center gap-3 text-blue-500 -ml-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <a href="/" className="text-2xl hover:underline">Back to Homepage</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutPage