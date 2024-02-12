import Route from "./Route.js";

//Définir ici les routes
export const allRoutes = [
    new Route ("/", "Accueil", "/pages/home.html"),
    new Route ("/habitats", "Les habitats", "/pages/habitats.html"),
    new Route ("/savane", "La savane", "/pages/savane.html"),
    
];


//Le titre s'affiche comme ceci: Route.titre - websitename
export const websiteName = "Zoo Arcadia";