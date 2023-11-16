<script setup>
import {  defineProps } from 'vue'
const { question } = defineProps(['question'])
</script>

<template>
            <div class="question-container">
            <h1 class="question">{{ question?.text }}</h1>
        </div>
        <div class="options-container">
            <div class="option" v-for="option in question?.options">
                <p class="option-label">{{ option?.label }}</p>
                <div class="option-value">
                    <p>{{ option?.text }}</p>
                </div>
            </div>
        </div>
</template>
<style scoped>
.question-container {
margin-top: 20px;
color: #000;
}
.question{
     font-size: 40px;
margin-bottom: 20px;
color: #000;}


.option{display: flex;
margin-bottom: 20px;
cursor: pointer;
color: #000;
}
 .option-label {
background-color: bisque;
width: 50px;
height: 50px;
font-size: 30px;
display: flex;
justify-content: center;
align-items: center;}

.option-value {
background-color: rgb(244, 239,239);
width: 100%;
font-size: 30px;
padding: 0
}
</style>