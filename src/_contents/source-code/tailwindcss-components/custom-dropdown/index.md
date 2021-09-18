---
title: "Custom Dropdown"
date: 2021-09-01
keyword: [tailwindcss components, web design]
tags: [tailwindcss]
category: Tailwindcss Components
thumb: ./tailwind-custom-dropdown.png
series: Tailwindcss Components
contentType: single
---

# Tailwindcss Components - Custom Dropdown

Hei stuffer kali ini saya ingin share tailwind component Custom Dropdown

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

https://tailwindcss.com

<br/>

## Wrapper
wrapper hanya untuk menengahkan dropdown (optional digunakan)
```html
<body class="
  relative 
  flex justify-center items-center 
  gap-5 pt-20 bg-gray-100
">

  <!-- Dropdown Light Mode -->
  <!-- Dropdown Dark Mode -->

</body>
```

## Light Mode Version
```html:expose=true
<!-- Light mode -->
<button class="
  relative 
  flex jutify-center items-center 
  bg-white 
  text-gray-600 rounded 
  focus:outline-none focus:ring ring-gray-200
  border shadow group
">
  <p class="px-4">Dropdown</p>
  <span class="border-l p-2 hover:bg-gray-100">
    <svg 
      class="w-5 h-5" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M19 9l-7 7-7-7"
        ></path>
    </svg>
  </span>
  <div class="
    absolute top-full
    hidden group-focus:block 
    min-w-full w-max 
    bg-white 
    shadow-md mt-1 rounded
  ">
    <ul class="text-left border rounded">
      <li class="px-4 py-1 hover:bg-gray-100 border-b">
        menu list 1
      </li>
      <li class="px-4 py-1 hover:bg-gray-100 border-b">
        menu list 2
      </li>
      <li class="px-4 py-1 hover:bg-gray-100 border-b">
        menu list 3
      </li>
      <li class="px-4 py-1 hover:bg-gray-100 border-b">
        menu list 4
      </li>
      <li class="px-4 py-1 hover:bg-gray-100">
        menu list 5
      </li>
    </ul>
  </div>
</button>
```

## Dark Mode Version
```html:expose=true
<!-- Dark mode -->
<button class="
  relative 
  flex jutify-center items-center 
  bg-gray-600 text-white 
  focus:ring ring-gray-300 
  focus:outline-none
  rounded border shadow group
">
  <p class="px-4">Dropdown</p>
  <span class="border-l border-gray-500 p-2 hover:bg-gray-500">
    <svg 
      class="w-5 h-5" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M19 9l-7 7-7-7"
        ></path>
    </svg>
  </span>
  <div class="
    absolute top-full 
    hidden group-focus:block 
    min-w-full w-max 
    bg-gray-600 shadow-md 
    mt-1 rounded
  ">
    <ul class="text-left border rounded">
      <li class="px-4 py-1 hover:bg-gray-700 border-b border-gray-500">
        menu list 1
      </li>
      <li class="px-4 py-1 hover:bg-gray-700 border-b border-gray-500">
        menu list 2
      </li>
      <li class="px-4 py-1 hover:bg-gray-700 border-b border-gray-500">
        menu list 3
      </li>
      <li class="px-4 py-1 hover:bg-gray-700 border-b border-gray-500">
        menu list 4
      </li>
      <li class="px-4 py-1 hover:bg-gray-700">
        menu list 5
      </li>
    </ul>
  </div>
</button>
```

<br/>

import YoutubePlay from "@/components/Posts/YoutubePlay"

# Video Tutorial
<YoutubePlay id="mXzrQtOtI1A"/>