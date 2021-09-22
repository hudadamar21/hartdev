---
title: "Mengenal Global Atribut Pada HTML"
description: Penjelasan mengenai semua global atribut pada html.
date: 2021-09-13
keyword: [html]
tags: [html]
series: HTML - Tag dan Atribut
thumb: ./mengenal-global-atribut.png
contentType: single
---

Hei Coder, apa series ini saya akan memperkenalkan tag-tag pada html berserta semua atributnya, tapi sebelum kesana saya ingin memperkenalkan terlebih dahulu beberapa global atribut pada html.

Apa itu global atribut?

secara singkat global atribut adalah atribut yang dapat digunakan pada semua tag html.

lalu apa saja atribut yang termasuk pada global atribut, yuk langsung disimak.

<br/>

# accessKey
Dengan menggunakan atribut ini memungkinkan kita dapat mengakses sebuah element menggunkan shortcut pada keyboard.

untuk menggunakan accessKey kita hanya perlu menekan **Alt + [accessKey]**.

```html
<a href="https://hartdev.site" accessKey="e">Open</a>
```
Pada code diatas kita membuat tag a dan memberikan atribut accessKey dengan value "e".

jika kita menggunakan contoh diatas kita harus menenkan **Alt + e** untuk mengakses link pada tag a.

<br/>

# class
Kita akan sering sekali menggunakan atribut class pada tag html manapun, karena atribut class ini berguna untuk menjadi sebuah selector CSS yang digunakan untuk memberikan style pada tag ataupun selector Javascript yang digunakan memanipulasi DOM.

saat kita ingin menggunakan selector dari class kita perlu menambahkan titik (.) sebelum nama class-nya.

<div className="h-3"/>

**Contoh class sebagai selector CSS**
```html
<style>
  .text-red {
    color: red;
  }
</style>

<p class="text-red">Paragraf dengan text berwarna merah</p>
<p>Paragraph dengan text berwarna hitam</p>
```
<div className="h-3"/>

**Contoh class sebagai selector Javascript**
```html
<p class="paragraf"><p>

<script>
const paragraf = document.querySelector('.paragraf');
paragraf.innerHTML = 'paragraf ini akan muncul pada tag html dengan atribut class="paragraf"'
</script>
```

<br/>

# contenteditable
Dengan menggunakan atribut ini memungkinkan kita untuk mengubah text pada tag html secara langsung didalam browser.

```html
<p contenteditable="true">Paragraf ini dapat diubah secara langsung di browser</p>
```

<br/>

# data-*
Atribut ini akan sangat berguna ketika kita ingin menambahkan sebuah value kostum pada tag html, yang akan dapat digunakan juga di CSS dan Javascript.

<div className="h-3"/>

**Contoh penggunaan pada CSS**
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
code diatas kita membuat button yang ketika di hover akan memunculkan tooltip dengan pesan kustom.

<div className="h-3"/>

**Contoh penggunaan pada Javascript**
```html
<div class="profile" data-nama="John Doe"></div>

<script>
  const profile = document.querySelector('.profile');
  console.log(profile.dataset.nama) // -> John Doe
</script>
```
untuk menggunakan atribut data pada javascript kita hanya perlu mengunakan **dataset** yang disusul dengan nama dari datanya.

<br/>

# dir
Artibut ini berguna untuk mengubah *text direction* pada element html, secara default text pada element html adalah left-to-right (ltr) dari kiri ke kanan, dengan menggunakan atribut ini kita dapat mengubahnya menjadi right-to-left (rtl) dari kanan ke kiri.

```html
<p dir="rtl">Text ini ditulis dari kanan ke kiri</p>
```

<br/>

# draggable
Dengan atribut ini memungkinkan kita memberi akses agar element html kita bisa di drag atau diseret secara langsung menggunakan mouse.

tag **a** dan **img** secara default draggable.

tentu untuk menjalankan fungsi agar bisa diseret ke element lain kita memerlukan bantuan javascript.

```html
<p draggable="true">Paragaf ini bisa diseret</p>
```

<br/>

# hidden
Atribut ini digunakan untuk menyembunyikan element kita agar tidak tampil dibrowser.

```html
<input type="text" name="user_id" value="2" hidden>
```

<br/>

# id
Atribut ini digunakan untuk memberikan identitas unik pada sebuah element tag html, dikarenakan unik kita tidak boleh memberikan nilai id yang sama pada element html lainnya di halaman yang sama.

id juga dapat digunakan sebagai seletor css dan javascript dengan menggunakan pagar (#) sebelum nama id-nya.

```html
<section id="about">
  <!-- body -->
</section>

<!-- tidak boleh duplikat -->
<section id="about">  
  <!-- body -->
</section>
```

id juga sangat bermanfaat untuk me-navigasi halaman web kita.

**Contoh**
```html
<section id="about">
  <!-- body -->
</section>

<a href="#about">About</a>
```
Pada code diatas kita membuat section dengan **id="about"**, dan juga membuat element tag a dengan **href="#about"** .

**#about** yang berarti kita akan mengarahkan halaman web kita ke section dengan id about

<br/>

# lang
Atribut ini digunakan untuk memberi tahu bahasa apa yang digunakan pada element html tersebut.

dipergunakan untuk aksesibilitas agar browser tahu bahasa apa yang digunakan pada element tersebut.

biasanya atrbut lang ini digunakan pada tag html, yang menandakan seluruh halaman ini menggunakan bahasa tersebut.

```html
<html lang="id">
  <!-- body -->
</html> 
```

<br/>

# spellcheck
Atribut ini digunakan untuk memberikan warning ketika text yang ditulis ada typo, sayangnya spellcheck ini hanya berfungsi untuk grammer bahasa inggris.

spellcheck akan memberikan garis kriwil berwarna merah dibawah text ketika ada grammer yang salah atau typo.

spellcheck ini biasanya digunakan pada tag input, textarea dan element dengan atribut **contenteditable**.

```html
<input type="text" spellcheck="true">

<textarea spellcheck="true"></textarea>

<div contenteditable="true"></div>
```

<br/>

# style 
Atribut ini digunakan untuk menuliskan css secara inline yang pada element html-nya.

```html
<h1 style="color: blue;">Title</h1>
<button style="background: yellow;">Open</button>
```

<br/>

# tabindex
Atribut ini berfungsi untuk mengatur index ketika kita menekan tab untuk focus pada element html.

```html
<div tabindex="1">Google</div>
<div tabindex="3">Facebook</div>
<div tabindex="2">Instagram</div>
<div tabindex="4">Twitter</div>
```

saat kita menekan tab, element yang akan focus pertama adalah Google, yang ke-2 Instagram, yang ke-3 Facebook dan yang terakhir adalah Twitter.

<br/>

# title
Atribut ini digunakan untuk memberikan sebuah judul pada element html, saat kita mensorot element html yang diberikan atribut title, nilai dari title akan tampil.

```html
<button title="hapus data post">Hapus</button>
```

<br/>

# translate
Atribut ini digunakan untuk memberitahu apakah isi element tertentu boleh di translate atau tidak.

Secara default semua element tag html data ditranslate.

value yang dapat diberikan pada atribut translate adalah **"yes"** atau **"no"**.

```html
<p translate="no">Jangan Terjemahkan Tulisan Ini!</p>
```

tapi sepertinya atribut ini tidak lagi di support pada banyak browser.

dapat dilihat disini:
[HTML translate Attribute](https://www.w3schools.com/tags/att_global_translate.asp)

<br/>

# Penutup
Jadi itu semua global atribut pada html dan beberapa contoh penggunaannya.

Terima kasih sudah membaca tulisan ini dari awal sampai selesai, semoga bermanfaat :)