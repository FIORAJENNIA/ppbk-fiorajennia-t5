<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar class="q-gutter-sm">

      <!-- Judul toko -->
      <q-toolbar-title class="text-h6">
        ElectroStore
      </q-toolbar-title>

      <!-- Spacer agar tabs berada di kanan -->
      <q-space />

      <!-- Tabs Navigasi -->
      <q-tabs
        align="right"
        breakpoint="600"
        class="bg-primary text-white"
        active-color="yellow"
        indicator-color="yellow"
        narrow-indicator
      >
        <q-route-tab name="Home" to="/" label="Home" />
        <q-route-tab name="Product" to="/product" label="Product" />
        <q-route-tab name="Contact" to="/contact" label="Contact" />
      </q-tabs>

    </q-toolbar>
  </q-header>
</template>

<script setup>
// Tidak ada variabel tambahan diperlukan
</script>
