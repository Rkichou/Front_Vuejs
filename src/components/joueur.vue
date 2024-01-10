<template>
  <div class="player-card">
    <div class="player-image">
      <img class="players-image" :src="un_joueur.photo" :alt="un_joueur.nom">
    </div>
    <div class="player-info">
      <h1 class="player-name">{{ un_joueur.nom }} {{ un_joueur.prenom }}</h1>
      <div class="player-details">
        <div class="detail-row">
          <p class="detail-label">Club:</p>
          <span class="detail-value">{{ un_joueur.club_actuel }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Nationalité:</span>
          <span class="detail-value">   {{ un_joueur.nationalite }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Poste:</span>
          <span class="detail-value">{{ un_joueur.poste }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">date de Naissance :</span>
          <span class="detail-value">{{ dateNaissanceFr }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">lien vers l'agent  :</span>
          <span class="detail-value"><router-link :to="{ name: 'agent', params: { num: extractIdFromUrl(un_joueur.agent) } }">cliquez ici ...</router-link></span>
        </div>
      </div>
    </div>
    
  </div>
  
  <div class="player-section">
  <div class="player-description">
    <h1 class="description-title"> Description</h1>
    <p class="description-text">{{ un_joueur.description }}</p>
  </div>
</div>

 
</template>

<script setup>
import { format } from 'date-fns';

import { ref } from "vue";
import { useRoute } from "vue-router";
import { useDefaultStore } from "../stores/index.js";
const route =useRoute();
const store=useDefaultStore();

function extractIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 1];
}
  const un_joueur = ref(store.Joueurs[route.params.num])
  
  const dateNaissance = un_joueur.value.date_de_naissance;
  function date(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
}
const dateNaissanceFr = date(dateNaissance);

</script>

<style>
.player-section {
    background-color: #201e1e;
    padding: 20px;
  }

  .player-description {
    background-color: #201e1e;
    border: 2px solid gold;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    margin-right: 100px;
    margin-left: 100px;

  }
 .description-title{
  font-size: 35px;
  margin: 0;
  color: #ffffff;
  font-weight: bold;
  font-family:serif;

 }
 .description-title::after{
  content: "";
  display: block;
  width: 50%;
  height: 2px;
  background-color: gold;
  margin-top: 10px;
  margin-left: 300px;
  margin-bottom: 10px;
}
  .description-text {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 25px;
    line-height: 1.5;
    color: #ffffff;
    margin: 0;
  }

  .player-card {
    

    display: flex;
    align-items: center;
    width: 1550px;
    background-color: #201e1e;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }


  .player-info {
    color: #f5f5f5;

    margin-left: 300px;
  }
  .players-image {
  margin-left: 40px;
  filter: drop-shadow(0 0 5px gold); /* Ajout de l'effet de surbrillance dorée */
  }
  .player-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .player-details {
    

    font-size: 16px;
  }


  .detail-row {
   
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .detail-value::after{
    content: "";
  display: block;
  width: 2000%;
  height: 1px;
  background-color: gold;
  margin-top: 10px;

  }
  .detail-label::after{
    content: "";
  display: block;
  width: 2000%;
  height: 1px;
  background-color: gold;
  margin-top: 10px;

  }

  .detail-label {
    font-weight: bold;
  }

  .detail-value {
    font-weight: normal;
  }
</style>
