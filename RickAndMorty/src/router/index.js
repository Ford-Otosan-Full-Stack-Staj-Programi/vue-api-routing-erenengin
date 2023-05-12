import { createRouter, createWebHistory } from 'vue-router';
import CharacterList from '../components/CharacterList.vue';
import CharacterPage from '../components/CharacterPage.vue';

const routes = [
  {
    path: '/',
    name: 'CharacterList',
    component: CharacterList,
    
  },
  {
    path: '/character/:id',
    name: 'CharacterPage',
    component: CharacterPage,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

