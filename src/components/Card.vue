<script setup>
import {  defineProps,computed, ref } from 'vue'
import {  useRouter } from 'vue-router'
const { heading, ...props } = defineProps(['quizes', 'notes','heading','query'])
const emit = defineEmits(['show-modal', 'delete-note'])
const query = ref('')
const router = useRouter()

const navigateToQuiz = (id) => {
    router.push(`/quiz/${id}`)
}

const combinedData = computed(() => {
  let quizData = Array.isArray(props.quizes)
    ? props.quizes.map(quiz => ({ ...quiz, type: 'quiz' }))
    : [];
let noteData = Array.isArray(props.notes)
    ? props.notes.map(note => ({ ...note, type: 'note' }))
    : [];
  if (query.value) {
    const searchQuery = query.value.toLowerCase();
    quizData = quizData.filter((quiz) =>
      quiz.name.toLowerCase().includes(searchQuery)
    );
    noteData = noteData.filter((note) =>
      note.text.toLowerCase().includes(searchQuery)
    );
  }

  return [...quizData, ...noteData];
});

const onDeleteNote = (id) => {
    emit('delete-note',id)
};

const handleModal = () => {
    emit('show-modal')
}
</script>

<template>
        <input v-model.trim="query" placeholder="Search here..."/>
    <RouterLink v-if="heading==='Notes'" to="/quiz">Quizes</RouterLink>
    <RouterLink v-else to="/notes">Notes</RouterLink>

  <div class="container">
    <header>
      <h1>{{ heading }}</h1>
      <button v-if="heading==='Notes'" @click="handleModal">+</button>
    </header>
    <div class="cards-container">
      <div v-for="item in combinedData" :key="item.id" class="card">
        <div class="quiz" v-if="item.type === 'quiz'"  @click="navigateToQuiz(item.id)">
            
            <img v-if="item.img" class="main-text" :src="item.img"/>
        <p class="text">{{ item.name }}</p>
        <p class="date">{{ item.questions.length }} questions</p>
    </div>
    <div v-else-if="item.type === 'note'">
        <button class="delete" @click="onDeleteNote(item.id)">x</button>
          <p class="text">{{ item.text }}</p>
          <p class="date">{{ new Date(item.date).toLocaleDateString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


  <style scoped>

.container{
  max-width: 1000px;
  margin: 0 auto;
  padding :10px;
}
h1{
  margin-top: 25px;
}
header {
display: flex;
justify-content: space-between;
align-items: center;
color: #000;
}
  header button {
border: none;
padding: 10px;
width: 50px;
height: 50px;
cursor: pointer;
background-color: rgb(21,20,20) ;
border-radius: 100%;
color:#fff
}
.quiz{
    text-align: center;
    cursor: pointer;
}
.cards-container {
display: flex;
flex-wrap: wrap;
}
.card {
width: 225px;
height: 225px;
background-color: rgb(141, 130, 102) ;
padding: 10px;
border-radius: 15px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-right: 20px;
 margin-bottom: 20px;
 color: #000;
}
.date{
  font-size: 12px;
  font-weight: bold;
}
 .delete{
    background-color: rgb(0, 0, 0);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    color: #fff;
    text-align: center;
    border: none;
}
.main-text{
    height: 110px;
    width: 120px;
    border-radius: 50%;
}
</style>
