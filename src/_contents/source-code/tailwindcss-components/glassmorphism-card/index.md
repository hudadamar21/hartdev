---
title: "Glassmorphism Card"
date: 2021-08-25
keyword: [tailwindcss components, web design]
tags: [tailwindcss]
category: Tailwindcss Components
thumb: ./tailwind-glassmorphism-card.png
series: Tailwindcss Components
contentType: single
---

# Tailwindcss Components - Glassmorphism Card

Hei stuffer kali ini saya ingin share tailwind component Glassmorphism Card

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

https://tailwindcss.com

<br/>

## Wrapper

```html
<div class="bg-image w-full min-h-screen flex flex-wrap justify-center items-center gap-3">

  <!-- Card taruh disini -->
  
</div>
```

## Glassmorphism Card
```html:expose=true
<div class="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg">
  <!-- header -->
  <div class="w-full mb-3 pb-3 border-b border-1 border-white">
    <h3 class="text-xl font-semibold text-shadow">Something Good</h3>
  </div>
  <!-- body -->
  <div>
    <img src="./image/bg01.jpg" alt="image1" class="w-full h-48 object-cover mb-2">
    <p class="mb-3 tracking-wide text-base text-shadow">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
    </p>
    <button class="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
      Detail
    </button>
  </div>
</div>
```

## Style CSS
```css
.bg-image {
  background-image: url(./image/bg00.jpg);
  background-size: cover;
  background-position: center;
}
.backdrop {
  backdrop-filter: blur(5px);
}
.text-shadow {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
```

<br/>

import YoutubePlay from "@/components/Posts/YoutubePlay"

# Video Tutorial
<YoutubePlay id="yBHMRvsqKVc"/>