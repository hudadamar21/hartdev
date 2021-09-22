---
title: "Tag A Dan Semua Atributnya #1"
description: Penjelasan atribut-atribut yang dapat digunakan pada tag a pada html.
date: 2021-09-13
keyword: [html]
tags: [html]
series: HTML - Tag dan Atribut
thumb: ./tag-a-dan-semua-atributnya.png
contentType: single
---
 
Hei Coder, pada tutorial html kali ini saya akan menjelaskan mengenai tag a berserta atribut-atributnya.

tag a adalah sebuah tag pada html untuk membuat sebuah link yang digunakan untuk pindah ke sebuah halaman lain pada website kita (internal link) atau dapat juga pindah ke website orang lain (eksternal link).

tag a memiliki beberapa atribut yang dapat digunakan.

lalu apa saja atribut yang ada pada tag a, yuk langsung disimak.

<br/>

# href

atribut href adalah atribut yang paling sering digunakan pada tag a, dikarenakan href adalah atribut yang digunakan untuk menyimpan sebuah link agar tag a dapat mengetahui link tujuannya ketika di klik.

<div className="h-3"/>

## contoh href

```html filename=index.html
<a href="https://hartdev.site">Kunjungi HartDev</a>
```

pada kode diatas kita membuat sebuah tag a dengan atribut href yang berisikan link tujuan.
ketika kita klik tulisan **Kunjungi halaman utama HartDev**, kita akan langsung dipindahkan ke halaman utama website HartDev.

-> <a href="https://hartdev.site" target="_blank">Kunjungi halaman utama HartDev</a>

jika kalian klik link di atas kalian akan langsung dipindahkan ke halaman utama HartDev.

tapi kok dibuka pada tab baru ? 

itu karena saya menggunakan atribut target.

<br/>

# target

atribut target adalah atribut yang digunakan untuk memberitahu tag a bagaimana link tersebut harus terbuka saat diklik.
ada beberapa value pada atribut target, antara lain

  - _blank = untuk membuka link pada tab atau window baru
  - _self = untuk membuka link pada tab saat ini (nilai default)
  - _parent = untuk membuka link pada frame yang satu tingkat di atas frame link tersebut berada
  - _top = untuk membuka link di frame paling atas (paling luar)
  - framename = untuk membuka frame sesuai nama yang ditentukan

untuk _parent, _top, framename itu jarang sekali digunakan.

dari yang saya baca pada beberapa artikel, itu digunakan di dalam tag iframe yang memuat sebuah website.

<div className="h-3"/>

## contoh target
```html
<a href="https://hartdev.site" target="_blank">
  Kunjungi halaman utama HartDev
</a>
```


pada kode diatas kita membuat sebuah tag a dengan atribut target yang diberi value _blank yang diartikan ketika kita klik link tersebut, akan dibukakan pada tab baru.

-> <a href="https://hartdev.site" target="_blank">Kunjungi halaman utama HartDev</a>

<br/>

# download
atribut download adalah atribut yang digunakan untuk melakukan download berupa file pada link yang dimasukan pada atribut href.

atribut download juga dapat memberikan nama kostum pada file yang akan didownload.

<div className="h-3"/>

## contoh download #1

```html
<a href="/logo.png" download>
  Download logo default name
</a>
```

kode di atas kita mendefinisikan atribut download namun tidak memberikan value, yang artinya file yang akan kita download menggunakan nama file default yaitu **logo.png**.

-> <a href="/logo.png" download>Download logo default name</a>

<div className="h-3"/>

## contoh download #2

```html
<a href="/logo.png" download="logo-hartdev">
  Download logo custom name
</a>
```

kode di atas kita mendefinisikan atribut download dengan value **logo-hartdev**, yang artinya file yang akan kita download akan adalah **logo-hartdev.png**

-> <a href="/logo.png" download="logo-hartdev">Download logo custom name</a>

<br/>

# type 
atribut download adalah atribut yang digunakan untuk memberikan media type pada link tujuan atau lebih sering disebut juga MIME type.

untuk melihat semua media type yang dapat digunakan, kalian bisa kunjungi link dibawah ini.

https://www.iana.org/assignments/media-types/media-types.xhtml

<div className="h-3"/>

## contoh type
```html
<a href="https://hartdev.site" type="text/html">HartDev Website</a>
```

<br/>

# rel
atribut rel adalah atribut yang digunakan untuk memberi tahu hubungan antara website kita dengan link tujuan, dan berguna untuk Search engine mengetahui informasi lebih tantang link tujuan.

value yang dapat digunakan
 - alternate
 - author
 - bookmark
 - external
 - help
 - license
 - next
 - nofollow
 - noopener
 - noreferrer
 - prev
 - search
 - tag

<div className="h-3"/>

## contoh rel
```html
<a href="https://www.github.com/" rel="nofollow">Github</a>
```

<br/>

# hreflang
atribut hreflang adalah atribut yang digunakan untuk memberi tahu bahasa yang digunakan pada link tujuan.

<div className="h-3"/>

## contoh hreflang
```html
<a href="https://www.github.com/" hreflang="en">Github</a>
```

<br/>

# ping
atribut ping adalah atribut yang digunakan untuk memberi tahu link tujuan ketika kita mengklik link tersebut.

atribut ini berguna untuk monitoring/tracking.

<div className="h-3"/>

## contoh ping
```html
<a href="https://www.w3schools.com/html" ping="https://www.w3schools.com/trackpings">
```

<br/>

# referrerpolicy
atribut ping adalah atribut yang digunakan untuk mengirim referrer information ketika kita mengklik link tujuan.

value yang dapat digunakan:
  - no-referrer
  - no-referrer-when-downgrade
  - origin
  - origin-when-cross-origin
  - same-origin
  - strict-origin-when-cross-origin
  - unsafe-url

<div className="h-3"/>

## contoh referrerpolicy
```html
<a href="https://www.hartdev.site" referrerpolicy="origin">
```

<br/>

# Penutup
jadi itulah penjelasan atribut-atribut yang ada pada tag **a**.

selain atribut diatas,tentu saja tag a juga dapat menggunakan global atribut.

kalian dapat melihatnya disini: [Global Atribut pada HTML](http://localhost:8000/tutorial/html-tag-dan-atribut/mengenal-global-atribut/)

Terima kasih sudah membaca tulisan ini dari awal sampai selesai, semoga bermanfaat :)