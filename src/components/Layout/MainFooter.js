import React from 'react'

function MainFooter({ siteName }) {
  return (
    <footer className="text-center py-5 mt-20">
      Copyright © {new Date().getFullYear()} {siteName}
    </footer>
  )
}

export default MainFooter