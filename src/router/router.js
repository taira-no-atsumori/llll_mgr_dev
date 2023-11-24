import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter } from 'vue-router'
import Home from '../components/Home.vue'
import Simulation from '../components/Simulation.vue'
import CardList from '../components/CardList.vue'
import MusicList from '../components/MusicList.vue'
import ItemList from '../components/ItemList.vue'
import License from '../components/License.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/llll_mgr_dev/',
      name: 'Home',
      component: Home
    },
    {
      path: '/llll_mgr_dev/simulation',
      name: 'Simulation',
      component: Simulation
    },
    {
      path: '/llll_mgr_dev/cardlist',
      name: 'CardList',
      component: CardList
    },
    {
      path: '/llll_mgr_dev/musicList',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/llll_mgr_dev/itemList',
      name: 'ItemList',
      component: ItemList
    },
    {
      path: '/llll_mgr_dev/license',
      name: 'License',
      component: License
    }
  ]
});

export default router