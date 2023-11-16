<script setup>
import Question from './Question.vue'
import QuestionHeader from './QuestionHeader.vue'
import quizes from '@Data/quizes.json'
import { useRoute} from 'vue-router';
import { ref,computed } from 'vue';
const route = useRoute()
const id = +route.params.id
const quiz = quizes.find(quiz => quiz.id === id)
const currentQuestionIndex = ref(0)
const questionStatus = computed(() => {
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
})
const questionCompletionBar = computed(() => {
    return `${currentQuestionIndex.value/quiz.questions.length*100}%`
})

</script>
<template>
    <QuestionHeader :questionStatus="questionStatus" :questionCompletionBar="questionCompletionBar"/>
    <Question :question="quiz.questions[currentQuestionIndex]"/>
    <button @click="currentQuestionIndex++">Next Question</button>
</template>
