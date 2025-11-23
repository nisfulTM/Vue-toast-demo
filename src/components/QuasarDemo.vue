<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const drawer = ref(true)
const dialog = ref(false)
const activeCard = ref(null)

const $q = useQuasar()

const openDialog = (n) => {
  activeCard.value = n
  dialog.value = true
}

const save = () => {
  dialog.value = false
  $q.notify({
    type: 'positive',
    message: 'Saved successfully!'
  })
}
</script>

<template>
  <q-layout view="hHh lpR fFf">

    <!-- Header -->
    <q-header class="bg-blue-600 text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title>My App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Sidebar -->
    <q-drawer v-model="drawer" show-if-above side="left" class="bg-gray-100">
      <q-list>
        <q-item clickable><q-item-section>Home</q-item-section></q-item>
        <q-item clickable><q-item-section>Profile</q-item-section></q-item>
        <q-item clickable><q-item-section>Settings</q-item-section></q-item>
      </q-list>
    </q-drawer>

    <!-- Page -->
    <q-page-container>
      <q-page class="p-6">
        <!-- <q-btn color="primary" label="Hello from Quasar"></q-btn> -->
        <!-- Card Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <q-card v-for="n in 6" :key="n" class="p-4 shadow-md">
            <div class="text-xl font-semibold">Card {{ n }}</div>
            <p class="mt-2 text-gray-600">This is a sample card using Quasar + Tailwind.</p>

            <q-btn class="mt-4" color="primary" label="Details" @click="openDialog(n)" />
          </q-card>

        </div>

      </q-page>
    </q-page-container>

    <!-- Dialog -->
    <q-dialog v-model="dialog">
      <q-card class="p-4 w-80">
        <q-card-section>
          <div class="text-xl font-bold">Card {{ activeCard }} Details</div>
          <p class="mt-2">This dialog contains more information.</p>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" v-close-popup />
          <q-btn color="primary" label="Save" @click="save" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-footer class="bg-blue-600 text-white text-center py-3">
      © 2025 My Vue-Quasar App
    </q-footer>

  </q-layout>
</template>
