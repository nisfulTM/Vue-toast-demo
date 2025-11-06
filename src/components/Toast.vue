<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed bottom-5 right-5 rounded-lg px-4 py-3 shadow-lg text-white"
      :class="toastClass"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { toastState } from '../composables/useToast'

const visible = ref(false)
const message = ref('')
const type = ref('info')

watch(
  () => toastState.toast,
  (val) => {
    if (val) {
      message.value = val.message
      type.value = val.type
      visible.value = true
      setTimeout(() => (visible.value = false), 3000)
    }
  },
  { deep: true }
)

const toastClass = computed(() => {
  return {
    'bg-green-600': type.value === 'success',
    'bg-red-600': type.value === 'error',
    'bg-blue-600': type.value === 'info'
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
