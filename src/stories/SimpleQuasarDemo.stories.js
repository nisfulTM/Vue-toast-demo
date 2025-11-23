import SimpleQuasarDemo from '../components/SimpleQuasarDemo.vue'
// import QuasarDemo from '../components/QuasarDemo.vue'

export default {
  title: 'Quasar/Test',
  component: SimpleQuasarDemo,
}

export const Default = {
  render() {
    return {
      components: { SimpleQuasarDemo },
      template: `<SimpleQuasarDemo />`
    }
  }
}
