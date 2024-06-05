import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AddPetForm from '../components/AddPetForm.vue';
import PetList from '../components/PetList.vue';
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/add-pet',
    name: 'add-pet',
    component: AddPetForm,
  },
  {
    path: '/pets',
    name: 'pets',
    component: PetList,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
