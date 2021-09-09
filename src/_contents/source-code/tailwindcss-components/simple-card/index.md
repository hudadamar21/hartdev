---
title: "Simple Card"
date: 2021-07-19T18:46:55+07:00
keyword: [tailwindcss components, web design]
tags: [tailwindcss]
category: Tailwindcss Components
thumb: ./tailwind-simple-card.png
series: Tailwindcss Components
contentType: single
---

# Tailwindcss Components - Simple Card

Hei stuffer kali ini saya ingin share tailwind component Simple Card

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

https://tailwindcss.com

<br/>

## Wrapper
wrapper untuk membungkus card agar card berada di tengah (optional digunakan)
```html
  <div class="w-full h-screen flex justify-center items-center">

    <!-- Simple Card -->

  </div>
```

<br/>

## Simple Card
```html
  <div class="bg-white w-64 shadow rounded hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden">
    <img 
      class="h-48 w-full object-cover object-center"
      src="https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80"
      alt="card-image"
    />
    <div class="w-full flex flex-col">
      <h3 class="font-bold text-gray-700 w-full text-center mt-1 cursor-default text-lg">
        My Name
      </h3>
      <p class="p-3 pt-1 cursor-default">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias?
      </p>
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 m-2 focus:outline-none rounded">
        Look
      </button>
    </div>
  </div>
```

<br/>

import YoutubePlay from "@/components/Partials/YoutubePlay"

# Video Tutorial
<YoutubePlay id="1B8r42x8QbM"/>