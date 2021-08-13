---
title: "Buttons"
date: 2021-07-19T18:46:55+07:00
keyword: [tailwindcss components, web design]
tags: [tailwindcss]
category: Tailwindcss Components
thumb: ./tailwind-buttons.png
series: Tailwindcss Components
contentType: single
---

# Tailwindcss Components - Buttons

Hei stuffer kali ini saya ingin share code snippet Tailwind Buttons

Ok langsung saja kita buat menggunakan tailwindcss

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

https://tailwindcss.com

&nbsp;

## Basic Button
```html

  <button class="
    bg-gray-500 hover:bg-gray-600 text-white 
    focus:ring ring-gray-300 focus:outline-none
    px-4 py-2 rounded shadow focus:shadow-md transition
  ">
    Button Gray
  </button>

  <button class="
    bg-blue-500 hover:bg-blue-600 text-white 
    focus:ring ring-blue-300 focus:outline-none
    px-4 py-2 rounded shadow focus:shadow-md transition
  ">
    Button Blue
  </button>

  <button class="
    bg-green-500 hover:bg-green-600 text-white 
    ocus:ring ring-green-300 focus:outline-none
    px-4 py-2 rounded shadow focus:shadow-md transition
  ">
    Button Green
  </button>
  
  <button class="
    bg-yellow-500 hover:bg-yellow-600 text-white 
    focus:ring ring-yellow-300 focus:outline-none
    px-4 py-2 rounded shadow focus:shadow-md transition
  ">
    Button Yellow
  </button>

  <button class="
    bg-red-500 hover:bg-red-600 text-white 
    focus:ring ring-red-300 focus:outline-none
    px-4 py-2 rounded shadow focus:shadow-md transition
  ">
    Button Red
  </button>

```

## Outline Button
```html

  <button class="
    bg-white hover:bg-gray-500 border-2 border-gray-500 
    text-gray-500 hover:text-white 
    focus:ring ring-gray-300 focus:outline-none
    px-4 py-2 rounded shadow hover:shadow-md transition
  ">
    Button Gray
  </button>

  <button class="
    bg-white hover:bg-blue-500 border-2 border-blue-500 
    text-blue-500 hover:text-white 
    focus:ring ring-blue-300 focus:outline-none
    px-4 py-2 rounded shadow hover:shadow-md transition
  ">
    Button Blue
  </button>

  <button class="
    bg-white hover:bg-green-500 border-2 border-green-500 
    text-green-500 hover:text-white 
    focus:ring ring-green-300 focus:outline-none
    px-4 py-2 rounded shadow hover:shadow-md transition
  ">
    Button Green
  </button>

  <button class="
    bg-white hover:bg-yellow-500 border-2 border-yellow-500 
    text-yellow-500 hover:text-white 
    focus:ring ring-yellow-300 focus:outline-none
    px-4 py-2 rounded shadow hover:shadow-md transition
  ">
    Button Yellow
  </button>

  <button class="
    bg-white hover:bg-red-500 border-2 border-red-500 
    text-red-500 hover:text-white 
    focus:ring ring-red-300 focus:outline-none
    px-4 py-2 rounded shadow hover:shadow-md transition
  ">
    Button Red
  </button>

```

## Gradient Button
```html

  <button class="
    bg-gradient-to-r from-gray-500 to-gray-700
    hover:from-gray-700 hover:to-gray-500
    text-white
    focus:ring ring-gray-300 focus:outline-none
    px-4 py-2 rounded shadow md:shadow-md transition
  ">
    Button Gray
  </button>

  <button class="
    bg-gradient-to-l from-blue-500 to-blue-700
    hover:from-blue-700 hover:to-blue-500
    text-white
    focus:ring ring-blue-300 focus:outline-none
    px-4 py-2 rounded shadow md:shadow-md transition
  ">
    Button Blue
  </button>

  <button class="
    bg-gradient-to-tr from-green-500 to-green-700
    hover:from-green-700 hover:to-green-500
    text-white
    focus:ring ring-green-300 focus:outline-none
    px-4 py-2 rounded shadow md:shadow-md transition
  ">
    Button green
  </button>

  <button class="
    bg-gradient-to-tl from-yellow-500 to-yellow-600
    hover:from-yellow-600 hover:to-yellow-500
    text-white
    focus:ring ring-yellow-300 focus:outline-none
    px-4 py-2 rounded shadow md:shadow-md transition
  ">
    Button Yellow
  </button>

  <button class="
    bg-gradient-to-br from-red-500 to-red-700
    hover:from-red-700 hover:to-red-500
    text-white
    focus:ring ring-red-300 focus:outline-none
    px-4 py-2 rounded shadow md:shadow-md transition
  ">
    Button Red
  </button>
  
```

&nbsp;

import YoutubePlay from "@/components/Partials/YoutubePlay"

# Video Tutorial
<YoutubePlay id="eFKzZG3Mx0I"/>