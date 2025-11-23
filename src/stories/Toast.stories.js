import Toast from '../components/Toast.vue'
import { useToast } from '../composables/useToast'
import { h } from 'vue'

export default {
  title: 'My Components/Toast',
  component: Toast,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { Toast },
  setup() {
    const { showToast } = useToast()

    const triggerToast = (type) => {
      const messages = {
        success: '✅ Success! Your action was completed.',
        error: '❌ Something went wrong.',
        info: 'ℹ️ Here is some information for you.',
      }
      showToast(messages[type], type)
    }

    return () =>
      h('div', { class: 'p-8 space-x-4' }, [
        h('button', {
          class: 'px-4 py-5 bg-green-600 text-white rounded hover:bg-green-700 my-3 block',
          onClick: () => triggerToast('success'),
        }, 'Show Success'),
        h('button', {
          class: 'px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 my-2 block',
          onClick: () => triggerToast('error'),
        }, 'Show Error'),
        h('button', {
          class: 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 block',
          onClick: () => triggerToast('info'),
        }, 'Show Info'),
        h(Toast),
      ])
  },
})
