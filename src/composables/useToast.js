import { reactive, readonly } from 'vue'

const state = reactive({
  toast: null
})

export function useToast() {
  const showToast = (message, type = 'info') => {
    state.toast = { message, type }
  }

  return {
    showToast,
    toast: readonly(state.toast)
  } 
}

export const toastState = state
