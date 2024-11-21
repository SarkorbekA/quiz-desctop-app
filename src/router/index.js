import { createRouter, createWebHashHistory } from 'vue-router';
import StudentView from '../views/StudentView.vue';
import AdminLogin from '../components/AdminLogin.vue';
import QuizForm from '../components/QuizForm.vue';

const routes = [
  { path: '/', redirect: '/student' },
  { path: '/student', component: StudentView },
  { path: '/quiz', component: QuizForm },
  { path: '/admin-login', component: AdminLogin },
  { path: '/admin', component: () => import('../views/AdminView.vue') }
];

const router = createRouter({
  history: createWebHashHistory(), // Use hash mode
  routes
});

router.beforeEach((to, from, next) => {
  if (from.path === '/quiz' && to.path !== '/quiz') {
    localStorage.removeItem('student');
  }

  if (to.path === '/quiz') {
    const student = JSON.parse(localStorage.getItem('student'));
    if (!student || !student.name || !student.group) {
      next('/student'); 
      return;
    }
  }

  next(); 
});

export default router;
