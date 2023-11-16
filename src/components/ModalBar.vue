<template>
  <div v-show="showModal" class="overlay">
    <div class="modal">
      <textarea v-model="newNote" name="note" id="note" cols="30" rows="10" />
      <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
      <button @click="addNote">Add Note</button>
      <button class="close" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { showModal } = defineProps(['showModal', 'notes']);
const emit = defineEmits(['close-modal','add-note']); 

const newNote = ref('');
const errorMessage=ref('')

const addNote = () => {
    if (newNote.value.trim().length < 5) return errorMessage.value = 'Please enter at least 5 characters';
  emit('add-note',newNote.value);
    newNote.value = ''; 
    errorMessage.value = ''
};

const closeModal = () => {
  emit('close-modal');
  newNote.value = ''; 
};

</script>

<style scoped>
.overlay{
  position:absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}


.modal {
width: 750px;
background-color: white; border-radius: 10px;
padding: 30px;
position: relative;
display: flex;
flex-direction: column;
}
.modal button {
padding: 10px 20px; font-size: 20px;
width: 100%;
background-color: blueviolet;
border: none;
color: white;
cursor: pointer; margin-top: 15px;
}

.modal .close{
background-color: rgb(193, 15, 15);
margin-top: 7px;
}
.error{
    color: red;
}
</style>