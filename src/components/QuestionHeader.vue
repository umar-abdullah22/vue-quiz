<script setup>
import { defineProps } from 'vue'
const { questionStatus } = defineProps(['questionStatus','questionCompletionBar'])

</script>

<template>
    <header>
            <h4>Question {{ questionStatus }}</h4>
            <div class="bar">
                <div class="completion" :style="{width:questionCompletionBar}"></div>
            </div>
        </header>
</template>

<style scoped>
header{
margin-top: 20px;
color: #000;
}
header h4 {
font-size: 30px;
color:#000
}
.bar {
width: 300px;
height: 50px;
border: 3px solid bisque
}
.completion {
height: 100%;
width: 0%;
background-color: rgb(168, 129, 81);}


</style>