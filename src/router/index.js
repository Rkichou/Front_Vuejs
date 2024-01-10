import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../components/Accueil.vue'
import joueur from '../components/joueur.vue'
import Joueurs from '../components/Joueurs.vue'
import Clubs from '../components/Clubs.vue'
import agent from '../components/agent.vue'
import offres from '../components/offres.vue'
import Contact from '../components/Contact.vue'

const routes = [
    // À compléter
    {
      path: '/',
      name : 'homepage',
      component : Accueil
    },{
      path: '/joueur/:num?',
      name : 'joueur',
      component : joueur
    },{
      path: '/joueurs',
      name : 'joueurs',
      component : Joueurs
    },{
      path: '/clubs',
      name : 'clubs',
      component : Clubs
    },{
      path: '/agent/:num?',
      name : 'agent',
      component : agent
    },{
      path: '/offres',
      name : 'offres',
      component : offres
    },{
      path: '/Contact',
      name : 'Contact',
      component : Contact
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router