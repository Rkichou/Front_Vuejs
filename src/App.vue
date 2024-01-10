<script setup>
import Accueil from './components/Accueil.vue'


// si vous voulez utilisez pinia , il faut placer ces deux lignes dans le composant de votre choix.
//import { useDefaultStore } from './stores/index'
//const store = useDefaultStore()

</script>

<template>
 
  <main> 
    <router-view /> 
  </main>
</template>

<style>

</style>
