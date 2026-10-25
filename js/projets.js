// Real projects taken from "CAIS - Offre de service" (2023).
const PROJETS = [
 {id:'fni-direction-regionale',t:'Siège FNI – Direction Régionale d\'Alger',cat:'Équipements',an:'2022',type:'Bloc administratif (réhabilitation)',client:'Fonds National d\'Investissement',mission:'Travaux : études et suivi',lieu:'Alger',img:['fni-1','fni-2','fni-3','fni-4','fni-5'],
  txt:'Réhabilitation et aménagement du bloc administratif de la Direction Régionale d\'Alger du Fonds National d\'Investissement, avec une nouvelle façade principale et un réaménagement complet des espaces.',
  pts:['Revêtement de la façade et du mur de clôture principal','Renforcement et surélévation du mur de clôture latéral','Aménagement des espaces extérieurs','Réaménagement des espaces intérieurs (bureaux, salles de regroupement, sanitaire, kitchenette…)']},
 {id:'centre-affaires-el-hamma',t:'Centre d\'affaires – El Hamma',cat:'Équipements',an:'2021',type:'Immeuble d\'affaires (projet d\'étude)',client:'Fonds National d\'Investissement',mission:'Projet d\'étude',lieu:'Belouizdad, Alger',img:['centre-1','centre-2','centre-3','centre-4'],
  txt:'Immeuble d\'affaires proposant plusieurs services, de gabarit R+8 avec 3 sous-sols, situé rue Hassiba Ben Bouali, du côté ouest de l\'hôtel Sofitel.',
  facts:[['Gabarit','R+8 + 3 sous-sols'],['Surface du terrain','1 885 m²'],['Emprise au sol','1 153,50 m²']]},
 {id:'immeuble-habitation',t:'Immeuble d\'habitation',cat:'Résidentiel',an:'2014',type:'Immeuble de logements',client:'Particulier',mission:'Études et suivi',lieu:'Alger',img:['immeuble-1','immeuble-2'],
  txt:'Étude et suivi de réalisation d\'un immeuble d\'habitation en milieu urbain : façade principale et façade postérieure.'},
 {id:'villa',t:'Villa individuelle',cat:'Résidentiel',an:'',type:'Villa',client:'Particulier',mission:'Études et suivi',lieu:'Alger',img:['villa-1','villa-2'],
  txt:'Étude et suivi de réalisation d\'une villa : vue sur la façade principale, la façade latérale et le jardin.'},
 {id:'villa-jardin',t:'Façade et jardin d\'une villa',cat:'Aménagements extérieurs',an:'2016',type:'Revêtement de façade et aménagement de jardin',client:'Particulier',mission:'Études et suivi',lieu:'Alger',img:['jardin-1','jardin-2','jardin-3','jardin-4'],
  txt:'Revêtement de la façade, pergola, aménagement du jardin et de ses allées : de la modélisation 3D au plan de masse.'},
 {id:'cafeteria-fni',t:'Cafétéria du siège FNI',cat:'Aménagements intérieurs',an:'2022',type:'Aménagement intérieur et décoration',client:'Fonds National d\'Investissement',mission:'Travaux : études et suivi',lieu:'Alger',img:['cafe-4','cafe-1','cafe-2','cafe-3'],
  txt:'Aménagement d\'une cafétéria au premier étage du siège, avec design d\'intérieur, décoration et choix du mobilier, de l\'esquisse à la réalisation.'},
 {id:'spa-ain-benian',t:'Espace de réception d\'un SPA',cat:'Aménagements intérieurs',an:'2022',type:'Design d\'intérieur et décoration',client:'Particulier',mission:'Études et suivi',lieu:'Aïn Benian, Alger',img:['spa-2','spa-3','spa-1'],
  txt:'Plan d\'aménagement, design d\'intérieur et décoration de l\'espace de réception d\'un SPA.'}
];
const CATS = ['Équipements', 'Résidentiel', 'Aménagements extérieurs', 'Aménagements intérieurs'];
