<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
    <QuasarDemo />
    <div class="p-60 flex flex-col bg-gray-100 gap-4">
      <button @click="addToast('Success! Action completed.', 'success')"
        class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Show Success Toast
      </button>

      <button @click="addToast('Error! Something went wrong.', 'error')"
        class="ml-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
        Show Error Toast
      </button>
      <Toast />
    </div>
  </div>
</template>

<script setup>
import Toast from './components/Toast.vue'
import { useToast } from './composables/useToast'
import QuasarDemo from './components/QuasarDemo.vue'

// ✅ Get showToast() function from composable
const { showToast } = useToast()

// ✅ Define wrapper function used in template
const addToast = (message, type) => {
  showToast(message, type)
}
</script>
