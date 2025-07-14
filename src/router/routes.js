import HomePage from '../pages/HomePage.vue'
import ProductPage from '../pages/ProductPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/product', name: 'Product', component: ProductPage },
  { path: '/contact', name: 'Contact', component: ContactPage }
]

export default routes
