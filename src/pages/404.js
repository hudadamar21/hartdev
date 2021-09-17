import React from 'react'

function AboutPage() {
  return (
    <>
    <div className="w-full h-screen grid grid-cols-2 place-items-center bg-gradient-to-tl from-white to-gray-200">
      <div>
        <h1 className="text-8xl font-black mb-3">404</h1>
        <h2 className="text-4xl font-bold mb-3">Page tidak ditemukan..</h2>
        <div className="flex gap-2 text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <a href="/" className="text-xl hover:underline">Back to home</a>
        </div>
        <div className="w-full mt-8 rounded-md text-lg">
          <p className="mb-2">or check this out</p>
          <div className="space-x-5">
            <a className="text-blue-500 hover:underline" href="/tutorial">Tutorial</a>
            <a className="text-blue-500 hover:underline" href="/source-code">Source Code</a>
            <a className="text-blue-500 hover:underline" href="/blog">Blog</a>
          </div>
        </div>
      </div>
      <div className="h-screen p-32">
        <img src="/void.svg" className="" alt="void"/>
      </div>
    </div>
    </>
  )
}

export default AboutPage