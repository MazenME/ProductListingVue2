<template>
  <v-dialog class="border-md border-error" width="400px" v-model="store.state.isOpen" persistent theme="light" >

     <svg
      @click="store.commit('closeDialog')"
      class="absolute top-1 right-3 cursor-pointer"
      width="25"
      height="25"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33333 11.6667L10 10M10 10L11.6667 8.33333M10 10L8.33333 8.33333M10 10L11.6667 11.6667M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
        stroke="#171717"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <form class="border-md border-error p-5 rounded-md bg-white" @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 gap-6">
        <label class="block w-full">
          <span class="text-gray-700 block mb-1">Image</span>
          <div
            class=" rounded-md h-20 flex items-center justify-center border-md border-error"
          >
            <button
              type="button"
              class="p-2 text-black rounded-md border-md border-success cursor-pointer"
              @click="openImageUpload"
            >
              Upload Image
            </button>
          </div>
          <input
            id="imageInput"
            name="image"
            type="file"
            accept="image/*"
            @change="handleImageChange"
            class="hidden"
          />
        </label>

        <label class="block">
          <span class="text-gray-700">Name</span>
          <input
            v-model="name"
            id="name"
            type="text"
            class="text-black mt-1 p-2 block w-full rounded-md border border-solid"
          />
        </label>

        <label class="block">
          <span class="text-gray-700">Price</span>
          <input
            v-model="price"
            id="price"
            type="number"
            class="text-black mt-1 p-2 block w-full rounded-md border border-solid"
          />
        </label>

        <label class="block">
          <span class="text-gray-700">Description</span>
          <textarea
            v-model="description"
            id="description"
            class="text-black mt-1 p-2 block w-full rounded-md border border-solid"
          ></textarea>
        </label>

        <button
          type="submit"
          class=" inline-flex justify-center py-2 px-4 border border-solid shadow-sm text-sm font-medium rounded-md text-black bg-[#D9F99D]"
        >
          Add Product
        </button>
      </div>
    </form>
  </v-dialog>
</template>

<script setup>
const openImageUpload = () => document.getElementById('imageInput').click();

import { useStore } from "vuex";
const store = useStore();
</script>
