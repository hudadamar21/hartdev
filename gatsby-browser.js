
// Tailwindcss 
import './src/styles/tailwind.css';

import { MdxWrapper } from '@/layouts/Mdx'

export const wrapRootElement = MdxWrapper

const isDarkmode = JSON.parse(window.localStorage.getItem('darkmode'))
if(isDarkmode) window.document.body.classList.add('dark') 
else window.document.body.classList.remove('dark')