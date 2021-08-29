---
title: "Navigation"
date: 2021-07-19T18:46:55+07:00
keyword: [tailwindcss components, web design]
tags: [tailwindcss]
category: Tailwindcss Components
thumb: ./tailwind-navigation.png
series: Tailwindcss Components
contentType: single
---

# Tailwindcss Components - Navigation

Hei stuffer, kali ini saya ingin share code snippet navigation.

Ok langsung saja kita buat menggunakan tailwindcss

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

https://tailwindcss.com

<br/>

## Navigation
```html
  <div class="bg-white md:w-12/12 h-16 shadow-md flex justify-between items-center flex-col md:flex-row md:rounded md:m-3">
    <div class="flex justify-center items-center ml-3">
      <img 
        class="w-10 mx-3"
        src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg" 
        alt="logo tailwindcss" 
      />
      <h3 class="text-gray-700 font-semibold text-xl cursor-default py-2 md:py-0">
        Code Stuff
      </h3>
    </div>
    <ul class="flex justify-evenly items-center w-full md:w-1/2 lg:w-1/3 bg-gray-100 md:bg-white mr-0 md:mr-5 py-2 md:py-0">
      <li class="hover:bg-green-400 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer">
        Home
      </li>
      <li class="hover:bg-green-400 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer">
        About
      </li>
      <li class="hover:bg-green-400 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer">
        Services
      </li>
      <li class="hover:bg-green-400 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer">
        Portfolio
      </li>
      <li class="hover:bg-green-400 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer">
        Contact
      </li>
    </ul>
  </div> 
```

<br/>

import YoutubePlay from "@/components/Partials/YoutubePlay"

# Video Tutorial
<YoutubePlay id="ehuMq4JiYgQ"/>