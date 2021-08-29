---
title: "Apa Itu Client Side Rendering?"
description: "Menjelaskan mengenai apa itu client side rendering, dan apa kelebihan dan kekurangannya dari client side rendering?"
date: 2021-07-20T20:19:50+07:00
keyword: [client side rendering, website]
tags: [apa itu?]
thumb: ./apa-itu-client-side-rendering.png
series: Apa Itu?
contentType: single
---

Hei coder, pada artikel ini saya ingin menjelasakan tentang Client Side Rendering (SSR) yang saat ini banyak sekali digunakan pada framework frontend untuk membuat website modern, seperti react, vuejs, angular, svelte, dll.

lalu apa itu itu Client Side Rendering dan apa kelebihan dan kekurangannya?
langsung aja yuk disimak.

<br/>

# Apa Itu Client Side Rendering?

Client Side Rendering adalah teknik untuk merender sebuah website yang dilakukan secara langsung didalam browsernya menggunakan bantuan bahasa pemrogramman javascript.

Dengan menggunakan Client Side Rendering (SSR) memungkinkan untuk membuat website yang hanya membutuhkan 1 pages yang dinamis dan interaktif atau istilah kerennya adalah Single Page Application (SPA), teknik SPA inilah yang digunakan oleh framework seperti react, vue, angular, dll.

Namun walaupun begitu Client Side Rendering (SSR) juga memiliki Kelebihan dan Kekurangan antara lain:

<br/>

## Kelebihan
  - Website menjadi cepat karena hanya membutuhkan 1 halaman html dan selanjutnya hanya memanipulasi DOM mengunakan javascript
  - Website lebih interaktif, flexible, dan mudah dioptimasi
  - Karena tidak membutuhkan server, oleh karena itu website bisa di hosting dilayanan gratis, sperti netlify, vercel, github pages, dll.

<br/>

## Kekurangan 
  - Tidak Bagus untuk Search Engine Optimization (SEO), karena untuk SEO, Search Engine memerlukan halaman awal website yang sudah siap ditampilkan, sedangkan SSR membutuhkan javascript untuk menampikan website.
  - Tidak Bagus untuk Social Media Optimization (SMO),saat men-share website pada media social, hasil share tidak dapat menampilkan preview halaman website. memerlukan langkah ekstra seperti menambahkan meta tag pada laman website.
  - Ukuran file javacript terbilang cukup besar, yang dapat mempengaruhi performa website (hanya saat website terbuka untuk pertama kali)

<br/>

# Penutup

Jadi itu penjelasan mengenai Apa Itu Client Side Rendering (SSR), Kelebihan dan juga Kekurangannya.

Next saya akan membuat artikel mengenai Server Side Rendering yang kebalikan dari Client Side Rendering.

Terima kasih sudah membaca tulisan ini dari awal sampai selesai, semoga bermanfaat :)