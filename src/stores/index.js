import { defineStore } from 'pinia'
import Axios from 'axios'
export const useDefaultStore = defineStore({
  id: 'default',
  state: () => ({
    "Joueurs" : 
    [
    {"id":1,"nom":"Benzema","prenom":"Karim","nationalite":"fran\u00e7aise","poste":"AT","date_de_naissance":"1987-12-19T00:00:00+00:00","club_actuel":"Real Madrid","photo":"/images\/KBenzema.png","description":"Karim Benzema est un attaquant talentueux connu pour son jeu polyvalent. Il poss\u00e8de une excellente vision du jeu, une bonne technique et une grande capacit\u00e9 \u00e0 marquer des buts. Il a remport\u00e9 de nombreux titres avec le Real Madrid et est un pilier de l\u00e9quipe nationale fran\u00e7aise.","agent":"\/api\/agents\/1","offres":[],"dateDeNaissance":"1987-12-19T00:00:00+00:00","clubActuel":"Real Madrid"},
    {"id":2,"nom":"Erling","prenom":"Haaland","nationalite":"norv\u00e9gien","poste":"AC","date_de_naissance":"2000-03-19T00:00:00+00:00","club_actuel":"Manchester City","photo":"/images\/EHaaland.png","description":"L'international norv\u00e9gien (7 s\u00e9lections, 6 buts) parvient \u00e0 combiner puissance et vitesse d'une mani\u00e8re aussi surprenante qu'in\u00e9dite. Toutefois, ses qualit\u00e9s physiques ne lui serviraient \u00e0 rien s'il \u00e9tait incapable de conclure correctement les actions une fois parvenu devant la cage adverse. Ce n'est heureusement pas le cas. Auteur de 16 buts en 12 matches de Ligue des Champions dans sa carri\u00e8re, de 35 buts en 36 apparitions avec Dortmund depuis son arriv\u00e9e en Allemagne, Erling Haaland sait se montrer clinique dans la zone de v\u00e9rit\u00e9. Sa lourde frappe de balle et son sang-froid \u00e0 toute \u00e9preuve font de lui un redoutable finisseur lorsqu'il est trouv\u00e9 en bonne position sur son pied gauche. Le joueur r\u00e9v\u00e9l\u00e9 au Red Bull Salzburg, en Autriche, dispose donc d'une palette extr\u00eamement large. Cela lui vaut parfois le surnom de \u00ab cyborg \u00bb ou de \u00ab machine \u00bb, tant il semble difficile \u00e0 arr\u00eater. Une impression accentu\u00e9e par son visage impassible, ne d\u00e9gageant jamais la moindre \u00e9motion","agent":"\/api\/agents\/1","offres":["\/api\/offres\/2"],"dateDeNaissance":"2000-03-19T00:00:00+00:00","clubActuel":"Manchester City"},
    {"id":3,"nom":"Lionel","prenom":"Messi","nationalite":"argentin","poste":"SA","date_de_naissance":"1987-06-24T00:00:00+00:00","club_actuel":"Paris Saint-Germain","photo":"/images\/Lmessi.png","description":"Consid\u00e9r\u00e9 par beaucoup comme le meilleur joueur de l'histoire du football, Lionel Messi est un v\u00e9ritable ph\u00e9nom\u00e8ne. Il est capable de dribbler plusieurs adversaires en quelques secondes, de distribuer des passes d\u00e9cisives parfaites et de marquer des buts d'anthologie. Son style de jeu fluide et \u00e9l\u00e9gant, alliant technique, cr\u00e9ativit\u00e9 et intelligence, a inspir\u00e9 de nombreux jeunes joueurs \u00e0 travers le monde. Messi a remport\u00e9 de nombreux titres individuels et collectifs, dont six Ballons d'Or, et est \u00e9galement le meilleur buteur de l'histoire du FC Barcelone et de la Liga espagnole.","agent":"\/api\/agents\/1","offres":["\/api\/offres\/3"],"dateDeNaissance":"1987-06-24T00:00:00+00:00","clubActuel":"Paris Saint-Germain"},
    {"id":4,"nom":"Kylian","prenom":"Mbapp\u00e9","nationalite":"fran\u00e7ais","poste":"AC","date_de_naissance":"1998-12-20T00:00:00+00:00","club_actuel":"Paris Saint-Germain","photo":"/images\/Kmbappe.png","description":"Kylian Mbapp\u00e9 est un jeune prodige du football fran\u00e7ais, capable de marquer des buts et de dribbler comme personne d'autre. Il a commenc\u00e9 sa carri\u00e8re professionnelle \u00e0 l'\u00e2ge de 16 ans et a rapidement \u00e9t\u00e9 remarqu\u00e9 pour sa rapidit\u00e9, sa technique et son sens du but. Mbapp\u00e9 est \u00e9galement devenu le deuxi\u00e8me adolescent seulement, apr\u00e8s Pel\u00e9, \u00e0 marquer en finale de la Coupe du monde. En plus de son talent ind\u00e9niable, Mbapp\u00e9 est \u00e9galement connu pour son humilit\u00e9 et sa d\u00e9termination \u00e0 r\u00e9ussir.","agent":"\/api\/agents\/1","offres":["\/api\/offres\/4"],"dateDeNaissance":"1998-12-20T00:00:00+00:00","clubActuel":"Paris Saint-Germain"},
    {"id":5,"nom":"Cristiano","prenom":"Ronaldo","nationalite":"portugais","poste":"SA","date_de_naissance":"1985-02-05T00:00:00+00:00","club_actuel":"Manchester United","photo":"/images\/CRonaldo.png","description":"Cristiano Ronaldo est un joueur de football portugais connu pour sa technique, sa vitesse et sa capacit\u00e9 \u00e0 marquer des buts. Il a remport\u00e9 de nombreux titres individuels et collectifs, dont cinq Ballons d'Or et cinq Ligues des champions de l'UEFA. Ronaldo est \u00e9galement le meilleur buteur de l'histoire du Real Madrid et de la Ligue des champions. En plus de son talent sur le terrain, Ronaldo est \u00e9galement impliqu\u00e9 dans de nombreuses \u0153uvres de bienfaisance et est connu pour sa g\u00e9n\u00e9rosit\u00e9.","agent":"\/api\/agents\/1","offres":[],"dateDeNaissance":"1985-02-05T00:00:00+00:00","clubActuel":"Manchester United"}
  ],
    "Clubs" :
  [
    {"id":1,"nom":"FC Barcelone","pays":"Espagne","logo":"/images\/Barcelone.png"},
    {"id":2,"nom":"Paris Saint-Germain","pays":"France","logo":"/images\/PSG.png"},
    {"id":3,"nom":"Manchester United","pays":"Angleterre","logo":"/images\/ManUtd.png"},
    {"id":4,"nom":"Bayern Munich","pays":"Allemagne","logo":"/images\/Bayern.png"},
    {"id":5,"nom":"Juventus Turin","pays":"Italie","logo":"/images\/Juventus.png"}
  ],

    "agents" :
  [
    {"id":1,"nom":"Kichou","prenom":"Hichem","email":"Hichem.Kichou@outlook.fr","photo":"/images\/hichem_kichou.jpeg","joueurs":["\/api\/joueurs\/1","\/api\/joueurs\/2","\/api\/joueurs\/3","\/api\/joueurs\/4","\/api\/joueurs\/5"]}
  ],
    "offres" :
  [
    {"id":1,"joueur":"\/api\/joueurs\/1","club":"Angers Sco","Montant":30,"montant":30},
    {"id":2,"joueur":"\/api\/joueurs\/2","club":"Real Madrid","Montant":100,"montant":100},
    {"id":3,"joueur":"\/api\/joueurs\/3","club":"Manchester City","Montant":50,"montant":50},
    {"id":4,"joueur":"\/api\/joueurs\/4","club":"Chelsea","Montant":80,"montant":80},
    {"id":5,"joueur":"\/api\/joueurs\/1","club":"Olympique de Marseille","Montant":40,"montant":40},
    {"id":6,"joueur":"\/api\/joueurs\/5","club":"Olympique de Marseille","Montant":40,"montant":40}

  ]
  
  }),
  getters: {
    
  },
  actions: {/*
    loadData() {
      Axios.get('http://127.0.0.1:8000/api/joueurs.json')
      .then(response => response.data)
      .then(donneesQuizs => this.Joueurs = donneesQuizs)
    }*/
  }
})
