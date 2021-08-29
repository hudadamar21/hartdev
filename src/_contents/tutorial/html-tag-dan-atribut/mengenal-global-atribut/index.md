---
title: "Mengenal Global Atribut #0"
description: "Penjelasan mengenai global atribut pada tag-tag di html"
date: 2021-07-20T20:19:50+07:00
keyword: [html]
tags: [html]
series: HTML - Tag dan Atribut
thumb: ./mengenal-global-atribut.png
contentType: single
---

Hei Coder, apa series ini saya akan memperkenalkan dan penggunakan tag pada html berserta semua atributnya, tapi sebelum kesana saya ingin memperkenalkan terlebih dahulu beberapa global atribut pada html.

Apa itu global atribut?
secara singkat global atribut adalah atribut yang dapat digunakan pada semua tag html/
lalu apa saja atribut yang termasuk pada global atribut, yuk langsung disimak.

<br/>

## accessKey
Dengan menggunakan atribut ini memungkinkan kita dapat mengakses sebuah element menggunkan shortcut pada keyboard.
untuk menggunakan accessKey kita hanya perlu menekan **Alt + [accessKey]**.

```html
<a href="https://hartdev.site" accessKey="e">Open</a>
```
Pada code diatas kita membuat tag a dan memberikan atribut accessKey dengan value "e"
jika kita menggunakan contoh diatas kita harus menenkan **Alt + e** untuk mengakses link pada tag a

<br/>

## class
Kita akan sering sekali menggunakan atribut class pada tag html manapun, karena atribut class ini berguna untuk menjadi sebuah selector CSS yang digunakan untuk memberikan style pada tag ataupun selector Javascript yang digunakan memanipulasi DOM.
saat kita ingin menggunakan selector dari class kita perlu menambahkan titik (.) sebelum nama class-nya

Contoh class sebagai selector CSS
```html
<style>
  .text-red {
    color: red;
  }
</style>

<p class="text-red">Paragraf dengan text berwarna merah</p>
<p>Paragraph dengan text berwarna hitam</p>
```

Contoh class sebagai selector Javascript
```html
<p class="paragraf"><p>

<script>
const paragraf = document.querySelector('.paragraf');
paragraf.innerHTML = 'paragraf ini akan muncul pada tag html dengan atribut class="paragraf"'
</script>
```

<br/>

## contenteditable
Dengan menggunakan atribut ini memungkinkan kita untuk mengubah text pada tag html secara langsung didalam browser.

```html
<p contenteditable="true">Paragraf ini dapat diubah secara langsung di browser</p>
```

<br/>

## data-*
Atribut ini akan sangat berguna ketika kita ingin menambahkan sebuah value kostum pada tag html, yang akan dapat digunakan juga di CSS dan Javascript.

Contoh penggunaan pada CSS
```html
<style>
  button {
    position: relative;
  }
  button:hover::before {
            /* atribut data-pesan */
    content: attr(data-pesan);
    position: absolute;
    width: max-content;
    bottom: -20px;
    left: 0;
    background: yellow;
  }
</style>
<button data-pesan="ini adalah pesan yang digunakan pada css">
  Pesan Tooltip
</button>
```
code diatas kita membuat button yang ketika di hover akan memunculkan tooltip dengan pesan kustom

<br/>

Contoh penggunaan pada Javascript
```html
<div class="profile" data-nama="John Doe"></div>

<script>
  const profile = document.querySelector('.profile');
  console.log(profile.dataset.nama) // -> John Doe
</script>
```
untuk menggunakan atribut data pada javascript kita hanya perlu mengunakan **dataset** yang disusul dengan nama dari datanya


------- belum selesai --------