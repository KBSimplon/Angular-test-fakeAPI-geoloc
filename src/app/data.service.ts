// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor(private http: HttpClient) { }

//   getList() {
//     return this.http.get('http://static.singlespot.com/tests/la_boucherie/api/')
//   }
// }

export class DataService {
  shops = [
    {
        "Nom": "La Boucherie AIX EN PROVENCE",
        "Libelle": "AIX-EN-PROVENCE - VENELLES (13)",
        "Adresse1": "104 Avenue des Logissons",
        "CP_Ville": "13770 Venelles",
        "Telephone": "(33) 04 42 38 25 08",
        "lat": "43.5829661",
        "lng": "5.473405599999978",
        "extra": "https://www.la-boucherie.fr/restaurants/aix-en-provence-venelles/"
    },
    {
        "Nom": "La Boucherie ALENCON",
        "Libelle": "ALENCON (61)",
        "Adresse1": " Route de Bretagne",
        "CP_Ville": "61000 Alençon",
        "Telephone": "(33) 02 33 32 89 19",
        "lat": "48.432",
        "lng": "0.0738047",
        "extra": "https://www.la-boucherie.fr/restaurants/alencon-61/"
    },
    {
        "Nom": "La Boucherie ANGERS",
        "Libelle": "ANGERS - SAINT-BARTHELEMY-D'ANJOU (49)",
        "Adresse1": " Z.I. la Romanerie Nord",
        "Adresse2": "Rue du Paon",
        "CP_Ville": "49124 Saint Barthélémy d'Anjou",
        "Telephone": "(33) 02 41 05 10 10",
        "lat": "47.4853",
        "lng": "-0.49912",
        "extra": "https://www.la-boucherie.fr/restaurants/angers-st-barthelemy-da-49/"
    },
    {
        "Nom": "La Boucherie ANGERS",
        "Libelle": "ANGERS CENTRE VILLE (49)",
        "Adresse1": "48A Boulevard du Maréchal Foch",
        "CP_Ville": "49100 Angers",
        "Telephone": "(33) 02 41 25 39 25",
        "lat": "47.4681",
        "lng": "-0.55087",
        "extra": "https://www.la-boucherie.fr/restaurants/angers-centre-ville-49/"
    },
    {
        "Nom": "La Boucherie ANGOULÊME",
        "Libelle": "ANGOULÊME - CHAMPNIERS (16)",
        "Adresse1": " Les Grandes Chaumes",
        "CP_Ville": "16430 Champniers",
        "Telephone": "(33) 05 45 22 75 06",
        "lat": "45.6945",
        "lng": "0.179408",
        "extra": "https://www.la-boucherie.fr/restaurants/angouleme-16/"
    },
    {
        "Nom": "La Boucherie ANNECY",
        "Libelle": "ANNECY - EPAGNY (74)",
        "Adresse1": "210 Rue des Peupliers",
        "Adresse2": "Le Grand Epagny",
        "CP_Ville": "74330 Épagny",
        "Telephone": "(33) 04 50 24 26 65",
        "lat": "45.9337",
        "lng": "6.08157",
        "extra": "https://www.la-boucherie.fr/restaurants/annecy-74/"
    },
    {
        "Nom": "La Boucherie ANNEMASSE",
        "Libelle": "ANNEMASSE (74)",
        "Adresse1": "34 Rue du Parc",
        "CP_Ville": "74100 Annemasse",
        "Telephone": "(33) 04 50 38 90 88",
        "lat": "46.1939",
        "lng": "6.22965",
        "extra": "https://www.la-boucherie.fr/restaurants/annemasse-74/"
    },
    {
        "Nom": "La Boucherie ARLES",
        "Libelle": "ARLES (13)",
        "Adresse1": " Avenue de la Libération",
        "Adresse2": "Quartier du Fer à Cheval - CC Leclerc Le Mail",
        "CP_Ville": "13200 Arles",
        "Telephone": "(33) 04 90 96 95 10",
        "lat": "43.7037",
        "lng": "4.64091",
        "extra": "https://www.la-boucherie.fr/restaurants/arles-13/"
    },
    {
        "Nom": "La Boucherie ARRAS",
        "Libelle": "ARRAS (62)",
        "Adresse1": "114 Avenue Winston Churchill",
        "Adresse2": "Parc d'activités des Bonnettes",
        "CP_Ville": "62000 Arras",
        "Telephone": "(33) 03 21 59 70 93",
        "lat": "50.3019",
        "lng": "2.73177",
        "extra": "https://www.la-boucherie.fr/restaurants/arras-62/"
    },
    {
        "Nom": "La Boucherie AUBAGNE",
        "Libelle": "AUBAGNE (13)",
        "Adresse1": "1125 Avenue des Paluds",
        "Adresse2": "ZI Les Plauds",
        "CP_Ville": "13400 Aubagne",
        "Telephone": "(33) 04 96 18 62 56",
        "lat": "43.2911198",
        "lng": "5.593918900000062",
        "extra": "https://www.la-boucherie.fr/restaurants/aubagne-13/"
    },
    {
        "Nom": "La Boucherie AURAY",
        "Libelle": "AURAY (56)",
        "Adresse1": " Zone Océane 3",
        "CP_Ville": "56400 Auray",
        "Telephone": "(33) 02 97 58 37 89",
        "lat": "47.670476340422056",
        "lng": "-3.010285682000699",
        "extra": "https://www.la-boucherie.fr/restaurants/auray-56/"
    },
    {
        "Nom": "La Boucherie AUXERRE",
        "Libelle": "AUXERRE (89)",
        "Adresse1": " Parc d'activités des Clairons",
        "Adresse2": "Rue Henri Spaak",
        "CP_Ville": "89000 Auxerre",
        "Telephone": "(33) 03 86 33 07 96",
        "lat": "47.8142",
        "lng": "3.56291",
        "extra": "https://www.la-boucherie.fr/restaurants/auxerre-89/"
    },
    {
        "Nom": "La Boucherie AVIGNON CENTRE",
        "Libelle": "AVIGNON CENTRE (84)",
        "Adresse1": "28 Place de l'Horloge",
        "Adresse2": "Proche Hotel Mercure",
        "CP_Ville": "84000 Avignon",
        "Telephone": "(33) 04 90 81 00 68",
        "lat": "43.949845",
        "lng": "4.806245",
        "extra": "https://www.la-boucherie.fr/restaurants/avignon-centre/"
    },
    {
        "Nom": "La Boucherie AVIGNON SUD",
        "Libelle": "AVIGNON SUD (84)",
        "Adresse1": "2968 Avenue de l'Amandier",
        "Adresse2": "Proche Hotel Ibis Styles",
        "CP_Ville": "84000 Avignon",
        "Telephone": "(33) 04 90 87 86 46",
        "lat": "43.939107",
        "lng": "4.850375",
        "extra": "https://www.la-boucherie.fr/restaurants/avignon-sud-84/"
    },
    {
        "Nom": "La Boucherie AVRANCHES",
        "Libelle": "AVRANCHES - VAL-SAINT-PERE (50)",
        "Adresse1": " Parc d'activité de la Baie",
        "Adresse2": "Lieu dit Le Grand Chien",
        "CP_Ville": "50300 Val Saint Père",
        "Telephone": "(33) 02 33 60 91 59",
        "lat": "48.6558",
        "lng": "-1.35372",
        "extra": "https://www.la-boucherie.fr/restaurants/avranches-50/"
    },
    {
        "Nom": "La Boucherie BAR LE DUC",
        "Libelle": "BAR-LE-DUC (55)",
        "Adresse1": " Ferme de Popey",
        "CP_Ville": "55500 Bar le Duc",
        "Telephone": "(33) 03 29 70 95 44",
        "lat": "48.7636",
        "lng": "5.18566",
        "extra": "https://www.la-boucherie.fr/restaurants/bar-le-duc-55/"
    },
    {
        "Nom": "La Boucherie BAYEUX",
        "Libelle": "BAYEUX (14)",
        "Adresse1": "2 Place du Marché",
        "CP_Ville": "14400 Bayeux",
        "Telephone": "(33) 02 31 51 80 32",
        "lat": "49.2797",
        "lng": "-0.70795",
        "extra": "https://www.la-boucherie.fr/restaurants/bayeux-14/"
    },
    {
        "Nom": "La Boucherie BAYONNE",
        "Libelle": "BAYONNE (64)",
        "Adresse1": " 8 Chemin de Hayet",
        "Adresse2": "Zone Artisanale Saint Frédéric",
        "CP_Ville": "64100 BAYONNE",
        "Telephone": "(33) 05 59 56 45 64",
        "lat": "43.49163009999999",
        "lng": "-1.4512474000000566",
        "extra": "https://www.la-boucherie.fr/restaurants/bayonne-64/"
    },
    {
        "Nom": "La Boucherie BEAUVAIS",
        "Libelle": "BEAUVAIS (60)",
        "Adresse1": " Lotissement « Les Marettes »",
        "Adresse2": "Rue Jean Jacques Goddet",
        "CP_Ville": "60000 Beauvais",
        "Telephone": "(33) 03 44 03 45 14",
        "lat": "49.4373",
        "lng": "2.11179",
        "extra": "https://www.la-boucherie.fr/restaurants/beauvais-60/"
    },
    {
        "Nom": "La Boucherie BERGERAC",
        "Libelle": "BERGERAC - SAINT-LAURENT-DES-VIGNES (24)",
        "Adresse1": " La Paillet",
        "Adresse2": "RD 936",
        "CP_Ville": "24100 Saint Laurent des Vignes",
        "Telephone": "(33) 05 53 58 62 85",
        "lat": "44.83362428217628",
        "lng": "0.4421022248840245",
        "extra": "https://www.la-boucherie.fr/restaurants/bergerac-saint-laurent-vignes-24/"
    },
    {
        "Nom": "La Boucherie BESANÇON",
        "Libelle": "BESANÇON - MISEREY SALINES (25) ",
        "Adresse1": " Rue Météore",
        "Adresse2": "ZAC Valentin",
        "CP_Ville": "25480 Miserey-Salines",
        "Telephone": "(33) 0381611108",
        "lat": "47.28308594736319",
        "lng": "5.989109322753848",
        "extra": "https://www.la-boucherie.fr/restaurants/besancon-miserey-salines-25/"
    },
    {
        "Nom": "La Boucherie BLOIS",
        "Libelle": "BLOIS (41)",
        "Adresse1": "25 Rue de la Vallée Maillard",
        "Adresse2": "ZA Vallée Maillard",
        "CP_Ville": "41000 Blois",
        "Telephone": "(33) 02 54 74 34 40",
        "lat": "47.6113",
        "lng": "1.33682",
        "extra": "https://www.la-boucherie.fr/restaurants/blois-41/"
    },
    {
        "Nom": "La Boucherie BOURGES",
        "Libelle": "BOURGES (18)",
        "Adresse1": " Rue Nicephore Niepce",
        "Adresse2": "ZAC de l'Echangeur",
        "CP_Ville": "18000 Bourges",
        "Telephone": "(33) 02 48 66 16 40",
        "lat": "47.04535106366421",
        "lng": "2.3446033544921647",
        "extra": "https://www.la-boucherie.fr/restaurants/bourges-18/"
    },
    {
        "Nom": "La Boucherie BOURGOIN-JALLIEU",
        "Libelle": "BOURGOIN-JALLIEU (38)",
        "Adresse1": " 6 parc de la Ladrière",
        "Adresse2": "ZAC de la Maladière",
        "CP_Ville": "38300 Bourgoin-Jallieu",
        "Telephone": "(33) 04 74 43 30 91",
        "lat": "45.591",
        "lng": "5.24718",
        "extra": "https://www.la-boucherie.fr/restaurants/bourgoin-jallieu-38/"
    },
    {
        "Nom": "La Boucherie BREST",
        "Libelle": "BREST (29)",
        "Adresse1": "179 Route de Gouesnou",
        "Adresse2": "ZI de Kergaradec",
        "CP_Ville": "29200 Brest",
        "Telephone": "(33) 02 98 02 12 15",
        "lat": "48.4176",
        "lng": "-4.46751",
        "extra": "https://www.la-boucherie.fr/restaurants/brest-29/"
    },
    {
        "Nom": "La Boucherie BRIIS-SOUS-FORGES",
        "Libelle": "BRIIS-SOUS-FORGES (91)",
        "Adresse1": " Autoroute A10",
        "Adresse2": "Aire de Limours",
        "CP_Ville": "91640 Briis-sous-Forges",
        "Telephone": "(33) 01 64 90 86 97",
        "lat": "48.6353",
        "lng": "2.14907",
        "extra": "https://www.la-boucherie.fr/restaurants/briis-sous-forges-91/"
    },
    {
        "Nom": "La Boucherie BRIVE-LA-GAILLARDE",
        "Libelle": "BRIVE-LA-GAILLARDE (19)",
        "Adresse1": "34 Avenue de Paris",
        "CP_Ville": "19100 Brive-la-Gaillarde",
        "Telephone": "(33) 05 55 88 03 07",
        "lat": "45.164",
        "lng": "1.53225",
        "extra": "https://www.la-boucherie.fr/restaurants/brive-la-gaillarde-19/"
    },
    {
        "Nom": "La Boucherie BRON",
        "Libelle": "BRON (69)",
        "Adresse1": "16 Rue Maryse Bastie",
        "CP_Ville": "69500 Bron",
        "Telephone": "(33) 04 78 26 95 88 ",
        "lat": "45.725953037068734",
        "lng": "4.924660442327877",
        "extra": "https://www.la-boucherie.fr/restaurants/bron-69/"
    },
    {
        "Nom": "La Boucherie BRUAY-LA-BUISSIÈRE",
        "Libelle": "BRUAY-LA-BUISSIÈRE (62)",
        "Adresse1": " Lotissement les Lumières",
        "CP_Ville": "62700 Bruay-la-Buissière",
        "Telephone": "(33) 03 21 52 64 43",
        "lat": "50.4947",
        "lng": "2.57874",
        "extra": "https://www.la-boucherie.fr/restaurants/bruay-la-buissiere-62/"
    },
    {
        "Nom": "La Boucherie CAEN",
        "Libelle": "CAEN (14)",
        "Adresse1": "43 Quai de Juillet",
        "CP_Ville": "14000 Caen",
        "Telephone": "(33) 02 31 34 89 89",
        "lat": "49.1788",
        "lng": "-0.35237",
        "extra": "https://www.la-boucherie.fr/restaurants/caen-14/"
    },
    {
        "Nom": "La Boucherie ST CONTEST",
        "Libelle": "CAEN - SAINT CONTEST (14)",
        "Adresse1": " Boulevard du Maréchal Juin",
        "Adresse2": "sortie périphérique n°7",
        "CP_Ville": "14280 Saint Contest",
        "Telephone": "(33) 02 31 50 50 50",
        "lat": "49.202093",
        "lng": "-0.394515",
        "extra": "https://www.la-boucherie.fr/restaurants/caen-saint-contest-14/"
    },
    {
        "Nom": "La Boucherie Castelnau-le-Lez",
        "Libelle": "CASTELNAU-LE-LEZ (34)",
        "Adresse1": "145 rue Alphonse Beau de Rochas",
        "CP_Ville": "34170 Castelnau-le-Lez",
        "Telephone": "(33) 04 67 72 66 83",
        "lat": "43.638209",
        "lng": "3.929359",
        "extra": "https://www.la-boucherie.fr/restaurants/castelnau-lez-34/"
    },
    {
        "Nom": "La Boucherie CASTRES",
        "Libelle": "CASTRES - SAIX (81)",
        "Adresse1": "18  bis route de Toulouse",
        "CP_Ville": "81710 Saïx",
        "Telephone": "(33) 05 63 73 20 83",
        "lat": "43.583647",
        "lng": "2.157436",
        "extra": "https://www.la-boucherie.fr/restaurants/castres-saix-81/"
    },
    {
        "Nom": "La Boucherie CHALLANS",
        "Libelle": "CHALLANS (85)",
        "Adresse1": "172 B Rue Carnot",
        "CP_Ville": "85300 Challans",
        "Telephone": "(33) 02 51 49 43 76",
        "lat": "46.8503",
        "lng": "-1.88845",
        "extra": "https://www.la-boucherie.fr/restaurants/challans-85/"
    },
    {
        "Nom": "La Boucherie CHAMBERY",
        "Libelle": "CHAMBERY - LA RAVOIRE (73)",
        "Adresse1": "1115 Route Nationale 6",
        "CP_Ville": "73490 La Ravoire",
        "Telephone": "(33) 04 79 70 29 34",
        "lat": "45.5692",
        "lng": "5.96272",
        "extra": "https://www.la-boucherie.fr/restaurants/chambery-73/"
    },
    {
        "Nom": "La Boucherie CHAPONNAY",
        "Libelle": "CHAPONNAY (69)",
        "Adresse1": "523 Rue Tony Garnier",
        "CP_Ville": "69970 Chaponnay",
        "Telephone": "(33) 04 72 70 65 41 ",
        "lat": "45.6509",
        "lng": "4.92322",
        "extra": "https://www.la-boucherie.fr/restaurants/chaponnay-69/"
    },
    {
        "Nom": "La Boucherie CHOLET",
        "Libelle": "CHOLET (49)",
        "Adresse1": " ZAC de l'Ecuyère",
        "Adresse2": "Avenue d'Angers",
        "CP_Ville": "49300 Cholet",
        "Telephone": "(33) 02 41 70 45 68",
        "lat": "47.0776",
        "lng": "-0.836366",
        "extra": "https://www.la-boucherie.fr/restaurants/cholet-49/"
    },
    {
        "Nom": "La Boucherie CHOLET SUD",
        "Libelle": "CHOLET SUD (49)",
        "Adresse1": " Avenue des Sables",
        "CP_Ville": "49300 Cholet",
        "Telephone": "(33) 02 41 65 83 93",
        "lat": "47.04224389999999",
        "lng": "-0.8992110000000366",
        "extra": "https://www.la-boucherie.fr/restaurants/cholet-49-2/"
    },
    {
        "Nom": "La Boucherie CLERMONT FERRAND",
        "Libelle": "CLERMONT FERRAND - AUBIERE (63)",
        "Adresse1": "26 Avenue Lavoisier",
        "Adresse2": "ZAC des Varennes Est",
        "CP_Ville": "63170 Aubière",
        "Telephone": "(33) 04 73 27 27 37",
        "lat": "45.7561",
        "lng": "3.14277",
        "extra": "https://www.la-boucherie.fr/restaurants/clermont-ferrand-aubiere-63/"
    },
    {
        "Nom": "La Boucherie CLERMONT FERRAND",
        "Libelle": "CLERMONT-FERRAND (63) [Fermeture pour travaux du 15 au 29/01]",
        "Adresse1": "17 Boulevard Edgar Quinet",
        "CP_Ville": "63100 Clermont Ferrand",
        "Telephone": "(33) 04 73 23 08 08",
        "lat": "45.8018",
        "lng": "3.11478",
        "extra": "https://www.la-boucherie.fr/restaurants/clermont-ferrand-63/"
    },
    {
        "Nom": "La Boucherie COLMAR",
        "Libelle": "COLMAR (68)",
        "Adresse1": "24 Rue des métiers",
        "CP_Ville": "68000 Colmar",
        "Telephone": "(33) 03 89 21 93 24",
        "lat": "48.1117",
        "lng": "7.36511",
        "extra": "https://www.la-boucherie.fr/restaurants/colmar-68/"
    },
    {
        "Nom": "La Boucherie CREIL",
        "Libelle": "CREIL - SAINT-MAXIMIN (60)",
        "Adresse1": " ZAC du bois des fenêtres",
        "Adresse2": "Lieu dit Le Megret",
        "CP_Ville": "60100 Creil",
        "Telephone": "(33) 03 44 25 79 75",
        "lat": "49.2563",
        "lng": "2.47655",
        "extra": "https://www.la-boucherie.fr/restaurants/creil-st-maximin-60/"
    },
    {
        "Nom": "La Boucherie CREUTZWALD",
        "Libelle": "CREUTZWALD (57)",
        "Adresse1": " Rue de Longueville",
        "CP_Ville": "57150 Creutzwald",
        "Telephone": "(33) 03 87 89 42 01",
        "lat": "49.1908",
        "lng": "6.69416",
        "extra": "https://www.la-boucherie.fr/restaurants/creutzwald-57/"
    },
    {
        "Nom": "La Boucherie DIJON QUETIGNY",
        "Libelle": "DIJON QUETIGNY (21)",
        "Adresse1": " Zone de loisirs du Cap Vert",
        "CP_Ville": "21800 QUETIGNY",
        "Telephone": "(33) 03 80 57 32 62",
        "lat": "47.312748744617195",
        "lng": "5.091632895987004",
        "extra": "https://www.la-boucherie.fr/restaurants/dijon-quetigny-21/"
    },
    {
        "Nom": "La Boucherie EPINAL -JEUXEY",
        "Libelle": "EPINAL - JEUXEY (88)",
        "Adresse1": " «Au Dessus De Salet»",
        "Adresse2": "RD46",
        "CP_Ville": "88000 Jeuxey",
        "Telephone": "(33) 03 29 39 16 72",
        "lat": "48.2006",
        "lng": "6.48812",
        "extra": "https://www.la-boucherie.fr/restaurants/epinal-jeuxey-88/"
    },
    {
        "Nom": "La Boucherie FONTENAY LE COMTE",
        "Libelle": "FONTENAY-LE-COMTE (85)",
        "Adresse1": " Allée de l'innovation",
        "CP_Ville": "85200 Fontenay le Comte",
        "Telephone": "(33) 02 28 13 04 77",
        "lat": "46.4471",
        "lng": "-0.815316",
        "extra": "https://www.la-boucherie.fr/restaurants/fontenay-le-comte-85/"
    },
    {
        "Nom": "La Boucherie GAP",
        "Libelle": "GAP (05)",
        "Adresse1": "8 Avenue de Provence",
        "CP_Ville": "05000 Gap",
        "Telephone": "(33) 04 92 51 05 84",
        "lat": "44.5462",
        "lng": "6.06373",
        "extra": "https://www.la-boucherie.fr/restaurants/gap-05/"
    },
    {
        "Nom": "La Boucherie GENNEVILLIERS",
        "Libelle": "GENNEVILLIERS (92)",
        "Adresse1": "277 Avenue Laurent Cély",
        "CP_Ville": "92230 Gennevilliers",
        "Telephone": "(33) 01 47 91 58 17",
        "lat": "48.925474",
        "lng": "2.304531",
        "extra": "https://www.la-boucherie.fr/restaurants/gennevilliers-31/"
    },
    {
        "Nom": "La Boucherie GRENOBLE",
        "Libelle": "GRENOBLE (38)",
        "Adresse1": "236 Cours de la Libération",
        "CP_Ville": "38100 Grenoble",
        "Telephone": "(33) 04 76 40 07 55",
        "lat": "45.1597",
        "lng": "5.70918",
        "extra": "https://www.la-boucherie.fr/restaurants/grenoble-38/"
    },
    {
        "Nom": "La Boucherie GRIGNY",
        "Libelle": "GRIGNY (91)",
        "Adresse1": "1 Route Nationale",
        "CP_Ville": "91350 Grigny",
        "Telephone": "(33) 01 69 06 24 80",
        "lat": "48.6654",
        "lng": "2.39854",
        "extra": "https://www.la-boucherie.fr/restaurants/grigny-91/"
    },
    {
        "Nom": "La Boucherie GUJAN-MESTRAS",
        "Libelle": "GUJAN-MESTRAS (33)",
        "Adresse1": "16 Allée Charles Perrault",
        "CP_Ville": "33470 Gujan-Mestras",
        "Telephone": "(33) 05 56 54 19 68",
        "lat": "44.615961",
        "lng": "-1.070615",
        "extra": "https://www.la-boucherie.fr/restaurants/gujan-mestras/"
    },
    {
        "Nom": "La Boucherie HAGUENAU",
        "Libelle": "HAGUENAU (67)",
        "Adresse1": "2 Chemin de la Sandlach",
        "Adresse2": "Route de Bitche",
        "CP_Ville": "67500 Haguenau",
        "Telephone": "(33) 03 88 73 76 33",
        "lat": "48.8285",
        "lng": "7.75647",
        "extra": "https://www.la-boucherie.fr/restaurants/haguenau-67/"
    },
    {
        "Nom": "La Boucherie ISSOUDUN",
        "Libelle": "ISSOUDUN (36)",
        "Adresse1": " ZA \"Les Coinchettes\"",
        "CP_Ville": "36100 Issoudun",
        "Telephone": "(33) 02 54 49 61 80",
        "lat": "46.9563",
        "lng": "2.01543",
        "extra": "https://www.la-boucherie.fr/restaurants/issoudun-36/"
    },
    {
        "Nom": "La Boucherie LA ROCHE-SUR-YON",
        "Libelle": "LA ROCHE-SUR-YON (85)",
        "Adresse1": "  Rue François Cevert",
        "CP_Ville": "85000 La Roche-Sur-Yon",
        "Telephone": "(33) 02 51 05 07 12",
        "lat": "46.6982",
        "lng": "-1.42678",
        "extra": "https://www.la-boucherie.fr/restaurants/la-roche-sur-yon-85/"
    },
    {
        "Nom": "La Boucherie LA ROCHELLE",
        "Libelle": "LA ROCHELLE (17)",
        "Adresse1": "45 Rue de la scierie",
        "Adresse2": "Les Minimes",
        "CP_Ville": "17000 La Rochelle",
        "Telephone": "(33) 05 46 30 48 30",
        "lat": "46.1476",
        "lng": "-1.1529",
        "extra": "https://www.la-boucherie.fr/restaurants/la-rochelle-17/"
    },
    {
        "Nom": "La Boucherie LANGON",
        "Libelle": "LANGON (33)",
        "Adresse1": " \"Petiteau Ouest\"",
        "Adresse2": "Boulevard Pierre Lagorce",
        "CP_Ville": "33210 Langon",
        "Telephone": "(33) 05 56 76 77 93",
        "lat": "44.5416",
        "lng": "-0.254901",
        "extra": "https://www.la-boucherie.fr/restaurants/langon-33/"
    },
    {
        "Nom": "La Boucherie LAVAL",
        "Libelle": "LAVAL (53)",
        "Adresse1": "33 Quai Gambetta",
        "CP_Ville": "53000 Laval",
        "Telephone": "(33) 02 53 74 02 28",
        "lat": "48.0724",
        "lng": "-0.771757",
        "extra": "https://www.la-boucherie.fr/restaurants/laval-53/"
    },
    {
        "Nom": "La Boucherie LE PIAN MEDOC",
        "Libelle": "LE PIAN MEDOC (33)",
        "Adresse1": " Route De Pauillac",
        "Adresse2": "Zone Commerciale Des Portes Du Medoc ",
        "CP_Ville": "33290 Le Pian Medoc",
        "Telephone": "(33) 05 56 45 95 84",
        "lat": "44.953198",
        "lng": "-0.629926",
        "extra": "https://www.la-boucherie.fr/restaurants/pian-medoc-33/"
    },
    {
        "Nom": "La Boucherie LES HERBIERS",
        "Libelle": "LES HERBIERS (85)",
        "Adresse1": "18 Rue de Saumur",
        "CP_Ville": "85500 Les Herbiers",
        "Telephone": "(33) 02 51 66 81 30",
        "lat": "46.8732",
        "lng": "-1.01466",
        "extra": "https://www.la-boucherie.fr/restaurants/les-herbiers-85/"
    },
    {
        "Nom": "La Boucherie LES ULIS",
        "Libelle": "LES ULIS (91)",
        "Adresse1": " Rue de la Réunion",
        "Adresse2": "Zone Artisanale de Courtaboeuf",
        "CP_Ville": "91940 Les Ulis",
        "Telephone": "(33) 01 69 28 88 88",
        "lat": "48.6823",
        "lng": "2.2028",
        "extra": "https://www.la-boucherie.fr/restaurants/les-ulis-91/"
    },
    {
        "Nom": "La Boucherie LIMOGES",
        "Libelle": "LIMOGES (87)",
        "Adresse1": "16  Rue Frédéric Bastiat",
        "CP_Ville": "87280 Limoges",
        "Telephone": "(33) 05 55 33 24 40",
        "lat": "45.884477",
        "lng": "1.290997",
        "extra": "https://www.la-boucherie.fr/restaurants/limoges-87/"
    },
    {
        "Nom": "La Boucherie LIMOGES GARE",
        "Libelle": "LIMOGES Gare (87)",
        "Adresse1": "44 Cours Gay Lussac",
        "CP_Ville": "87000 Limoges",
        "Telephone": "(33) 05 55 36 76 51",
        "lat": "45.8358567",
        "lng": "1.2621645000000399",
        "extra": "https://www.la-boucherie.fr/restaurants/limoges-gare/"
    },
    {
        "Nom": "La Boucherie LOCHES",
        "Libelle": "LOCHES (37)",
        "Adresse1": "33 Rue des Lézards",
        "CP_Ville": "37600 Loches",
        "Telephone": "(33) 02 47 19 76 85",
        "lat": "47.130602",
        "lng": "0.98276",
        "extra": "https://www.la-boucherie.fr/restaurants/loches-37/"
    },
    {
        "Nom": "La Boucherie LORIENT",
        "Libelle": "LORIENT - LANESTER (56)",
        "Adresse1": " Rue Faraday",
        "Adresse2": "Les Hauts de Kerrous",
        "CP_Ville": "56600 Lanester",
        "Telephone": "(33) 02 97 81 36 12",
        "lat": "47.7785",
        "lng": "-3.34285",
        "extra": "https://www.la-boucherie.fr/restaurants/lorient-lanester-56/"
    },
    {
        "Nom": "La Boucherie LYON",
        "Libelle": "LYON - DARDILLY (69) [FERMETURE TEMPORAIRE]",
        "Adresse1": " Centre Commercial Auchan - Porte de Lyon",
        "Adresse2": "RN6",
        "CP_Ville": "69670 Dardilly",
        "Telephone": "(33) 04 37 49 96 06",
        "lat": "45.820006410329185",
        "lng": "4.767200830085812",
        "extra": "https://www.la-boucherie.fr/restaurants/lyon-dardilly-69/"
    },
    {
        "Nom": "La Boucherie MARCQ-EN-BAROEUL",
        "Libelle": "MARCQ-EN-BAROEUL (59)",
        "Adresse1": " Rue du cheval blanc",
        "CP_Ville": "59700 Marcq-en-Baroeul",
        "Telephone": "(33) 03 20 72 97 90",
        "lat": "50.6827",
        "lng": "3.0861",
        "extra": "https://www.la-boucherie.fr/restaurants/marcq-en-baroeul-59/"
    },
    {
        "Nom": "La Boucherie MARSEILLE",
        "Libelle": "MARSEILLE - VITROLLES",
        "Adresse1": "2 rue Gérard Toulon",
        "Adresse2": "Cinémas CGR",
        "CP_Ville": "13127 Vitrolles",
        "Telephone": "(33) 04 42 88 60 15",
        "lat": "43.438723",
        "lng": "5.254491",
        "extra": "https://www.la-boucherie.fr/restaurants/marseille-vitrolles/"
    },
    {
        "Nom": "La Boucherie METZ",
        "Libelle": "METZ (57)",
        "Adresse1": " Place de la république",
        "CP_Ville": "57000 Metz",
        "Telephone": "(33) 03 87 36 33 00",
        "lat": "49.1148",
        "lng": "6.1733",
        "extra": "https://www.la-boucherie.fr/restaurants/metz-57/"
    },
    {
        "Nom": "La Boucherie SAINT AVIT",
        "Libelle": "MONT-DE-MARSAN - SAINT-AVIT (40)",
        "Adresse1": "151 Allée mamoura ",
        "Adresse2": "Parc d’activités Mamoura",
        "CP_Ville": "40090 Saint Avit",
        "Telephone": "(33) 05 58 45 45 45",
        "lat": "43.91958378001884",
        "lng": "-0.44762373806759115",
        "extra": "https://www.la-boucherie.fr/restaurants/saint-avit-40/"
    },
    {
        "Nom": "La Boucherie MONTARGIS",
        "Libelle": "MONTARGIS - AMILLY (45)",
        "Adresse1": "688 Rue de St Firmin des Vignes",
        "CP_Ville": "45200 Amilly",
        "Telephone": "(33) 02 38 95 62 72",
        "lat": "47.9787",
        "lng": "2.73393",
        "extra": "https://www.la-boucherie.fr/restaurants/montargis-amilly-45/"
    },
    {
        "Nom": "La Boucherie MONTAUBAN",
        "Libelle": "MONTAUBAN (82)",
        "Adresse1": "1540 Avenue de Toulouse",
        "CP_Ville": "82000 Montauban",
        "Telephone": "(33) 05 63 63 55 43",
        "lat": "43.99305024055918",
        "lng": "1.3374158896881454",
        "extra": "https://www.la-boucherie.fr/restaurants/montauban-82/"
    },
    {
        "Nom": "La Boucherie MONTBRISON",
        "Libelle": "MONTBRISON - SAVIGNEUX (42)",
        "Adresse1": " Zone de loisirs La Bruyere",
        "CP_Ville": "42600 Savigneux",
        "Telephone": "(33) 04 77 96 07 07",
        "lat": "45.6112",
        "lng": "4.09436",
        "extra": "https://www.la-boucherie.fr/restaurants/montbrison-savigneux-42/"
    },
    {
        "Nom": "La Boucherie MONTÉLIMAR",
        "Libelle": "MONTÉLIMAR (26)",
        "Adresse1": "9 Boulevard Marre Desmarais",
        "CP_Ville": "26200 Montélimar",
        "Telephone": "(33) 04 75 01 80 04",
        "lat": "44.55983369999999",
        "lng": "4.748204699999974",
        "extra": "https://www.la-boucherie.fr/restaurants/montelimar-26/"
    },
    {
        "Nom": "La Boucherie MONTLUCON",
        "Libelle": "MONTLUCON - SAINT-VICTOR (03)",
        "Adresse1": " Rue Marius Berliet - ZAC De la Loue",
        "Adresse2": "Aire des vérités - Sortie 37",
        "CP_Ville": "03410 Saint Victor",
        "Telephone": "(33) 04 70 64 57 70",
        "lat": "46.3778",
        "lng": "2.58791",
        "extra": "https://www.la-boucherie.fr/restaurants/montlucon-st-victor/"
    },
    {
        "Nom": "La Boucherie MONTPELLIER",
        "Libelle": "MONTPELLIER - PEROLS (34)",
        "Adresse1": "2630 Avenue Georges Freche",
        "Adresse2": "Parc d’activités de l'Aéroport",
        "CP_Ville": "34470 Pérols",
        "Telephone": "(33) 04 67 64 73 67",
        "lat": "43.5725132",
        "lng": "3.9462674999999763",
        "extra": "https://www.la-boucherie.fr/restaurants/montpellier-perols-34/"
    },
    {
        "Nom": "La Boucherie NANCY",
        "Libelle": "NANCY - HOUDEMONT (54)",
        "Adresse1": " ZAC de Frocourt",
        "CP_Ville": "54180 Houdemont - Fleville",
        "Telephone": "(33) 03 83 47 04 78",
        "lat": "48.6373",
        "lng": "6.18506",
        "extra": "https://www.la-boucherie.fr/restaurants/nancy-houdemont54/"
    },
    {
        "Nom": "La Boucherie NANTES",
        "Libelle": "NANTES - SAINT-HERBLAIN (44)",
        "Adresse1": " Rue du Moulin de la Rousselière",
        "CP_Ville": "44821 Saint-Herlbain",
        "Telephone": "(33) 02 28 07 26 25",
        "lat": "47.2325",
        "lng": "-1.64454",
        "extra": "https://www.la-boucherie.fr/restaurants/nantes-st-herblain-44/"
    },
    {
        "Nom": "La Boucherie NANTES CENTRE VILLE",
        "Libelle": "NANTES CENTRE VILLE (44)",
        "Adresse1": "11 Quai de la Fosse",
        "CP_Ville": "44000 Nantes",
        "Telephone": "(33) 02 40 73 50 22",
        "lat": "47.2116",
        "lng": "-1.56003",
        "extra": "https://www.la-boucherie.fr/restaurants/nantes-centre-ville-44/"
    },
    {
        "Nom": "La Boucherie NEVERS",
        "Libelle": "NEVERS - SERMOISE/LOIRE (58)",
        "Adresse1": " Route de Lyon",
        "Adresse2": "Le Clos Ry",
        "CP_Ville": "58000 Sermoise-Sur-Loire",
        "Telephone": "(33) 03 86 37 55 96",
        "lat": "46.9629",
        "lng": "3.15783",
        "extra": "https://www.la-boucherie.fr/restaurants/nevers-sermoiseloire-58/"
    },
    {
        "Nom": "La Boucherie OLONNE SUR MER",
        "Libelle": "OLONNE-SUR-MER (85)",
        "Adresse1": "94 Bd du Vendée Globe",
        "Adresse2": "Les Thyssalines",
        "CP_Ville": "85340 Olonne-Sur-Mer",
        "Telephone": "(33) 02 51 90 78 29",
        "lat": "46.5153",
        "lng": "-1.76622",
        "extra": "https://www.la-boucherie.fr/restaurants/olonne-sur-mer-85/"
    },
    {
        "Nom": "La Boucherie ORLÉANS",
        "Libelle": "ORLÉANS - OLIVET (45)",
        "Adresse1": "9 Rue Crignon Desormeaux",
        "Adresse2": "Zone Expo Sud - RN20",
        "CP_Ville": "45100 Orléans",
        "Telephone": "(33) 02 38 600 600",
        "lat": "47.8784",
        "lng": "1.90964",
        "extra": "https://www.la-boucherie.fr/restaurants/orleans-olivet-45/"
    },
    {
        "Nom": "La Boucherie ORLÉANS",
        "Libelle": "ORLEANS - SARAN (45)",
        "Adresse1": "1002 RN 20",
        "CP_Ville": "45770 Saran",
        "Telephone": "(33) 02 38 840 840",
        "lat": "47.9468",
        "lng": "1.8933",
        "extra": "https://www.la-boucherie.fr/restaurants/orleans-saran-45/"
    },
    {
        "Nom": "La Boucherie PARAY LE MONIAL",
        "Libelle": "PARAY-LE-MONIAL (71)",
        "Adresse1": " ZAC du Champ Bossu",
        "CP_Ville": "71600 Paray le Monial",
        "Telephone": "(33) 03 85 24 43 55",
        "lat": "46.469005",
        "lng": "4.119011",
        "extra": "https://www.la-boucherie.fr/restaurants/paray-monial-71/"
    },
    {
        "Nom": "La Boucherie PARIS 15EME",
        "Libelle": "PARIS 15EME (75)",
        "Adresse1": "372 Bis rue vaugirard",
        "CP_Ville": "75015 Paris",
        "Telephone": "(33) 0158451469",
        "lat": "48.8338",
        "lng": "2.28993",
        "extra": "https://www.la-boucherie.fr/restaurants/paris-15eme-75/"
    },
    {
        "Nom": "La Boucherie PAU",
        "Libelle": "PAU (64)",
        "Adresse1": "2 Rue Suzanne Lenglen",
        "Adresse2": "ZAC Du Parkway",
        "CP_Ville": "64000 Pau",
        "Telephone": "(33) 05 59 71 00 17",
        "lat": "43.33154074442649",
        "lng": "-0.3604305393615732",
        "extra": "https://www.la-boucherie.fr/restaurants/pau-64/"
    },
    {
        "Nom": "La Boucherie PERPIGNAN",
        "Libelle": "PERPIGNAN (66)",
        "Adresse1": " ZAC du Mas Ballande",
        "Adresse2": "Route d'Elne - RN 114",
        "CP_Ville": "66000 Perpignan",
        "Telephone": "(33) 04 68 63 20 71",
        "lat": "42.6665",
        "lng": "2.91689",
        "extra": "https://www.la-boucherie.fr/restaurants/perpignan-66/"
    },
    {
        "Nom": "La Boucherie CHASSENEUIL DU POITOU",
        "Libelle": "POITIERS - CHASSENEUIL-DU-POITOU (86)",
        "Adresse1": "14 rue du Commerce ",
        "Adresse2": "RN 10 ",
        "CP_Ville": "86360 Chasseneuil-du-Poitou",
        "Telephone": "(33) 05 49 52 99 30",
        "lat": "46.6492",
        "lng": "0.364029",
        "extra": "https://www.la-boucherie.fr/restaurants/poitiers-86/"
    },
    {
        "Nom": "La Boucherie PORNIC",
        "Libelle": "PORNIC (44)",
        "Adresse1": " ZI de L'Europe - Rue du Traité de Paris",
        "Adresse2": "CC Améthys",
        "CP_Ville": "44210 Pornic",
        "Telephone": "(33) 09 66 88 27 81",
        "lat": "47.127207 ",
        "lng": "-2.124677",
        "extra": "https://www.la-boucherie.fr/restaurants/pornic-44/"
    },
    {
        "Nom": "La Boucherie REIMS",
        "Libelle": "REIMS (51)",
        "Adresse1": "1 rue Jacques de la Giraudière",
        "Adresse2": "ZAC Croix Blandin",
        "CP_Ville": "51100 Reims",
        "Telephone": "(0033) 03 26 02 18 25",
        "lat": "49.2381712",
        "lng": "4.0851637000000665",
        "extra": "https://www.la-boucherie.fr/restaurants/reims-51/"
    },
    {
        "Nom": "La Boucherie RENNES",
        "Libelle": "RENNES - CESSON SEVIGNE (35)",
        "Adresse1": "31 Cours de la vilaine",
        "CP_Ville": "35510 Cesson-Sevigné",
        "Telephone": "(33) 02 99 83 66 03",
        "lat": "48.1143",
        "lng": "-1.60973",
        "extra": "https://www.la-boucherie.fr/restaurants/rennes-cesson-sevigne-35/"
    },
    {
        "Nom": "La Boucherie RENNES SAINT-GREGOIRE",
        "Libelle": "RENNES - SAINT-GREGOIRE (35)",
        "Adresse1": " Rue de la terre Adelie",
        "Adresse2": "Zone Alphasis",
        "CP_Ville": "35760 Saint-Grégoire",
        "Telephone": "(33) 02 99 23 15 29",
        "lat": "48.151422",
        "lng": "-1.698822",
        "extra": "https://www.la-boucherie.fr/restaurants/rennes-saint-gregoire-35/"
    },
    {
        "Nom": "La Boucherie ROANNE ",
        "Libelle": "ROANNE (42)",
        "Adresse1": "1 Rue Edouard Branly",
        "Adresse2": "Parc d'activité de la Demi Lieue",
        "CP_Ville": "42300 Mably",
        "Telephone": "(33) 04 77 60 92 17",
        "lat": "46.0647",
        "lng": "4.05459",
        "extra": "https://www.la-boucherie.fr/restaurants/roanne-42/"
    },
    {
        "Nom": "La Boucherie ROCHEFORT SUR MER",
        "Libelle": "ROCHEFORT SUR MER (17)",
        "Adresse1": "1 Avenue Léon Gambetta",
        "CP_Ville": "17300 Rochefort/Mer",
        "Telephone": "(33) 05 46 99 37 36",
        "lat": "45.9387",
        "lng": "-0.96656",
        "extra": "https://www.la-boucherie.fr/restaurants/rochefort-sur-mer-17/"
    },
    {
        "Nom": "La Boucherie ROUEN",
        "Libelle": "ROUEN (76)",
        "Adresse1": "4 Place Saint-Marc",
        "CP_Ville": "76000 Rouen",
        "Telephone": "(33) 02 35 07 70 71",
        "lat": "49.4381",
        "lng": "1.10104",
        "extra": "https://www.la-boucherie.fr/restaurants/rouen-76/"
    },
    {
        "Nom": "La Boucherie ROYAN",
        "Libelle": "ROYAN (17)",
        "Adresse1": "1 Rue Jean Besson",
        "CP_Ville": "17200 Royan",
        "Telephone": "(33) 05 46 39 40 40",
        "lat": "45.6276201",
        "lng": "-0.9990405999999439",
        "extra": "https://www.la-boucherie.fr/restaurants/royan-17/"
    },
    {
        "Nom": "La Boucherie SABLÉ SUR SARTHE",
        "Libelle": "SABLÉ-SUR-SARTHE (72)",
        "Adresse1": " Rue de la Fouquerie",
        "CP_Ville": "72300 Solesmes",
        "Telephone": "(33) 02 43 55 34 47",
        "lat": "47.834945",
        "lng": "-0.295045899999991",
        "extra": "https://www.la-boucherie.fr/restaurants/sable-sarthe-72/"
    },
    {
        "Nom": "La Boucherie ST DIZIER",
        "Libelle": "SAINT-DIZIER (52)",
        "Adresse1": " Zone Commerciale le Chêne St Amand",
        "CP_Ville": "52100 Saint Dizier",
        "Telephone": "(33) 03 25 05 69 68",
        "lat": "48.6221",
        "lng": "4.9654",
        "extra": "https://www.la-boucherie.fr/restaurants/st-dizier-52/"
    },
    {
        "Nom": "La Boucherie ST JEAN D'ANGELY",
        "Libelle": "SAINT-JEAN-D'ANGELY (17)",
        "Adresse1": " Z.A de la Grenoblerie",
        "CP_Ville": "17400 Saint Jean d'Angély",
        "Telephone": "(33) 05 46 26 58 25",
        "lat": "45.9489",
        "lng": "-0.501112",
        "extra": "https://www.la-boucherie.fr/restaurants/st-jean-dangely-17/"
    },
    {
        "Nom": "La Boucherie SAINT-LÔ",
        "Libelle": "SAINT-LÔ (50)",
        "Adresse1": " Rue Alexis de Tocqueville",
        "CP_Ville": "50000 Saint-Lô",
        "Telephone": "(33) 02 33 75 75 75",
        "lat": "49.103807",
        "lng": "-1.0782159999999976",
        "extra": "https://www.la-boucherie.fr/restaurants/saint-lo/"
    },
    {
        "Nom": "La Boucherie ST-MALO",
        "Libelle": "SAINT-MALO (35)",
        "Adresse1": " Rue du Général Patton",
        "CP_Ville": "35400 Saint Malo",
        "Telephone": "(33) 02 99 81 79 18",
        "lat": "48.6206",
        "lng": "-1.99409",
        "extra": "https://www.la-boucherie.fr/restaurants/saint-malo-35/"
    },
    {
        "Nom": "La Boucherie ST NAZAIRE",
        "Libelle": "SAINT-NAZAIRE - TRIGNAC (44)",
        "Adresse1": " ZAC des Grands Champs",
        "CP_Ville": "44570 Trignac",
        "Telephone": "(33) 02 28 54 08 30",
        "lat": "47.2935",
        "lng": "-2.20684",
        "extra": "https://www.la-boucherie.fr/restaurants/st-nazaire-trignac-44/"
    },
    {
        "Nom": "La Boucherie SAINT-WITZ",
        "Libelle": "SAINT-WITZ (95)",
        "Adresse1": " Rue Jean Moulin",
        "Adresse2": "Zone Hôtellière",
        "CP_Ville": "95470 Saint- Witz",
        "Telephone": "(33) 01 30 35 58 88",
        "lat": "49.0900117",
        "lng": "2.553787899999975",
        "extra": "https://www.la-boucherie.fr/restaurants/saint-witz/"
    },
    {
        "Nom": "La Boucherie SAINTES",
        "Libelle": "SAINTES (17)",
        "Adresse1": "107 Cours du Maréchal Leclerc",
        "CP_Ville": "17100 Saintes",
        "Telephone": "(33) 05 46 74 11 80",
        "lat": "45.7548",
        "lng": "-0.65692",
        "extra": "https://www.la-boucherie.fr/restaurants/saintes-17/"
    },
    {
        "Nom": "La Boucherie SALON-DE-PROVENCE",
        "Libelle": "SALON-DE-PROVENCE (13)",
        "Adresse1": "724 Avenue du 18 Juin1940",
        "Adresse2": "Route de Pelissanne",
        "CP_Ville": "13300 Salon de Provence",
        "Telephone": "(33) 04 90 53 62 38",
        "lat": "43.6281",
        "lng": "5.11393",
        "extra": "https://www.la-boucherie.fr/restaurants/salon-de-provence-13/"
    },
    {
        "Nom": "La Boucherie SAUMUR",
        "Libelle": "SAUMUR (49)",
        "Adresse1": "3 - 5 Boulevard du Marechal de Lattre De Tassigny",
        "CP_Ville": "49400 Saumur",
        "Telephone": "(33) 02 41 50 50 44",
        "lat": "47.260549",
        "lng": "-0.089",
        "extra": "https://www.la-boucherie.fr/restaurants/saumur-49/"
    },
    {
        "Nom": "La Boucherie SAVENAY",
        "Libelle": "SAVENAY (44)",
        "Adresse1": " ZAC de la Colleray",
        "CP_Ville": "44260 Savenay",
        "Telephone": "(33) 02 28 21 51 27",
        "lat": "47.3724",
        "lng": "-1.93633",
        "extra": "https://www.la-boucherie.fr/restaurants/savenay-44/"
    },
    {
        "Nom": "La Boucherie SECLIN",
        "Libelle": "SECLIN (59)",
        "Adresse1": " Parc commercial So Green",
        "Adresse2": "UNEXPO",
        "CP_Ville": "59113 Seclin",
        "Telephone": "(33) 03 20 90 35 37",
        "lat": "50.5468",
        "lng": "3.05247",
        "extra": "https://www.la-boucherie.fr/restaurants/seclin-59/"
    },
    {
        "Nom": "La Boucherie SENS",
        "Libelle": "SENS - SAINT-CLEMENT (89)",
        "Adresse1": " ZA de la Fontaine d'Azon",
        "CP_Ville": "89100 Saint-Clément",
        "Telephone": "(33) 03 86 64 86 81",
        "lat": "48.2228",
        "lng": "3.28698",
        "extra": "https://www.la-boucherie.fr/restaurants/sens-st-clement-89/"
    },
    {
        "Nom": "La Boucherie SOCHAUX",
        "Libelle": "SOCHAUX - EXINCOURT (25)",
        "Adresse1": " Lieu dit « Aux Arbues »",
        "Adresse2": "Rue de Sochaux",
        "CP_Ville": "25400 Exincourt",
        "Telephone": "(33) 03 81 31 04 66",
        "lat": "47.5055",
        "lng": "6.84315",
        "extra": "https://www.la-boucherie.fr/restaurants/sochaux-25/"
    },
    {
        "Nom": "La Boucherie ST ETIENNE",
        "Libelle": "ST ETIENNE - LA RICAMARIE (42)",
        "Adresse1": " ZA de la Crêt de Mars",
        "Adresse2": "Rue Jean Moulin",
        "CP_Ville": "42150 La Ricamarie",
        "Telephone": "(33) 04 77 59 74 06",
        "lat": "45.413",
        "lng": "4.37239",
        "extra": "https://www.la-boucherie.fr/restaurants/st-etienne-la-ricamarie-42/"
    },
    {
        "Nom": "La Boucherie STRASBOURG",
        "Libelle": "STRASBOURG (67)",
        "Adresse1": "Les Docks Presqu'ile André Malraux",
        "CP_Ville": "67100 Strasbourg",
        "Telephone": "(33) 03 88 44 45 48",
        "lat": "48.57429865500374",
        "lng": "7.7612292475128015",
        "extra": "https://www.la-boucherie.fr/restaurants/strasbourg-67/"
    },
    {
        "Nom": "La Boucherie TARBES",
        "Libelle": "TARBES - IBOS (65)",
        "Adresse1": "59 Avenue de Pouey",
        "CP_Ville": "65420 Ibos",
        "Telephone": "(33) 05 62 34 05 65",
        "lat": "43.23838335402716",
        "lng": "0.039949011778276144",
        "extra": "https://www.la-boucherie.fr/restaurants/tarbes-ibos-65/"
    },
    {
        "Nom": "La Boucherie THIONVILLE",
        "Libelle": "THIONVILLE - TERVILLE (57)",
        "Adresse1": " Centre commercial Super Green",
        "Adresse2": "La Petite Ouette ",
        "CP_Ville": "57180 Terville",
        "Telephone": "(33) 03 82 52 80 48",
        "lat": "49.34735552166031",
        "lng": "6.129026299444604",
        "extra": "https://www.la-boucherie.fr/restaurants/thionville-terville-57/"
    },
    {
        "Nom": "La Boucherie TOULOUSE",
        "Libelle": "TOULOUSE - LABEGE (31)",
        "Adresse1": "1423 Rue Occitane",
        "Adresse2": "ZAC de l'Hers",
        "CP_Ville": "31670 Labège",
        "Telephone": "(33) 05 61 00 19 60",
        "lat": "43.5405",
        "lng": "1.51115",
        "extra": "https://www.la-boucherie.fr/restaurants/toulouse-labege-31/"
    },
    {
        "Nom": "La Boucherie MURET",
        "Libelle": "TOULOUSE - MURET (31)",
        "Adresse1": "49 Avenue d'Europe",
        "CP_Ville": "31600 Muret",
        "Telephone": "(33) 05 61 16 61 71",
        "lat": "43.4724518",
        "lng": "1.3325717",
        "extra": "https://www.la-boucherie.fr/restaurants/muret-31/"
    },
    {
        "Nom": "La Boucherie TOURS",
        "Libelle": "TOURS (37)",
        "Adresse1": "287 Avenue André Maginot",
        "CP_Ville": "37100 Tours Nord",
        "Telephone": "(33) 02 47 466 466",
        "lat": "47.429",
        "lng": "0.704734",
        "extra": "https://www.la-boucherie.fr/restaurants/tours-37/"
    },
    {
        "Nom": "La Boucherie TROYES",
        "Libelle": "TROYES - LA CHAPELLE-SAINT-LUC (10)",
        "Adresse1": "1 Rue René Descartes",
        "CP_Ville": "10600 La Chapelle Saint Luc",
        "Telephone": "(33) 03 25 78 24 71",
        "lat": "48.324",
        "lng": "4.03085",
        "extra": "https://www.la-boucherie.fr/restaurants/troyes-la-chapelle-st-luc-10/"
    },
    {
        "Nom": "La Boucherie USSEL",
        "Libelle": "USSEL (19)",
        "Adresse1": " Rue de Ponty",
        "Adresse2": "Centre E.Leclerc",
        "CP_Ville": "19200 Ussel",
        "Telephone": "(33) 05 55 95 33 33 ",
        "lat": "45.54405048546297",
        "lng": "2.2967449497680263",
        "extra": "https://www.la-boucherie.fr/restaurants/ussel-19/"
    },
    {
        "Nom": "La Boucherie VALBONNE",
        "Libelle": "VALBONNE - SOPHIA ANTIPOLIS (06)",
        "Adresse1": "502  rue Albert Caquot",
        "CP_Ville": "06560 Valbonne",
        "Telephone": "(33) 04 92 38 43 80",
        "lat": "43.6196807",
        "lng": "7.056357299999945",
        "extra": "https://www.la-boucherie.fr/restaurants/valbonne-sophia-antipolis/"
    },
    {
        "Nom": "La Boucherie VALENCE",
        "Libelle": "VALENCE - SAINT-MARCEL-LES-VALENCE (26)",
        "Adresse1": " ZAE le Pas du Buis",
        "Adresse2": "Lieu dit Quartier Plovier",
        "CP_Ville": "26320 Saint Marcel les Valence",
        "Telephone": "(33) 04 75 56 09 94",
        "lat": "44.9594",
        "lng": "4.94006",
        "extra": "https://www.la-boucherie.fr/restaurants/valence-st-marcel-les-valence-26/"
    },
    {
        "Nom": "La Boucherie VANNES",
        "Libelle": "VANNES (56)",
        "Adresse1": " Rue du Gay Lussac",
        "Adresse2": "Zone du parc Lann",
        "CP_Ville": "56000 Vannes",
        "Telephone": "(33) 02 97 46 03 04",
        "lat": "47.6675",
        "lng": "-2.79053",
        "extra": "https://www.la-boucherie.fr/restaurants/vannes-56/"
    },
    {
        "Nom": "La Boucherie VICHY",
        "Libelle": "VICHY - BELLERIVE (03)",
        "Adresse1": "83 Route de Charmeil",
        "CP_Ville": "03700 Bellerive sur Allier",
        "Telephone": "(33) 04 70 59 75 19",
        "lat": "46.142584",
        "lng": "3.397323",
        "extra": "https://www.la-boucherie.fr/restaurants/vichy-bellerive/"
    },
    {
        "Nom": "La Boucherie VIENNE",
        "Libelle": "VIENNE (38)",
        "Adresse1": " Centre commercial E. Leclerc ",
        "Adresse2": "Chemin Des Lones, Estressin",
        "CP_Ville": "38200 Vienne",
        "Telephone": "(33) 04 74 87 02 26",
        "lat": "45.542996",
        "lng": "4.850416",
        "extra": "https://www.la-boucherie.fr/restaurants/vienne-38/"
    },
    {
        "Nom": "La Boucherie VILLEPINTE",
        "Libelle": "VILLEPINTE (93)",
        "Adresse1": "Hôtel Ibis Villepinte  Parc des expositions ZI Paris nord",
        "CP_Ville": "95972  Roissy Charles De Gaulle",
        "Telephone": "(0033) 01 48 63 04 89",
        "lat": "48.9665692",
        "lng": "2.5171678000000384",
        "extra": "https://www.la-boucherie.fr/restaurants/villepinte/"
    },
    {
        "Nom": "La Boucherie VILLIERS SUR MARNE",
        "Libelle": "VILLIERS-SUR-MARNE (94)",
        "Adresse1": "21 Boulevard Jean Monnet",
        "Adresse2": "ZAC des Boutareines",
        "CP_Ville": "94350 Villiers sur Marne",
        "Telephone": "(33) 01 49 30 21 44",
        "lat": "48.8259",
        "lng": "2.52883",
        "extra": "https://www.la-boucherie.fr/restaurants/villiers-sur-marne-94/"
    },
    {
        "Nom": "La Boucherie VIRY NOUREUIL",
        "Libelle": "VIRY-NOUREUIL (02)",
        "Adresse1": " ZAC les Terrages",
        "CP_Ville": "02300 Viry Noureuil",
        "Telephone": "(33) 03 23 38 37 30",
        "lat": "49.639016",
        "lng": "3.252397999999971",
        "extra": "https://www.la-boucherie.fr/restaurants/viry-noureuil-02/"
    },
    {
        "Nom": "La Boucherie WASQUEHAL",
        "Libelle": "WASQUEHAL (59)",
        "Adresse1": "3 Rue de la Ladrie",
        "Adresse2": "Z.I de la Pilaterie",
        "CP_Ville": "59290 Wasquehal",
        "Telephone": "(+33) 03 20 83 08 67",
        "lat": "50.6515",
        "lng": "3.12617",
        "extra": "https://www.la-boucherie.fr/restaurants/wasquehal-59/"
    },
    {
        "Nom": "La Boucherie WOIPPY",
        "Libelle": "WOIPPY (57) ",
        "Adresse1": " Hôtel Ibis Metz Nord",
        "Adresse2": "56 rue du fort Gambetta",
        "CP_Ville": "57140 Woippy",
        "Telephone": "(33) 03 87 34 20 30",
        "lat": "49.150663",
        "lng": "6.177719",
        "extra": "https://www.la-boucherie.fr/restaurants/woippy-57/"
    }
];
}