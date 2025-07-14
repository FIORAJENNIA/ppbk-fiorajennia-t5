<template>
  <q-layout view="hHh lpR fFf">
    <Navbar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script setup>
import Navbar from './components/AppNavbar.vue'
import Footer from './components/AppFooter.vue'
</script>
