// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Category from '../views/Category.vue'
import ProductDetail from '../views/ProductDetail.vue'
import MyPage from '../views/MyPage.vue'
import SearchResults from '../views/SearchResults.vue'
import Login from '../views/Login.vue'
import Signup from '../views/SignUp.vue'
import IdPasswordRecovery from '../views/IdPasswordRecovery.vue'
import AdminLogin from '../views/AdminLogin.vue'; 
import AdminDashboard from '../views/AdminDashboard.vue'
import ProjectManagement from '../views/ProjectManagement.vue'
import UserManagement from '../views/UserManagement.vue'
import ProjectDetail from '../views/ProductDetail.vue';
import UserSearch from '../views/UserSearch.vue';
import ReportStatus from '../views/ReportStatus.vue';
import Profile from '../views/Profile.vue';
import FundingParticipation from '../views/FundingParticipation.vue';
import Wishlist from '../views/Wishlist.vue';
import EventWins from '../views/EventWins.vue';
import FundingStatus from '../views/FundingStatus.vue';
import ProjectRegistration from '../views/ProjectRegistration.vue';
import Live from '../views/Live.vue'
import Schedule from '../views/Schedule.vue'




const routes = [
  { path: '/', name: 'Main', component: Main },
  { path: '/category/:categoryId', name: 'Category', component: Category },
  { path: '/product/:productId', name: 'ProductDetail', component: ProductDetail },
  { path: '/mypage', name: 'MyPage', component: MyPage },
  { path: '/search', name: 'SearchResults', component: SearchResults, props: route => ({ searchQuery: route.query.q }) },
  { path: '/login', name: 'Login', component: Login } ,
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/recovery', name: 'IdPasswordRecovery', component: IdPasswordRecovery },
  { path: '/admin', name: 'AdminLogin', component: AdminLogin },  
  { path: '/admin/dashboard', name: 'AdminDashboard', component: AdminDashboard ,   meta: { requiresAuth: true }} ,
  { path: '/admin/projects', name: 'ProjectManagement', component: ProjectManagement },
  { path: '/admin/users', name: 'UserManagement', component: UserManagement },
  { path: '/admin/projects/:id', component: ProjectDetail, name: 'ProjectDetail' },
  { path: '/admin/users/search', component: UserSearch, name: 'UserSearch'},
  { path: '/admin/users/reports', component: ReportStatus, name: 'ReportStatus'},
  {path: '/mypage/profile', name: 'Profile', component: Profile},
  { path: '/mypage/funding-participation',name: 'FundingParticipation', component: FundingParticipation},
  { path: '/mypage/wishlist', name: 'Wishlist', component: Wishlist},
  { path: '/mypage/event-wins', name: 'EventWins', component: EventWins},
  { path: '/mypage/funding-status', name: 'FundingStatus', component: FundingStatus},
  {path: '/mypage/project-registration',name: 'ProjectRegistration',component: ProjectRegistration },
  { path: '/live', name: 'Live', component: Live },
  { path: '/schedule', name: 'Schedule', component: Schedule },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
