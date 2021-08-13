---
title: "Login Page"
date: 2021-07-19T18:46:55+07:00
keyword: [tailwindcss components, web design]
tags: [tailwindcss]
category: Tailwindcss Components
thumb: ./tailwind-login-page.png
series: Tailwindcss Components
contentType: single
---

# Tailwindcss Components - Login Page

Hei stuffer, kali ini saya ingin share code snippets login page

Ok langsung saja kita buat menggunakan tailwindcss

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

https://tailwindcss.com

&nbsp;

## Login Page

```html
  <div class="w-full h-screen flex">
    <img
      class="object-cover object-center h-screen w-7/12"
      src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
      alt="background-image"
    />
    <div class="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg">
      <h1 class="text-3xl font-bold text-yellow-500 mb-2">
        LOGIN
      </h1>
      <div class="w-1/2 text-center">
        <input 
          type="text" 
          name="username" 
          placeholder="username"
          class="shadow-md border w-full h-10 px-3 py-2 text-yellow-500 focus:outline-none focus:border-yellow-500 mb-3 rounded"
        />
        <input 
          type="password" 
          name="password" 
          placeholder="password" 
          autocomplete="off"
          class="shadow-md border w-full h-10 px-3 py-2 text-yellow-500 focus:outline-none focus:border-yellow-500 mb-3 rounded"
        />
        <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow">
          Sign In
        </button>
      </div>
    </div>
  </div>
```

&nbsp;

# Video Tutorial