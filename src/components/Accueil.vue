<template>
  
  <div class="wrapper">
    <header>
      <img src="/images/stadium.jpg" class="background" alt="pas">
     
      <h1 class="title">Bienvenue Chez K-Scouting!</h1>
    </header> 
    
  <section >
    
<section class="international-section">
  <div class="international-content">
    <div class="international-text">
      <h2 class="international-title">KScouting Agency</h2>
      <p class="international-description"> Notre entreprise est une agence de scouting de joueurs de football qui se concentre sur la découverte de nouveaux talents dans le monde entier. Nous sommes passionnés par le football et nous croyons que chaque joueur mérite d'avoir la chance de réaliser son potentiel.
          </p>
      <a href="/#a-propos2" class="international-button" >Learn More</a>
    </div>
    <div class="international-image">
      <img src="/images/KScouting-logo.jpg" alt="International Football Platform"  class="small-image">
    </div>
  </div>
</section>


<section class="international-sectionB" id="a-propos2">
  <div class="international-content">
    <div class="international-text">
      <h2 class="international-title">Talent scouting de haut niveau </h2>
      <p class="international-description"> Nous avons une équipe dévouée de recruteurs professionnels qui ont une expérience de plusieurs années dans le domaine du football. Nous travaillons avec des clubs de football, des agents, des entraîneurs et des joueurs pour identifier les meilleurs talents et les aider à réaliser leurs rêves de jouer au plus haut niveau.</p>
      <a href="/#a-propos3" class="international-button">Learn More</a>
    </div>
    <div class="international-image">
      <img src="/images/Recruteur.jpg" alt="International Football Platform"  class="small-image">
    </div>
  </div>
</section>

<section class="international-section" id="a-propos3">
  <div class="international-content">
    <div class="international-text">
      <h2 class="international-title">Engagement personnalisé pour des résultats optimaux</h2>
      <p class="international-description">Nous sommes fiers de notre approche personnalisée et de notre engagement envers nos clients. Nous nous efforçons de comprendre les besoins de chaque joueur et de chaque club pour garantir des résultats optimaux.</p>
      <a href="/#a-propos4" class="international-button">Learn More</a>
    </div>
    <div class="international-image">
      <img src="/images/Engagement.jpg" alt="International Football Platform"  class="small-image">
    </div>
  </div>
</section>

<section class="international-sectionB" id="a-propos4">
  <div class="international-content">
    <div class="international-text">
      <h2 class="international-title">Votre partenaire pour les futurs talents du football </h2>
      <p class="international-description"> Nous sommes une entreprise dynamique et innovante qui s'engage à rester à la pointe des dernières tendances et technologies dans le domaine du football. Nous sommes impatients de travailler avec vous pour découvrir les stars du football de demain.</p>
      
    </div>
    <div class="international-image">
      <img src="/images/Collab.jpg" alt="International Football Platform"  class="small-image">
    </div>
  </div>
</section>
                                         <!-- services  -->

<section class="services"  id="scroll_service">
  <h1>Nos Services</h1>
  <div class="service-list">
    <div class="service-item">
      <img src="/images/Agent.png" alt="Logo 2">
      <h2> Agents de Joueurs</h2>
      <p> Nos agents sont des professionnels dévoués et expérimentés qui se spécialisent dans la représentation et la gestion de carrière des joueurs. Leur rôle principal est d'agir en tant qu'intermédiaires entre les joueurs et les clubs, </p>

    </div>
    <div class="service-item">
      <img src="/images/Scout.png" alt="Logo 1">
      <h2>Identification des talents</h2>
      <p>Grace a nous soyer les premier a identifier les futures talents du football </p>
      
    </div>

    <div class="service-item">
      <img src="/images/Talent.png" alt="Logo 4">
      <h2>Analyse des performances</h2>
      <p>Analyse your performances and prepare for your next challenge learning from champions.</p>
    </div>
    
    
    <div class="service-item">
      <img src="/images/Giornalista.png" alt="Logo 5">
      
      <h2>Conseils pour les clubs</h2>
      <p>Notre équipe d'experts possède une vaste expérience dans l'industrie du sport et une connaissance approfondie du fonctionnement des clubs</p>
    </div>
    
    
  </div>

                                         <!-- objectif  -->
  
   <section class="service2">
    
  <h1>Nos objectifs</h1>
  <div class="service-list2">
    <div class="service-item">
      <img src="/images/Mondial.png" alt="Logo 2">
      <h2>Devenir le leader mondial du scouting de football</h2>

    </div>
    <div class="service-item">
      <img src="/images/Club.png" alt="Logo 2">
      <h2>Aider les clubs à recruter les meilleurs joueurs</h2>

    </div>
    <div class="service-item">
      <img src="/images/scouting-company.png" alt="Logo 2">
      <h2>Développer de nouvelles techniques de scouting</h2>

    </div>
    <div class="service-item">
      <img src="/images/football.png" alt="Logo 2">
      <h2>Contribuer à la croissance du football dans le monde entier</h2>

    </div>
  </div>
  </section>
</section>
  </section></div>


              
</template>
<script setup>
 
</script>


<style scoped>


.small-image {
  width: 400px;
  height: auto;
}
body {
  margin: 0;
}



.international-section {
  scroll-behavior: smooth;
  background-color: #fff;
  padding: 80px 0;
  text-align: center;
}

.international-sectionB {
  scroll-behavior: smooth;
  background-color: #f8f8f8;
  padding: 80px 0;
  text-align: center;
}

.international-content {
  scroll-behavior: smooth;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.international-text {
  flex: 1;
  text-align: left;
  margin-right: 30px;
}

.international-title {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

.international-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

.international-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #ff9800;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.international-button:hover {
  background-color: #ffab40;
}

.international-image img {
  max-width: 100%;
  height: auto;
}

.services {
  background-color: #ffffff;
  padding: 40px 0;
}
.service2 {
  background-color:#f8f8f8 ;
  padding: 40px 0;
}
.service2 h1 {
  font-family: Georgia, 'Times New Roman', Times, serif;

  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: bold;
  margin-bottom: 80px;
  text-shadow: 0 0 5px rgb(128, 128, 128);;

  
}
.service2 h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
}

  .service2 p {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;}

.services h1 {
  font-family: Georgia, 'Times New Roman', Times, serif;

  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: bold;
  margin-bottom: 80px;
  text-shadow: 0 0 5px rgb(128, 128, 128);;

  
}
.services h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
}

  .services p {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;}

.service-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.service-list2 {
  background-color:#f8f8f8 ;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.service-item {
  width: 300px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  
}

.service-item:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 0 5px rgb(88, 6, 90)); /* Ajout de l'effet de surbrillance dorée */

}

.service-item .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-item:hover .overlay {
  opacity: 1;
}

.service-item .overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.service-item:hover .overlay-content {
  transform: translate(-50%, -50%) scale(1.1);
}

.service-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}


.service-item h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.service-item p {
  font-size: 14px;
}

.wrapper {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
}

header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
}

.background {
  transform: translateZ(-10px) scale(2);
}

.foreground {
  transform: translateZ(-5px) scale(1.5);
}

.background,
.foreground {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}


.divC{
  color: white;
}

.title {
  font-style: oblique;
  font-size: 7rem;
  color: white;
  text-shadow: 0 0 5px black;;
}
.h1A{
  font-size: 4rem;
  text-align: center;
  color: white;
  font-family: "Brush Script MT", cursive;
}
.container {
            width: 100%;
        }

       

section {
  font-size: 2rem;
  padding: 2rem;
  background-color: #261c3e;
  color: rgb(0, 0, 0);
        }

.content {
  display: flex;
  align-items: center;
}

.image img {
  border-radius: 4px;
  max-width: 100%;
  height: auto;
}

.text {
  padding-left: 20px;
}

.text table {
  background-color:#ffd700;
  border-radius: 4px;
}

.text td {
  border: 1px solid #ccc;
  padding: 10px;
}



</style>