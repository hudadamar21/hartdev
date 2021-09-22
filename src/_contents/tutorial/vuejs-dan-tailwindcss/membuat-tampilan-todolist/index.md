---
title: "Membuat Tampilan Todolist #3"
date: 2021-09-16
description: "Disini kita akan membuat tampilan todolist menggunakan tailwindcss sebagai styling-nya, dan refactor code-nya menggunakan component vuejs agar lebih modular dan mudah di maintenance."
keyword: [vuejs, tailwindcss, tutorial]
tags: [vuejs, tailwindcss]
category: tutorial
series: Membuat Aplikasi Menggunakan Vuejs dan Tailwindcss
thumb: ./membuat-tampilan-todolist.png
contentType: single
---

Hei coder, pada tahap ini kita akan membuat tampilan aplikasi todolist menggunakan tailwindcss.

kita juga akan me-refactor code kita agar lebih modular menggunakan component vuejs.

kita mulai dari membuat layout utama dengan mengubah file **App.vue** pada folder **src**.

<br/>

# Layout Utama

Layout Utama ini adalah tampilan paling depan yang menampilkan aplikasi kita, didalamnya berisi component-component terpisah agar lebih mudah untuk di maintenance nantinya.

Buka file pada directory **`src/App.vue`**, dan ubah templatenya menjadi seperti ini.

```vue:expose=true {10,16,28}
<template>
  <div class="bg-gray-200 min-h-screen flex flex-col items-center py-10">
    <h1 class="text-6xl font-bold text-primary-100 mb-10">
      Todolist
    </h1>
    <div class="w-[95%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="col-span-1">

        <!-- form input add new task -->
        <FormInput /> 

        <div class="h-0.5 w-full bg-gray-100 mt-3"></div>

        <!-- todo list -->
        <ul class="flex flex-col gap-3 my-3">
          <TodoInProgress />
        </ul>
        
      </div>

      <!-- completed task -->
      <div class="col-span-1">
        <div class="bg-white rounded overflow-hidden shadow-lg">
          <h1 class="bg-primary-100 text-white py-1 font-semibold text-lg text-center">
            Completed Task
          </h1>
          <ul class="flex flex-col divide-y p-3">
            <TodoCompleted />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
```

Code yang di highlight adalah sebuah component yang nanti kita buat pada file terpisah.

> Component **`<FormInput/>`** akan berisi form input todolist

> Component **`<TodoInProgress/>`** akan berisi todo yang belum diselesaikan.

> Component **`<TodoCompleted/>`** akan berisi todo yang sudah diselesaikan.

Kita juga perlu untuk mengimportnya dan mendaftarkan component-component di atas pada tag script.

```vue:expose=true
<script>
import TodoInProgress from "./components/TodoInProgress.vue";
import TodoCompleted from "./components/TodoCompleted.vue";
import FormInput from './components/FormInput.vue';

export default {
	components: {
    TodoInProgress,
    TodoCompleted,
    FormInput,
  },
}
</script>
```

<br/>

# Membuat Component FormInput

Buat file dengan nama  **`FormInput.vue`** pada folder **components**.

**`src/components/FormInput.vue`**.

Isi file **`FormInput.vue`** pada template menjadi seperti ini.

```vue:expose=true {19}
<template>
  <form class="
    flex items-center justify-between gap-2
    w-full bg-white p-4 rounded 
  ">
    <div class="flex-grow">
      <input
        class="
          block flex-grow w-full 
          px-2 pb-0.5 
          text-lg font-medium text-gray-600
          border-b-2 border-gray-200 
          focus:outline-none transition duration-200
        "
        type="text" 
        placeholder="add new task"
      />
      <small class="block text-xs text-gray-400 mt-2">
        {{ dateNow }}
      </small>
    </div>
    <button
      class="
        bg-primary-100 hover:bg-primary-200 
        px-3 py-1 mr-3 ml-4
      text-white shadow rounded 
      "
      type="submit" 
    >
      Save
    </button>
  </form>
</template>
```

Pada template diatas kita membuat sebuah form yang didalamnya ada input text, text waktu sekarang, dan button save todo.

Pada code yang di highlight kita memberikan variable dateNow yang berisi waktu sekarang yang telah di format, variable dateNow ini akan digunakan sebagai waktu/kapan todo dibuat.

kita perlu membuat variable tersebut pada tag script.

```vue:expose=true
<script>
import { ref } from "vue";

export default {
  setup(){
    // ambil waktu sekarang
    const dateNow = ref(formatDate(new Date()))
    // format date menjadi seperti 8/11/2021 dengan fungsi toLocalDateString
    function formatDate (date){
      return new Date(date).toLocaleDateString()
    }
    // agar variable dateNow dapat digunakan pada template, maka perlu dimasukan kedalam return
    return {
      dateNow
    }
  }
}
</script>
```

Pada kode diatas kita membuat variable dateNow dengan menggunakan ref yang diisi dengan function `formatDate()` dengan parameter `new Date()`.

function formatDate berfungsi untuk mengubah format `new Date()` menjadi seperti ini `8/11/2021`.

dan terakhir kita perlu memasukan variable dateNow kedalam return agar dapat digunakan pada template vue.

----- belum selesai -----