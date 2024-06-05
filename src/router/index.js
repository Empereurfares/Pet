import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import PetList from '../components/PetList.vue';
import PetForm from '../components/PetForm.vue';
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/pets', component: PetList },
  { path: '/add-pet', component: PetForm, props: { isEdit: false } },
  { path: '/edit-pet/:id', component: PetForm, props: route => ({ isEdit: true, existingPet: route.query }) },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
