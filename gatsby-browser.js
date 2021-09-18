
// Tailwindcss 
import './src/styles/tailwind.css';

// Highlighting for code blocks
// import "./src/styles/prism-theme-monokai.css"

import { MdxWrapper } from '@/layouts/Mdx'

export const wrapRootElement = MdxWrapper

const isDarkmode = JSON.parse(window.localStorage.getItem('darkmode'))
if(isDarkmode) window.document.body.classList.add('dark') 
else window.document.body.classList.remove('dark')
