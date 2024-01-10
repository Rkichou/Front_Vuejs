<template>
 

 <div class="offre-part-container">
  
  <div class="offre-part-text">
    <h1>Offres de Transfert</h1>
    <p>Découvrez les dernières offres de transfert :</p>
</div><img src="/images/ClubPart.png" alt="test" class="offre-part-image">
</div>
        

        <div class="offer-grid">
          
                <div v-for="(offre,index) in store.offres" :key="index" class="offer-card">
                    <div class="offer-player">
                     <img :src="getjoueurById( extractIdFromUrl(offre.joueur)).photo" alt="Photo de {{ offre.joueur.nom }} {{ offre.joueur.prenom }}">    
                    </div>
                    <div  class="offer-details">
                        <p>Offre de transfert :</p>
                        <p>{{ store.Joueurs.find(joueur => joueur.id === extractIdFromUrl(offre.joueur)).clubActuel}}  -> {{ offre.club }} </p>
                        <p>Montant de l'offre : {{ offre.montant }} million €</p>
                        
                    </div>
                </div>
        </div>
  

</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useDefaultStore } from "../stores/index.js";
const route =useRoute();
const store=useDefaultStore();

function extractIdFromUrl(url) {
  const parts = url.split('/');
  const id = parts[parts.length - 1];
  return parseInt(id, 10);
}
function getjoueurById(id) {
  return store.Joueurs.find(joueur => joueur.id === id);
}

console.log( getjoueurById(extractIdFromUrl(store.offres[0].joueur)))
</script>

<style>

.offre-part-container {

  display: flex;
  align-items: center;
  background-color: rgba(3, 16, 70, 0.181);
  background-image: url(/images/ClubPartBK.png);
  background-size: cover; /* Ajustez la taille de l'image de fond */
  background-position: center; /* Ajustez la position de l'image de fond */

  }

  .offre-part-image {
    margin-left: 200px;
        max-width: 400px; /* Ajustez la taille selon vos besoins */
  }

  .offre-part-text {
    text-align: left;
    margin-left: 200px; /* Ajustez la marge selon vos besoins */
    text-shadow: 0 0 5px rgb(172, 169, 169);;
  }
  .offre-part-text h1 {
     font-weight: bold;
     font-family: Georgia, 'Times New Roman', Times, serif;


  }
  .offre-part-text p {
     font-size: 20px;
    


  }
  .offre-part-text::after{
    content: "";
  display: block;
  width: 100%;
  height: 3px;
  background-color: rgb(0, 0, 0);
  margin-top: 10px;

  }
 
.offer-grid {
    background-color: #261c3e;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.offer-card {
    margin-top: 40px;
    width: 30%;
    margin-bottom: 20px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
}

.offer-player img {
    width: 50%;
    height: auto;
    border-radius: 5px;
}

.offer-clubs {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.offer-clubs img {
    width: 45%;
    height: auto;
    border-radius: 5px;
}

.offer-details p {
    margin-top: 10px;
    font-size: 14px;
}

.offer-details p:first-child {
    font-weight: bold;
}

.offer-details p:not(:first-child) {
    margin-bottom: 5px;
}

</style>