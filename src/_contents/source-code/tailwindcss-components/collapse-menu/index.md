---
title: Collapse Menu
date: 2021-09-13
keyword: [tailwindcss components, web design]
tags: [tailwindcss]
category: Tailwindcss Components
thumb: ./tailwind-custom-dropdown.png
series: Tailwindcss Components
contentType: single
---

# Tailwindcss Components - Custom Dropdown

Hei stuffer kali ini saya ingin share tailwind component Collapse Menu tanpa javascript

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

https://tailwindcss.com

<br/>

## Wrapper
wrapper hanya untuk menengahkan dropdown (optional digunakan)
```html
  <div class="relative w-[400px] overflow-hidden">
    <input 
      type="checkbox"
      class="
        peer
        absolute top-0 inset-x-0
        w-full h-12
        opacity-0 z-10 cursor-pointer
      "  
    >
    <div class="
      bg-blue-500
      h-12 w-full pl-5
      flex items-center
    ">
      <h1 class="text-lg font-semibold text-white">
        What is Tailwindcss?
      </h1>
    </div>

    <!-- Arrow Icon -->
    <div class="
      absolute top-3 right-3
      text-white
      transition-transform duration-500
      rotate-0 peer-checked:rotate-180
    ">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M19 9l-7 7-7-7" 
        />
      </svg>
    </div>

    <!-- Content -->
    <div class="
      bg-white
      overflow-hidden
      transition-all duration-500
      max-h-0 peer-checked:max-h-40
    ">
      <div class="p-4">
        <p>
          Rapidly build modern websites without ever leaving your HTML.
          A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. 
        </p>
      </div>
    </div>
  </div>
```

<br/>

import YoutubePlay from "@/components/Partials/YoutubePlay"

# Video Tutorial
<YoutubePlay id="mXzrQtOtI1A"/>