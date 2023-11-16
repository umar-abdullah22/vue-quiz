import { createRouter, createWebHistory } from 'vue-router';
import NotesView from '@Component/NotesView.vue';
import Quiz from '@Component/Quiz.vue';
import QuizView from '@Component/QuizView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: NotesView,
    },
    {
      path: '/quiz',
      name: 'Quizes',
      component: Quiz,
    },
    {
      path: '/quiz/:id',
      name: 'Quiz',
      component: QuizView,
    },
    {
      path: '/notes',
      name: 'Notes',
      component: NotesView,
    },
  ],
});

export default router;
