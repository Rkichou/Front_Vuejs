<template>
  <section id="main">
    <div class="inner">
      <div class="image">
        <img :src="un_Agent.photo" :alt="'Photo de ' + un_Agent.nom + ' ' + un_Agent.prenom">
      </div>
      <div class="info">
        <h1>{{ un_Agent.nom }} {{ un_Agent.prenom }}</h1>
        <p>Email : {{ un_Agent.email }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useDefaultStore } from "../stores/index.js";

const route = useRoute();
const store = useDefaultStore();
const un_Agent = ref(store.agents[route.params.num - 1]);

// Vous pouvez ajouter cette condition pour vérifier si l'agent existe
if (un_Agent.value === undefined) {
  throw new Error("Agent not found");
}
</script>

<style scoped>
/* Styles pour la section principale */

/* Centrer le contenu */
#main {
  margin-top: 50px;
}

/* Disposition en grille */
.inner {
  display: grid;
  grid-template-columns: auto 1fr; /* Colonne de l'image et colonne des informations */
  gap: 20px; /* Espacement entre les colonnes */
  align-items: center;
}

/* Animer l'image */
img {
  max-width: 300px;
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.1);
}

/* Animer le titre */
h1,
p {
  font-size: 24px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s forwards 0.3s;
}

/* Animation personnalisée */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
