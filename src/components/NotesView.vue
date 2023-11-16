
<script setup>
import {  ref} from 'vue'
import Modal from '@Component/ModalBar.vue'
import Card from '@Component/Card.vue'
import { RouterView } from 'vue-router'
const showModal = ref(false)
const notes = ref([])



const onCloseModal = (updatedNotes) => {
  showModal.value = false; 
  if (updatedNotes !== undefined) {
    notes.value = updatedNotes; 
  }
};

const addNote = (newNote) => {
  notes.value.push({
        id: Math.floor(Math.random() * 10000000),
        text: newNote,
        date: new Date(),
  });
    showModal.value = false; 
}

const deleteNote = (id) => {
  const index = notes.value.findIndex(note => note.id === id);
  if (index !== -1) {
    notes.value.splice(index, 1);
  }
};



</script>

<template>
  <main>
   <Modal :showModal="showModal" @close-modal="onCloseModal" @add-note="addNote"/>
    <Card :heading="'Notes'" :notes="notes" @show-modal="showModal=true" @delete-note="deleteNote"/>
  </main>
</template>

<style scoped>
main{
  height: 100vh;
  width: 100vw;
}

</style>