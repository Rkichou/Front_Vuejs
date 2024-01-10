<template>

  <div></div>
    <div class="page-container">
      
        <!-- Intro -->
      <section class="section-container">
        <div>
          <h1>Nos Joueurs</h1>
          <p>Nous sommes fiers de présenter 
          </p><p>Nos joueurs talentueux.</p></div>
      </section>



    <!-- les Cartes -->
      <div class="card-stack">
        <div v-for="(joueur, index) in store.Joueurs" :key="index" class="photo-card" :style="{ 'z-index': index }" @mouseover="hoverCard(index)" @mouseout="resetCard()">
            
            <div class="card-inner" :class="{ 'hovered': hoveredCard === index }">
            
            <div class="card-front">
              <router-link :to="{ name: 'joueur', params: { num:index } }"><img :src= "joueur.photo" :alt="joueur.nom" ></router-link>

            </div>
            
          </div>
        </div>
      </div>
      
      
        <div class="section-container2">
         
                <p> Nos joueurs sont des athlètes passionnés et dévoués qui ont travaillé dur pour perfectionner leurs compétences sur le terrain.</p>
                <p>Nous avons une équipe de joueurs expérimentés et émergents, chacun apportant sa propre expertise et son style de jeu unique.</p> 
                <p>Nous sommes convaincus que nos joueurs sont parmi les meilleurs et qu'ils sont prêts à relever tous les défis qui se présentent  </p>
                <p> à eux sur le terrain. Découvrez nos joueurs et apprenez à connaître leur histoire, leur parcours et leur passion pour le football</p>
            
        </div>
     <p>.</p>
     <p>.</p>
     

    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useDefaultStore } from '../stores/index';
  
  const store = useDefaultStore();
  const hoveredCard = ref(null);
  /* onMounted(() => {
  store.loadData()
})*/
 
  function hoverCard(index) {
    hoveredCard.value = index;
  }
  
  function resetCard() {
    hoveredCard.value = null;
  }
  </script>
  
  <style>
.section-container {
  background-image: url(images/IJoueurs.jpg);
  background-size: cover;
  background-position: top;
  height: 350px;
  
  padding: 50px;
  text-align: left;
}
.section-container2 {
  color: #fff;
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
}
.section-container::after {
  content: "";
  display: block;
  width: 40%;
  height: 10px;
  background-color: white;
  margin-top: 10px;
}
.section-container2::before {
  content: "";
  display: block;
  width: 67%;
  margin-left: 250px;
  height: 5px;
  background-color: rgb(255, 255, 0);
  margin-bottom: 20px;
  margin-top: 10px;
}
.section-container2::after {
  content: "";
  display: block;
  width: 67%;
  margin-left: 250px;
  height: 5px;
  background-color: rgb(255, 255, 0);
  margin-bottom: 20px;
  margin-top: 10px;
}
.section-container .section-content {
  color: rgb(255, 255, 255);
  font-size: 32px;
  margin-bottom: 20px;
}

.section-container p {
  color: rgb(255, 255, 255);
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: bold; 
  margin-left: 30px;
}
.section-container h1 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-weight: bold; 
  margin-left: 30px;
  margin-bottom: 10px;
}

  .page-container {
    background-color: #212020;
    margin-bottom: -16px;
 
}
  .card-stack {
    display: flex;
    justify-content: center;
    gap: -80px;
    perspective: 1200px;
    margin-top: 100px;
  margin-bottom: 150px;
  animation: bounce 2s infinite;

    
  }
  

  .photo-card {
    width: 250px;
    height: 350px;
    transition: transform 0.7s;
    position: relative;
    
  }
  
  .card-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateY(-27deg);
  }
  
  .card-inner.hovered {
    transform: translateY(-30px) rotateY(-10deg);
    transition: transform 0.5s ease;
    filter: drop-shadow(0 0 5px gold); /* Ajout de l'effet de surbrillance dorée */

  }
  
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  
  .card-front {
    background-color: #fff;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .card-back {
    background-color: #000;
    color: #fff;
    padding: 10px;
    text-align: center;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .card-back h3,
  .card-back p {
    margin: 0;
  }
  
@keyframes bounce {
  0% {
    tranform: translate(0, 4px);
  }
  50% {
    transform: translate(0, 8px);
  }
} 

  /**/
  </style>
  