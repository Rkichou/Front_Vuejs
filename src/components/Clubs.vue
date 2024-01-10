<template>



 
    <div class="partners-container">

      <h1 >KScouting Partenaires</h1> 
<p>votre partenaire de confiance pour dénicher les étoiles montantes du monde du football. Nous sommes une entreprise dévouée à la recherche et au développement des talents prometteurs, en les aidant à atteindre leur plein potentiel et à réaliser leurs rêves sur le terrain..</p>
 <a href="/Contact" class="partners-button">Contactez-nous</a>


    </div>
    <div class="part">
    <div class="partners-list">
      <div v-for="(partner, index) in club" :key="index" class="partner-item">
        <img :src="partner.logo" :alt="partner.name" class="partner-logo">
        <div class="partner-info">
          <h2>{{ partner.nom }}</h2>
          <p>{{ partner.pays }}</p>
        </div>
      </div>
    </div>
  </div>
     
</template>

<script setup>
import { ref } from 'vue';
import { useDefaultStore } from '../stores/index';
  
  const store = useDefaultStore();
const club = ref(store.Clubs)


</script>

<style>
.partners-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #ff9800;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}
.partners-button:hover {
  background-color: #ffab40;
}
.partners-container {
  background-image: url(/images/BKClub.jpg);
  position: relative;
  background-size: cover;
  background-position: center;
  padding: 40px;
  color: #FFF;
  text-align: center;
   
    font-size: 1.4rem;
   
   
  
   
    padding: 292px 16px 28px;
  
}
.partners-container::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px; /* Hauteur du dégradé */
  background-image: linear-gradient(to bottom,rgba(255, 255, 255, 0),#261c3e);
}

.partners-container p {
    font-size: 1.4rem;
    -webkit-font-smoothing: antialiased;
    font-family: fcb-regular,Arial,Helvetica Neue,Helvetica,sans-serif;
    font-weight: 400;
    text-align: center;
    box-sizing: border-box;
    margin-top: 0;
    line-height: 1.6;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    position: relative;
    margin-bottom: 24px;
    max-width: 480px;
}
.partners-container h1 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    color: #FCC52D;
    text-transform: uppercase;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: bold;
    position: relative;
    font-size: 48px;
}
.part {
color: #FCC52D;
  background-color: #261c3e;

}

.partners-list {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
}

.partner-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.partner-logo {
  max-width: 150px;
  height: auto;
}

.partner-info {
  margin-left: 20px;
}

.partner-info h2 {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.partner-info p {
  font-size: 14px;
  margin: 10px 0;
}

.partner-website {
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  color: #FFF;
  transition: color 0.3s ease;
}

.partner-website:hover {
  color: #FFD700;
}

.small-text {
  font-size: 12px;
  margin-top: 20px;
}
</style>