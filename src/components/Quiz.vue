<template>

   <Card :heading="'Quizes'" :quizes="quizes" />
  </template>
<script setup>
import q from '@Data/quizes.json'
import Card from './Card.vue';
import { ref } from 'vue'
const quizes = ref(q)
</script>
