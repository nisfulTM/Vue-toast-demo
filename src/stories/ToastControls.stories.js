import Toast from '../components/Toast.vue'
import { useToast } from '../composables/useToast'
import { h, ref } from 'vue'

export default {
  title: 'My Components/Toast Controls',
  component: Toast,
  tags: ['autodocs'],

  argTypes: {
    message: {
      control: 'text',
      description: 'Message to show in the toast',
      defaultValue: 'This is a toast message!',
    },
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'info'],
      description: 'Toast type',
      defaultValue: 'success',
    },
  },
}

export const Default = (args) => ({
  components: { Toast },

  setup() {
    const { showToast } = useToast()

    const triggerToast = () => {
      showToast(args.message, args.type)
    }

    return () =>
      h('div', { class: 'p-8 space-y-4' }, [
        h(
          'button',
          {
            class:
              'px-4 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 block',
            onClick: triggerToast,
          },
          'Trigger Toast'
        ),
        h(Toast),
      ])
  },
})
